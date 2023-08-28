import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {URL_vendor_edit_item} from "../apis/apis";
import getAccessToken from "../util/getAccessToken";
import {toast, ToastContainer} from "react-toastify";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

export default function EditItem() {
    const navigate = useNavigate();
    const location = useLocation()
    const [item, setItem] = useState(JSON.parse(location.state));
    const HandleChange = (args) => {
        const copyitem = {...item};
        copyitem[args.target.name] = args.target.value;
        setItem(copyitem);
        console.log(item);
    };

    function handleUpdate() {
        axios.post(URL_vendor_edit_item(item.iid), item,
            {headers: {Authorization: getAccessToken()}})
            .then((res) => console.log(res.data))
            .then(() => toast.success("item updated!", {
                position: toast.POSITION.TOP_RIGHT,
                theme: "dark"
            }))
            .then(() => setTimeout(() =>
                    toast.dark("Redirecting to Items...", {
                        position: toast.POSITION.TOP_RIGHT
                    })
                , 1000))
            .then(() => setTimeout(() => navigate("/vendorManageItem"), 4000))
    }


    return (
        <>
            <ToastContainer autoClose={2000}/>
            <div className={'FormContainer'}>
                <Form>
                    <div className={'PageHeading'}>
                        <h1>✏️🍗</h1>
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
                            Stock
                        </Label>
                        <Input
                            name={'price'} type={'text'} placeholder={"Enter item price"}
                            value={item.price} onChange={HandleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                            Price
                        </Label>
                        <Input
                            name={'qty'} type={'text'} placeholder={"Enter item quantity"}
                            value={item.qty} onChange={HandleChange}
                        />
                    </FormGroup>
                    <center>
                        <Button
                            className={'btn-success'}
                            onClick={handleUpdate}
                        >
                            Update
                        </Button>
                    </center>
                </Form>
            </div>
        </>
    )
}