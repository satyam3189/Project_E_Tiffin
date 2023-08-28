import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {URL_get_logged_user, URL_login} from "../apis/apis";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {toast, ToastContainer} from 'react-toastify';
import getAccessToken from "../util/getAccessToken";
import {useNavigate} from "react-router-dom";
import UserContext from "../contexts/UserContext";
import AuthContext from "../contexts/AuthContext";

export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({username: "", password: ""});
    const [userList, setUserList] = useState([]);
    const {setloggedInUser} = useContext(UserContext)
    const [toggle, setToggle] = useState(false)
    const {setLoginStatus} = useContext(AuthContext)
    useEffect(() => {
        setLoginStatus(0)
        sessionStorage.clear()
    },[])

    const HandleChange = (args) => {
        const copyUser = {...user};
        copyUser[args.target.name] = args.target.value;
        setUser(copyUser);
        console.log(user);
    };
    const Validate = () => {
        axios.post(URL_get_logged_user, user,
            {headers: {Authorization: getAccessToken()}})
            .then((res) =>
                sessionStorage.setItem("loggedUser", JSON.stringify(res.data)))
            .then(() => setloggedInUser(() => JSON.parse(sessionStorage.getItem("loggedUser"))))
            .then(() => setToggle((prev) => !prev))
            .then(() => setLoginStatus(() => 1))
            .then(() => setTimeout(() =>
                    toast.dark("Redirecting to Home...", {
                        position: toast.POSITION.TOP_RIGHT
                    })
                , 1000))
            .then(() => setTimeout(() => navigate("/"), 4000))
    }
    const handleLogin = () => {
        const bodyFormData = new FormData();
        bodyFormData.append('username', user.username);
        bodyFormData.append('password', user.password)
        axios({
            method: "post",
            url: URL_login,
            data: bodyFormData,
            headers: {"Content-Type": "multipart/form-data"},
        })
            .then((res) => {
                sessionStorage.setItem("AccessToken", JSON.stringify(res.data.accessToken))
                toast.success("User validated!", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark"
                })
            })
            .catch((res) =>
                toast.error("Invalid user!", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark"
                })
            )
            .then(Validate)
    }
    return (
        <>
            <ToastContainer autoClose={2000}/>
                <div className={'FormContainer'}>
                    <Form>
                        <div className={'PageHeading'}>
                            <h1>Login</h1>
                        </div>
                        <FormGroup hidden={toggle}>
                            <Label for="exampleEmail">
                                Username
                            </Label>
                            <Input
                                name={'username'} type={'text'} placeholder={"Enter your username"}
                                value={user.username} onChange={HandleChange}
                            />
                        </FormGroup>
                        <FormGroup hidden={toggle}>
                            <Label for="examplePassword">
                                Password
                            </Label>
                            <Input
                                name={'password'} type={'password'} placeholder={"Enter your password"}
                                value={user.password} onChange={HandleChange}
                            />
                        </FormGroup>
                        <div className={'btnContainer'} hidden={toggle}>
                            <Button
                                className={'btn-success'}
                                onClick={handleLogin}
                            >
                                Login
                            </Button>
                            <Button
                                className={'btn-info'}
                                onClick={() => navigate("/register")}
                            >
                                Register
                            </Button>
                        </div>
                        <div hidden={!toggle}
                             className={'LoginSuccess'}
                        >
                            <h2>✅ Login Success!</h2>
                        </div>
                    </Form>
                </div>
        </>
    )
}