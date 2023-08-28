package com.app.service;

import java.util.List;

import com.app.model.Customer;

public interface CustomerService {
    Customer addCustomer(Customer customer);
    List<Customer> showAllCustomers();
    Customer findCustomerById(Long cid);
    Double updateBal(Long cid, Double newBal);

}
