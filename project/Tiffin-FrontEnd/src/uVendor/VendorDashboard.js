import {Button} from "reactstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {URL_get_Vendor, URL_vendor_items} from "../apis/apis";
import getAccessToken from "../util/getAccessToken";
import {useNavigate} from "react-router-dom";
import {ToastContainer} from "react-toastify";

export default function VendorDashboard() {
    const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"))
    const navigate = useNavigate()
    const [vendor, setVendor] = useState({})
    useEffect(() => {
        axios.get(URL_get_Vendor(loggedUser.id),
            {headers: {Authorization: getAccessToken()}})
            .then((res) => setVendor(() => res.data))
    }, [])

    return (
        <>
            <ToastContainer autoClose={2000}/>
            <div className={'ParentContainer'}>
                <div className={'LeftContainer'}>
                        <center><h2>Actions</h2></center>
                        <div className={'DashColumn'}>
                            <Button className={'btn-success'} onClick={() => navigate("/vendorAddItem")}>Add item</Button>
                            <Button className={'btn-success'} onClick={() => navigate("/vendorManageItem")}>Manage items</Button>
                            <Button className={'btn-info'} onClick={() => navigate("/addAddress")}>Add address</Button>
                            <Button className={'btn-info'} onClick={() => navigate("/editAddress")}>Update Address</Button>
                            <Button className={'btn-info'} onClick={()=>navigate("/editUser")}>Update info</Button>
                           <center>
                               <div className={'BalanceContainer'}>
                                   Balance
                                   <div className={'Balance'}>{vendor.balance}</div>
                               </div>
                           </center>
                        </div>
                </div>
                <div className={'RightContainer'}>
                    <center>
                        <h2>My Items</h2>
                        <div className={'MyTable'}>
                            {vendor.items && vendor.items.map((item, index) => (
                                <div key={index} className={'MyRow'}>
                                    <div className={'InfoContainer'}>
                                        <div className={'ModalElementValUser'}>
                                            {"Name:"}
                                        </div>
                                        <div className={'MyRowElementDesc'}>{item.name}</div>
                                    </div>
                                    <div className={'InfoContainer'}>
                                        <div className={'ModalElementValUser'}>
                                            {"Price:"}
                                        </div>
                                        <div className={'MyRowElementDesc'}>{item.price}</div>
                                    </div>
                                    <div className={'InfoContainer'}>
                                        <div className={'ModalElementValUser'}>
                                            {"Stock:"}
                                        </div>
                                        <div className={'MyRowElementDesc'}>{item.qty}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </center>
                </div>
            </div>
        </>
    )
}