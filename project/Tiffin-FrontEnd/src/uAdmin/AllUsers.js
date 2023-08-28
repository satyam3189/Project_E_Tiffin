import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {URL_all_users, URL_delete_user} from "../apis/apis";
import getAccessToken from "../util/getAccessToken";
import {Button, Table} from "reactstrap";
import {toast, ToastContainer} from "react-toastify";
import CounterContext from "../uDeliveryP/CounterContext";

export default function AllUsers() {
    const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"))
    const [userList, setUserList] = useState([])
    const {counter} = useContext(CounterContext)
    const {setCounter} = useContext(CounterContext)
    useEffect(() => {
        axios.get(URL_all_users,
            {headers: {Authorization: getAccessToken()}})
            .then((res) => setUserList(() => res.data))
            .then(setCounter(() => userList.length));
    }, [])
    useEffect(() => {
        axios.get(URL_all_users,
            {headers: {Authorization: getAccessToken()}})
            .then((res) => setUserList(() => res.data))
    }, [counter])
    return (
        <>
            <ToastContainer autoClose={2000}/>
            <div className={'TableContainer'}>
                <center><h2>All users</h2></center>
                <Table
                    responsive
                    hover
                >
                    <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Username
                        </th>
                        <th>
                            Mobile no.
                        </th>
                        <th>
                            DOB
                        </th>
                        <th>
                            Role
                        </th>
                         <th>
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        userList.map((user, index) =>
                            <tr key={index}>
                                <th scope="row">
                                    {user.uid}
                                </th>
                                <td>
                                    {user.firstName}
                                </td>
                                <td>
                                    {user.lastName}
                                </td>
                                <td>
                                    {user.username}
                                </td>
                                <td>
                                    {user.mob}
                                </td>
                                <td>
                                    {user.dob}
                                </td>
                                <td>
                                    <div className={'RoleBadge'}>
                                        {
                                            (user.role.name === "ROLE_ADMIN") ?
                                                <Button color={'danger'}>Admin</Button>
                                                :
                                                null
                                        }
                                        {
                                            (user.role.name === "ROLE_VENDOR") ?
                                                <Button color={'warning'}>Vendor</Button>
                                                :
                                                null
                                        }
                                        {
                                            (user.role.name === "ROLE_CUSTOMER") ?
                                                <Button color={'primary'}>Customer</Button>
                                                :
                                                null
                                        }
                                        {
                                            (user.role.name === "ROLE_DELIVERY_PERSONNEL") ?
                                                <Button color={'success'}>Delivery</Button>
                                                :
                                                null
                                        }
                                    </div>
                                </td>
                                 <td>
                                    <Button className={'btn-danger'}
                                            onClick={() => {
                                                axios.get(URL_delete_user(user.uid),
                                                    {headers: {Authorization: getAccessToken()}})
                                                    .then(() => setCounter(p => p + 1))
                                                    .then(() => toast.success("User deleted!", {
                                                        position: toast.POSITION.TOP_RIGHT,
                                                        theme: "dark"
                                                    }))
                                            }}
                                    >
                                        Delete
                                    </Button> 
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
        </>
    )
}