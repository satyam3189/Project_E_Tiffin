import {Button} from "reactstrap";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import getAccessToken from "../util/getAccessToken";
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import {
    URL_Delp_checkin,
    URL_Delp_checkout,
    URL_Delp_pickup_order_post,
    URL_get_Customer,
    URL_get_Delp
} from "../apis/apis";
import CounterContext from "./CounterContext";

export default function DelDashboard() {
    const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"))
    const [deliveryP, setDeliveryP] = useState({})
    const navigate = useNavigate()
    const {counter} = useContext(CounterContext)
    const {setCounter} = useContext(CounterContext)

    useEffect(() => {
        axios.get(URL_get_Delp(loggedUser.id),
            {headers: {Authorization: getAccessToken()}})
            .then((res) => setDeliveryP(() => res.data))
    }, [])

    function handleCheckIn() {
        axios
            .get(URL_Delp_checkin(loggedUser.id),
                {headers: {Authorization: getAccessToken()}})
            .then(() => setCounter(p => p + 1))
        toast.success("Checked in", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "dark"
        })

    }

    function handleCheckOut() {
        axios
            .get(URL_Delp_checkout(loggedUser.id),
                {headers: {Authorization: getAccessToken()}})
            .then(() => setCounter(p => p + 1))
        toast.success("Checked out", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "dark"
        })

    }

    return (
        <>
            <ToastContainer autoClose={2000}/>
            <div className={'LeftContainer'}>
                <Button className={'btn-warning'} onClick={() => navigate("/allOrders")}>All orders</Button>
                <Button className={'btn-warning'} onClick={() => navigate("/myOrders")}>My orders</Button>
                <Button className={'btn-info'} onClick={() => navigate("/addAddress")}>Add address</Button>
                <Button className={'btn-info'} onClick={() => navigate("/editAddress")}>Update
                    Address</Button>
                <Button className={'btn-info'} onClick={() => navigate("/editUser")}>Update info</Button>
                <Button className={'btn-danger'} onClick={handleCheckIn}>Check in</Button>
                <Button className={'btn-danger'} onClick={handleCheckOut}>Check out</Button>
                {/* <center>
                    <div className={'BalanceContainer'}>
                        Balance
                        <div className={'Balance'}>{deliveryP.balance}</div>
                    </div>
                </center> */}
            </div>
        </>
    )
}