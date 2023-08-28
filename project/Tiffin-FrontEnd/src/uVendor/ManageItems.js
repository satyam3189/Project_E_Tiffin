import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {URL_delete_item, URL_vendor_items} from "../apis/apis";
import getAccessToken from "../util/getAccessToken";
import CounterContext from "../uDeliveryP/CounterContext";
import {toast, ToastContainer} from "react-toastify";

export default function ManageItems() {
    const vendor = JSON.parse(sessionStorage.getItem("loggedUser"))
    const navigate = useNavigate()
    const [items, setItems] = useState([])
    const {counter} = useContext(CounterContext)
    const {setCounter} = useContext(CounterContext)
    useEffect(() => {
        axios.get(URL_vendor_items(vendor.id),
            {headers: {Authorization: getAccessToken()}})
            .then((res) => setItems(() => res.data))
    }, [])
    useEffect(() => {
        axios.get(URL_vendor_items(vendor.id),
            {headers: {Authorization: getAccessToken()}})
            .then((res) => setItems(() => res.data))
    }, [counter])
    return (
        <center>
            <ToastContainer autoClose={2000}/>
            <div className={'RightContainer1'}>
                <h2>My Items</h2>
                <div className={'MyTable'}>
                    {items.map((item, index) => (
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
                            <div className={'InfoContainer'}>
                                <button className={'BtnItem'}
                                        onClick={() => navigate("/vendorEditItem", {state: JSON.stringify(item)})}
                                >
                                    Edit
                                </button>
                                <button className={'BtnCancel'}
                                        onClick={() => {
                                            axios
                                                .get(URL_delete_item(item.iid),
                                                    {headers: {Authorization: getAccessToken()}})
                                                .then(() => toast.success("item deleted!", {
                                                    position: toast.POSITION.TOP_RIGHT,
                                                    theme: "dark"
                                                }))
                                                .then(() => setCounter(p => p - 1))
                                        }}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </center>
    )
}