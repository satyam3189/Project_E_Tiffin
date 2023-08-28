import {Button} from "reactstrap";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {URL_all_items, URL_cust_add_tiffin_details_post} from "../apis/apis";
import getAccessToken from "../util/getAccessToken";
import {toast, ToastContainer} from "react-toastify";

export default function AddTiffinDetails() {
    const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"))
    const [items, setItems] = useState([])
    const [itemDetails, setItemDetails] = useState([])
    const [itemDetailsQty, setItemDetailsQty] = useState([])
    const [isButtonDisabled, setIsButtonDisabled] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(URL_all_items,
                {headers: {Authorization: getAccessToken()}})
            .then((res) => setItems(() => res.data))
    }, [])

    useEffect(() => {
        setItemDetails(() => items.map((item) => ({item: item, qty: 0})))
        setItemDetailsQty(() => items.map(() => 0))
        setIsButtonDisabled(() => items.map(() => false))
    }, [items])

    const addToTiffin = (itemDetail, index) => {
        if (itemDetailsQty[index] !== 0) {
            setIsButtonDisabled(prev => {
                const temp = [...prev]
                temp[index] = true
                return temp
            })
            itemDetail.qty = itemDetailsQty[index]
            axios
                .post(URL_cust_add_tiffin_details_post(loggedUser.id), itemDetail,
                    {headers: {Authorization: getAccessToken()}})
                .then(() => toast.success("Item added!", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark"
                }))
        }
    }

    function Increment(stock, index) {
        if (itemDetailsQty[index] !== stock) {
            setItemDetailsQty(prev => {
                const temp = [...prev]
                temp[index]++
                return temp
            })
        }
    }

    function Decrement(index) {
        if (itemDetailsQty[index] !== 0) {
            setItemDetailsQty(prev => {
                const temp = [...prev]
                temp[index]--
                return temp
            })
        }
    }

    return (
        <>
            <ToastContainer autoClose={2000}/>
            <div className={'RightContainer2'}>
                <center>
                    <h2>Tiffin Details</h2>
                    {
                        itemDetails.map((itemDetail, index) =>
                            <div key={index} className={'MyRow'}>
                                <div className={'InfoContainer'}>
                                    <div className={'ModalElementValUser'}>
                                        {"#:"}
                                    </div>
                                    <div className={'MyRowElementDesc'}>{itemDetail.item.iid}</div>
                                </div>
                                <div className={'InfoContainer'}>
                                    <div className={'ModalElementValUser'}>
                                        {"Name:"}
                                    </div>
                                    <div className={'MyRowElementDesc'}> {itemDetail.item.name}</div>
                                </div>
                                <div className={'InfoContainer'}>
                                    <div className={'ModalElementValUser'}>
                                        {"Qty:"}
                                    </div>
                                    <div className={'MyRowElementDesc'}>{itemDetail.item.qty}</div>
                                </div>
                                <div className={'InfoContainer'}>
                                    <div className={'ModalElementValUser'}>
                                        {"Price:"}
                                    </div>
                                    <div className={'MyRowElementDesc'}> {itemDetail.item.price}</div>
                                </div>
                                <div className={'InfoContainer'}>
                                    <div className={'ButtonContainer'}>
                                        <Button className={'btn-danger'} onClick={() => Decrement(index)}>-</Button>
                                        <div className={'Quantity'}>
                                            {itemDetailsQty[index]}
                                        </div>
                                        <Button className={'btn-danger'} onClick={() => Increment(itemDetail.item.qty, index)}>+</Button>
                                    </div>
                                </div>
                                <div className={'InfoContainer'}>
                                    <div className={'ButtonContainer'}>
                                        <Button className={'btn-success'} onClick={() => addToTiffin(itemDetail, index)}
                                                disabled={isButtonDisabled[index]}
                                        >Add Item</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <Button className={'btn-info'} onClick={()=>navigate("/customerShowTiffin")}>
                        View my Tiffin
                    </Button>
                </center>
            </div>
        </>
    )
}