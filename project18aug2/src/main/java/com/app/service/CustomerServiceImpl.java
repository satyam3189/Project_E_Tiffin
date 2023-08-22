package com.app.service;

import com.app.model.Customer;
import com.app.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService{
    CustomerRepository customerRepository;

    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public Customer addCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public List<Customer> showAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer findCustomerById(Long cid) {
        return customerRepository.findById(cid).get();
    }

    @Override
    public Double updateBal(Long cid, Double newBal) {
        Customer customer = customerRepository.findById(cid).get();
        customer.setBalance(newBal);
        return newBal;
    }
}
