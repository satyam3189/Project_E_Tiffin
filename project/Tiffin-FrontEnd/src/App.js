import Home from "./user/Home";
import NavBar from "./nav/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./user/About";
import AllOrders from "./uDeliveryP/AllOrders";
import Login from "./user/Login";
import {UserProvider} from "./contexts/UserContext";
import MyOrders from "./uDeliveryP/MyOrders";
import DelDasboard from "./uDeliveryP/DelDasboard";
import {CounterProvider} from "./uDeliveryP/CounterContext";
import AddTiffinDetails from "./uCustomer/AddTiffinDetails";
import Register from "./user/Register";
import VendorDashboard from "./uVendor/VendorDashboard";
import AddItem from "./uVendor/AddItem";
import ManageItems from "./uVendor/ManageItems";
import EditItem from "./uVendor/EditItem";
import CustomerDashboard from "./uCustomer/CustomerDashboard";
import CustomerShowTiffin from "./uCustomer/CustomerShowTiffin";
import AdminDashboard from "./uAdmin/AdminDashboard";
import {AuthProvider} from "./contexts/AuthContext";
import AddAddress from "./user/AddAddress";
import EditAddress from "./user/EditAddress";
import EditUser from "./user/EditUser";
import AllUsers from "./uAdmin/AllUsers";
import Contact from "./user/Contact";

export default function App() {

    return (
        <AuthProvider>
            <UserProvider>
                <CounterProvider>
                    <BrowserRouter>
                        <div>
                            <NavBar/>
                            <div className={'content'}>
                                <Routes>
                                    <Route path={'/'} element={<Home/>}></Route>
                                    <Route path={'/home'} element={<Home/>}></Route>
                                    <Route path={'/about'} element={<About/>}></Route>
                                    <Route path={'/contact'} element={<Contact/>}></Route>
                                    <Route path={'/login'} element={<Login/>}></Route>
                                    <Route path={'/register'} element={<Register/>}></Route>
                                    <Route path={'/allUsers'} element={<AllUsers/>}></Route>
                                    <Route path={'/addAddress'} element={<AddAddress/>}></Route>
                                    <Route path={'/editAddress'} element={<EditAddress/>}></Route>
                                    <Route path={'/editUser'} element={<EditUser/>}></Route>
                                    <Route path={'/adminDashboard'} element={<AdminDashboard/>}></Route>
                                    <Route path={'/allOrders'} element={<AllOrders/>}></Route>
                                    <Route path={'/myOrders'} element={<MyOrders/>}></Route>
                                    <Route path={'/delDashboard'} element={<DelDasboard/>}></Route>
                                    <Route path={'/vendorDashboard'} element={<VendorDashboard/>}></Route>
                                    <Route path={'/vendorAddItem'} element={<AddItem/>}></Route>
                                    <Route path={'/vendorManageItem'} element={<ManageItems/>}></Route>
                                    <Route path={'/vendorEditItem'} element={<EditItem/>}></Route>
                                    <Route path={'/customerDashboard'} element={<CustomerDashboard/>}></Route>
                                    <Route path={'/addTiffinDetails'} element={<AddTiffinDetails/>}></Route>
                                    <Route path={'/customerShowTiffin'} element={<CustomerShowTiffin/>}></Route>
                                </Routes>
                            </div>
                        </div>
                    </BrowserRouter>
                </CounterProvider>
            </UserProvider>
        </AuthProvider>
    );
}
