import {Button} from "reactstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import getAccessToken from "../util/getAccessToken";
import {useNavigate} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {URL_find_user_with_id, URL_get_user} from "../apis/apis";

export default function AdminDashboard() {
    const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"))
    const [user, setuser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(URL_find_user_with_id(loggedUser.uid),
            {headers: {Authorization: getAccessToken()}})
            .then((res) => {
                setuser(() => res.data)
                console.log(res.data.address)
            })
    }, [])

    return (
        <>
            <ToastContainer autoClose={2000}/>
            <div className={'LeftContainer'}>
                <div className={'LeftUpper'}>
                    <div className={'DashBlock'}>
                        <center><h2>Welcome {user.firstName}</h2></center>
                        <Button className={'btn-danger'} onClick={()=>navigate("/allUsers")}>Manage Users</Button>
                        <Button className={'btn-info'} onClick={() => navigate("/addAddress")}>Add address</Button>
                        <Button className={'btn-info'} onClick={() => navigate("/editAddress")}>Update Address</Button>
                        <Button className={'btn-info'} onClick={()=>navigate("/editUser")}>Update info</Button>
                    </div>
                </div>
            </div>

        </>
    )
}