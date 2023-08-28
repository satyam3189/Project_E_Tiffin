import {useEffect, useState} from "react";
import axios from "axios";
import {URL_add_user, URL_find_user_with_id, URL_update_user} from "../apis/apis";
import getAccessToken from "../util/getAccessToken";
import {toast, ToastContainer} from "react-toastify";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {useNavigate} from "react-router-dom";

export default function EditUser() {
    const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"))
    const navigate = useNavigate()
    const [user, setuser] = useState({})

    useEffect(() => {
        axios.get(URL_find_user_with_id(loggedUser.uid),
            {headers: {Authorization: getAccessToken()}})
            .then((res) => {
                setuser(() => res.data)
                console.log(res.data.user)
            })
    }, [])
    const HandleChange = (args) => {
        const copyuser = {...user};
        copyuser[args.target.name] = args.target.value;
        setuser(copyuser);
        console.log(user);
    };

    function handleUpdate() {
        axios.post(URL_update_user(user.uid), user,
            {headers: {Authorization: getAccessToken()}})
            .then(() => toast.success("User updated!", {
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
                        <h1>🙂</h1>
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
                    <center>
                        <Button
                            className={'btn-warning'}
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