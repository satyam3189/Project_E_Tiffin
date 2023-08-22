package com.app.controller;

import com.app.model.*;
import com.app.service.*;
import com.app.util.LoggedUser;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RequestMapping("/api/user")
@RestController
public class UserController {
    UserService userService;
    RoleService roleService;
    AddressService addressService;
    CustomerService customerService;
    VendorService vendorService;
    DeliveryPersonnelService deliveryPersonnelService;
//    PasswordEncoder passwordEncoder;

    public UserController(UserService userService, RoleService roleService, AddressService addressService, CustomerService customerService, VendorService vendorService, DeliveryPersonnelService deliveryPersonnelService
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

    @GetMapping("/all")
    public ResponseEntity<?> showAllUsers() {
        return ResponseEntity.ok().body(userService.showAllUsers());
    }

    @PostMapping("/logged")
    public LoggedUser getRoleBasedUser(@RequestBody UserC tempUserC) {
        UserC userC = userService.getUserByUsername(tempUserC.getUsername());
        if (userC != null) {
//            if (passwordEncoder.matches(tempUserC.getPassword(),userC.getPassword())) {
//                switch (userC.getRole().getName()) {
//                    case "ROLE_ADMIN": {
//                        return new LoggedUser(0L, userC.getUid(), userC.getRole().getName());
//                    }
//                    case "ROLE_CUSTOMER": {
//                        return new LoggedUser(userC.getCustomer().getCid(), userC.getUid(), userC.getRole().getName());
//                    }
//                    case "ROLE_VENDOR": {
//                        return new LoggedUser(userC.getVendor().getVid(), userC.getUid(), userC.getRole().getName());
//                    }
//                    case "ROLE_DELIVERY_PERSONNEL": {
//                        return new LoggedUser(userC.getDeliveryPersonnel().getDpid(), userC.getUid(), userC.getRole().getName());
//                    }
//                }
//            }
        }
        return null;
    }

    @PostMapping("/add/role/{role_id}")
    public UserC addUserWithRole(@RequestBody UserC userC, @PathVariable Long role_id) {
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

    @PostMapping("/update/{user_id}")
    public UserC updateUserInfo(@PathVariable Long user_id, @RequestBody UserC newUser) {
        return userService.updateUser(user_id, newUser);
    }

    @GetMapping("/find/{user_id}")
    public UserC findUserById(@PathVariable Long user_id) {
        return userService.findUserById(user_id);
    }
}
