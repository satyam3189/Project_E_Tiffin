import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {URL_add_item} from "../apis/apis";
import getAccessToken from "../util/getAccessToken";
import {toast, ToastContainer} from "react-toastify";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

export default function AddItem() {
    const navigate = useNavigate()
    const vendor = JSON.parse(sessionStorage.getItem("loggedUser"))
    const [item, setItem] = useState({
        name: "", qty: "", price: ""
    })
    const HandleChange = (args) => {
        const copyitem = {...item};
        copyitem[args.target.name] = args.target.value;
        setItem(copyitem);
        console.log(item);
    };

    function handleRegister() {
        axios.post(URL_add_item(vendor.id),item,
            {headers: {Authorization: getAccessToken()}})
            .then((res) => console.log(res.data))
            .then(() => toast.success("item registered!", {
                position: toast.POSITION.TOP_RIGHT,
                theme: "dark"
            }))
            .then(() => setTimeout(() =>
                    toast.dark("Redirecting to Dashboard...", {
                        position: toast.POSITION.TOP_RIGHT
                    })
                , 1000))
            .then(() => setTimeout(() => navigate("/vendorDashboard"), 4000))
    }


    return (
        <>
            <ToastContainer autoClose={2000}/>
            <div className={'FormContainer'}>
                <Form>
                    <div className={'PageHeading'}>
                        <h1>Add New Item</h1>
                    </div>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Item name
                        </Label>
                        <Input
                            name={'name'} type={'text'} placeholder={"Enter item name"}
                            value={item.name} onChange={HandleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Price
                        </Label>
                        <Input
                            name={'price'} type={'text'} placeholder={"Enter item price"}
                            value={item.price} onChange={HandleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                            Stock
                        </Label>
                        <Input
                            name={'qty'} type={'text'} placeholder={"Enter item quantity"}
                            value={item.qty} onChange={HandleChange}
                        />
                    </FormGroup>
                    <center>
                        <Button
                            className={'btn-warning'}
                            onClick={handleRegister}
                        >
                            Add
                        </Button>
                    </center>
                </Form>
            </div>
        </>
    )
}