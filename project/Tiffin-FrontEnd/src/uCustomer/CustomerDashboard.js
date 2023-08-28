import {Badge, Button} from "reactstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import getAccessToken from "../util/getAccessToken";
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import {URL_cust_create_tiffin, URL_cust_get_order, URL_get_Customer} from "../apis/apis";
import TiffinInfo from "../uVendor/TiffinInfo";

export default function CustomerDashboard() {
    const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"))
    const [customer, setCustomer] = useState({})
    const navigate = useNavigate()
    const [tiffin, setTiffin] = useState({})
    const [order, setOrder] = useState({})
    useEffect(() => {
        axios.get(URL_get_Customer(loggedUser.id),
            {headers: {Authorization: getAccessToken()}})
            .then((res) => setCustomer(() => res.data))
        axios.get(URL_cust_get_order(loggedUser.id),
            {headers: {Authorization: getAccessToken()}})
            .then((res) => setOrder(() => res.data))
            .then(() => console.log("Fetching order"))
    }, [])

    function syncOrderStatus() {
        axios.get(URL_cust_get_order(loggedUser.id),
            {headers: {Authorization: getAccessToken()}})
            .then((res) => setOrder(() => res.data))
            .then(() => toast.dark("Order status synced!"))
    }

    function handleCreateTiffin() {
        axios.get(URL_cust_create_tiffin(loggedUser.id),
            {headers: {Authorization: getAccessToken()}})
            .then(() => navigate("/addTiffinDetails"))
    }

    return (
        <>
            <ToastContainer autoClose={2000}/>
            <div className={'ParentContainer'}>
                <div className={'LeftContainer'}>
                    <div className={'LeftUpper'}>
                        <div className={'DashBlock'}>
                            <center><h2>Actions</h2></center>
                            <Button className={'btn-success'} onClick={handleCreateTiffin}>Create Tiffin</Button>
                            <Button className={'btn-success'} onClick={() => navigate("/addTiffinDetails")}>Add tiffin
                                detail</Button>
                            <Button className={'btn-info'} onClick={() => navigate("/addAddress")}>Add address</Button>
                            <Button className={'btn-info'} onClick={() => navigate("/editAddress")}>Update
                                Address</Button>
                            <Button className={'btn-info'} onClick={() => navigate("/editUser")}>Update info</Button>
                            <center>
                                <div className={'BalanceContainer'}>
                                    Balance
                                    <div className={'Balance'}>{customer.balance}</div>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
                <div className={'RightContainer'}>
                    <div className={'RightUpper'}>
                        <center>
                            <div className={'DashBlock'}>
                                <center><h2>My tiffin</h2></center>
                                {
                                    (customer.tiffin == null) ?
                                        <h3>No tiffin</h3>
                                        :
                                        <div>
                                            <TiffinInfo tiffin={customer.tiffin}/>
                                            <div className={'RightLower'}>
                                                <div>
                                                    <h2>My Order</h2>
                                                    <center>
                                                        <div className={'OrderStatus'}>
                                                            {
                                                                (!order.isAccepted)?
                                                                    <Button outline color={'danger'}>Not accepted</Button>
                                                                    :
                                                                    <Button color={'danger'}>Accepted</Button>
                                                            }
                                                            {
                                                                (!order.isPickedUp)?
                                                                    <Button outline color={'warning'}>Not picked up</Button>
                                                                    :
                                                                    <Button color={'warning'}>Picked up</Button>
                                                            }
                                                            {
                                                                (!order.isDelivered)?
                                                                    <Button outline color={'success'}>Not delivered</Button>
                                                                    :
                                                                    <Button color={'success'}>Delivered</Button>
                                                            }
                                                        </div>
                                                    </center>
                                                </div>
                                               <div className={'BtnCntr'}>
                                                   <Button className={'btn-info'} onClick={syncOrderStatus}>Sync Order</Button>
                                               </div>
                                            </div>
                                        </div>
                                }
                            </div>
                        </center>
                    </div>

                </div>
            </div>
        </>
    )
}