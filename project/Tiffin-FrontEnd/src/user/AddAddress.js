import {useState} from "react";
import axios from "axios";
import {URL_add_address} from "../apis/apis";
import getAccessToken from "../util/getAccessToken";
import {toast, ToastContainer} from "react-toastify";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {useNavigate} from "react-router-dom";

export default function AddAddress() {
    const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"))
    const navigate = useNavigate()
    const [address, setaddress] = useState({
            flatNo: "",
            street: "",
            landmark: "",
            city: "",
            pincode: ""
        }
    )
    const HandleChange = (args) => {
        const copyaddress = {...address};
        copyaddress[args.target.name] = args.target.value;
        setaddress(copyaddress);
        console.log(address);
    };

    function handleRegister() {
        axios.post(URL_add_address(loggedUser.uid), address,
            {headers: {Authorization: getAccessToken()}})
            .then((res) => console.log(res.data))
            .then(() => toast.success("Address added!", {
                position: toast.POSITION.TOP_RIGHT,
                theme: "dark"
            }))
            .then(() => setTimeout(() =>
                    toast.dark("Redirecting to home...", {
                        position: toast.POSITION.TOP_RIGHT
                    })
                , 1000))
            .then(() => setTimeout(() => navigate("/"), 4000))
    }


    return (
        <>
            <ToastContainer autoClose={2000}/>
            <div className={'FormContainer'}>
                <Form>
                    <div className={'PageHeading'}>
                        <h1>🏠</h1>
                    </div>
                    <FormGroup>
                        <Label for="exampleEmail">
                            FlatNo
                        </Label>
                        <Input
                            name={'flatNo'} type={'text'} placeholder={"Enter flatNo"}
                            value={address.flatNo} onChange={HandleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Street
                        </Label>
                        <Input
                            name={'street'} type={'text'} placeholder={"Enter street"}
                            value={address.street} onChange={HandleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Landmark
                        </Label>
                        <Input
                            name={'landmark'} type={'text'} placeholder={"Enter landmark"}
                            value={address.landmark} onChange={HandleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            City
                        </Label>
                        <Input
                            name={'city'} type={'text'} placeholder={"Enter your city"}
                            value={address.city} onChange={HandleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Pincode
                        </Label>
                        <Input
                            name={'pincode'} type={'text'} placeholder={"Enter your pincode"}
                            value={address.pincode} onChange={HandleChange}
                        />
                    </FormGroup>
                    <center>
                        <Button
                            className={'btn-warning'}
                            onClick={handleRegister}
                        >
                            Register
                        </Button>
                    </center>
                </Form>
            </div>
        </>
    )
}