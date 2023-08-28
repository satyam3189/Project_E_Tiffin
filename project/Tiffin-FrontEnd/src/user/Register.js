import {useState} from "react";
import axios from "axios";
import {URL_add_user} from "../apis/apis";
import getAccessToken from "../util/getAccessToken";
import {toast, ToastContainer} from "react-toastify";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {useNavigate} from "react-router-dom";

export default function Register() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        firstName: "", lastName: "", mob: "", dob: "", username: "", password: ""
    })
    const [role, setRole] = useState(0);
    const HandleChange = (args) => {
        const copyUser = {...user};
        copyUser[args.target.name] = args.target.value;
        setUser(copyUser);
        console.log(user);
    };

    function handleRegister() {
        axios.post(URL_add_user(role),user)
            .then((res) => console.log(res.data))
            .then(() => toast.success("User registered!", {
                position: toast.POSITION.TOP_RIGHT,
                theme: "dark"
            }))
            .then(() => setTimeout(() =>
                    toast.dark("Redirecting to login...", {
                        position: toast.POSITION.TOP_RIGHT
                    })
                , 1000))
            .then(() => setTimeout(() => navigate("/login"), 4000))
    }

    const HandleRoleChange = (e) => {
        setRole(() => e.target.value)
        console.log(role);
    }

    return (
        <>
            <ToastContainer autoClose={2000}/>
            <div className={'FormContainer'}>
                <Form>
                    <div className={'PageHeading'}>
                        <h1>Register</h1>
                    </div>
                    <FormGroup>
                        <Label for="exampleEmail">
                            First name
                        </Label>
                        <Input
                            name={'firstName'} type={'text'} placeholder={"Enter your first name"}
                            value={user.firstName} onChange={HandleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Last name
                        </Label>
                        <Input
                            name={'lastName'} type={'text'} placeholder={"Enter your last name"}
                            value={user.lastName} onChange={HandleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Mobile no.
                        </Label>
                        <Input
                            name={'mob'} type={'text'} placeholder={"Enter your mobile number"}
                            value={user.mob} onChange={HandleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Date of birth
                        </Label>
                        <Input
                            name={'dob'} type={'date'} placeholder={"yyyy-mm-dd"}
                            min={"1900-01-01"} max={"2050-12-31"}
                            value={user.dob} onChange={HandleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Username
                        </Label>
                        <Input
                            name={'username'} type={'text'} placeholder={"Enter your username"}
                            value={user.username} onChange={HandleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                            Password
                        </Label>
                        <Input
                            name={'password'} type={'text'} placeholder={"Enter your password"}
                            value={user.password} onChange={HandleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Role
                        </Label>
                        <Input
                            name={'role'} type={'select'}
                            onChange={HandleRoleChange}
                        >
                            <option value={1}>Admin</option>
                            <option value={2}>Customer</option>
                            <option value={3}>Vendor</option>
                            <option value={4}>Delivery Personnel</option>
                        </Input>
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