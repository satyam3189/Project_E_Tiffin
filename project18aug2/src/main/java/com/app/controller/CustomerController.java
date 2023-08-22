package com.app.controller;

import com.app.model.Customer;
import com.app.service.CustomerService;
import com.app.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RequestMapping("/api/cust")
@RestController
public class CustomerController {
    CustomerService customerService;
    UserService userService;

    public CustomerController(CustomerService customerService, UserService userService) {
        this.customerService = customerService;
        this.userService = userService;
    }
    @GetMapping("/all")
    public List<Customer> showAllCustomers(){
        return customerService.showAllCustomers();
    }
    @GetMapping("/{cust_id}")
    public Customer findCustomerById(@PathVariable Long cust_id){
        return customerService.findCustomerById(cust_id);
    }
    @PostMapping("/bal/{cust_id}")
    public Double getBalance(@PathVariable Long cust_id, @RequestBody Double newBal){
        return customerService.updateBal(cust_id,newBal);
    }
}
