package com.app.controller;

import com.app.model.*;
import com.app.service.*;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RequestMapping("/api/register")
@RestController
public class RegistrationController {
    UserService userService;
    RoleService roleService;
    AddressService addressService;
    CustomerService customerService;
    VendorService vendorService;
    DeliveryPersonnelService deliveryPersonnelService;
//    PasswordEncoder passwordEncoder;

    public RegistrationController(UserService userService, RoleService roleService, AddressService addressService, CustomerService customerService, VendorService vendorService, DeliveryPersonnelService deliveryPersonnelService
//    		, PasswordEncoder passwordEncoder
    		) {
        this.userService = userService;
        this.roleService = roleService;
        this.addressService = addressService;
        this.customerService = customerService;
        this.vendorService = vendorService;
        this.deliveryPersonnelService = deliveryPersonnelService;
//        this.passwordEncoder = passwordEncoder;
    }
    @PostMapping("/{role_id}")
    public UserC registerUser(@RequestBody UserC userC, @PathVariable Long role_id) {
        Role role = roleService.findRoleById(role_id);
        userC.assignRole(role);
        role.assignUser(userC);
        switch (role.getName()) {
            case "ROLE_CUSTOMER": {
                Customer customer = new Customer();
                customer.setBalance(0.0);
                customer.toUser(userC);
                customerService.addCustomer(customer);
            }
            case "ROLE_VENDOR": {
                Vendor vendor = new Vendor();
                vendor.setBalance(0.0);
                vendor.toUser(userC);
                vendorService.addVendor(vendor);
            }
            case "ROLE_DELIVERY_PERSONNEL": {
                DeliveryPersonnel deliveryPersonnel = new DeliveryPersonnel();
                deliveryPersonnel.setBalance(0.0);
                deliveryPersonnel.toUser(userC);
                deliveryPersonnelService.addDeliveryPersonnel(deliveryPersonnel);
            }
        }
        return userService.saveUser(userC);
    }
}
