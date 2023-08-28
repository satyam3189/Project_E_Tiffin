import {Button, Table} from "reactstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {URL_cust_place_order, URL_cust_show_tiffin} from "../apis/apis";

import getAccessToken from "../util/getAccessToken";
import {toast, ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";

export default function CustomerShowTiffin() {
    console.log("Hello, world!");

    const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"))
    const [tiffinDetails, setTiffinDetails] = useState([])

    const total = tiffinDetails.reduce((acc, curr) => acc + curr.qty * curr.item.price, 0);
    const navigate = useNavigate()

    useEffect(() => {

        axios
            .get(URL_cust_show_tiffin(loggedUser.id),
                {headers: {Authorization: getAccessToken()}})
            .then((res) => {
                    setTiffinDetails(() => res.data.tiffinDetails)
                    console.log(res.data);
                }
            )
    }, [])

    function handlePlaceOrder() {
        axios.get(URL_cust_place_order(loggedUser.id),
            {headers: {Authorization: getAccessToken()}})
            .then(() => toast.success("Order placed!", {
                position: toast.POSITION.TOP_RIGHT,
                theme: "dark"
            }))
            .then(() => setTimeout(() =>
                    toast.dark("Redirecting to Dashboard...", {
                        position: toast.POSITION.TOP_RIGHT
                    })
                , 1000))
            .then(() => setTimeout(() => navigate("/customerDashboard"), 4000))
    }

    return (
        <>
            <ToastContainer autoClose={2000}/>
            <div className={'TableContainer'}>
                <center>
                    <h2>Bill</h2>
                    <Table
                        hover
                        size="sm"
                    >
                        <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                name
                            </th>

                            <th>
                                rate
                            </th>
                            <th>
                                qty
                            </th>
                            <th>
                                total
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            tiffinDetails.map((tiffindetail) =>
                                <tr>
                                    <th scope="row">
                                        {tiffindetail.item.iid}
                                    </th>
                                    <td>
                                        {tiffindetail.item.name}
                                    </td>

                                    <td>
                                        {tiffindetail.item.price}
                                    </td>
                                    <td>
                                        {tiffindetail.qty}
                                    </td>
                                    <td>
                                    <span>
                                {tiffindetail.qty * tiffindetail.item.price}</span>
                                    </td>
                                </tr>
                            )

                        }
                        <tr>

                        </tr>


                        </tbody>


                    </Table>
                    <Button className={'btn-success'}
                            onClick={handlePlaceOrder}
                    >Place order</Button>

                </center>

                <footer>
                    <center>
                        <br></br>
                        Amount To Pay:{total}

                    </center>
                </footer>
            </div>
        </>
    )
}