package com.app.service;

import com.app.model.Customer;

import java.util.List;

public interface CustomerService {
    Customer addCustomer(Customer customer);
    List<Customer> showAllCustomers();
    Customer findCustomerById(Long cid);
    Double updateBal(Long cid, Double newBal);

}
