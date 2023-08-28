package com.app.service;

import java.util.List;

import com.app.model.Address;

public interface AddressService {
    Address addAddress(Address address);
    List<Address> showAllAddress();
    Address findAddressById(Long aid);
    Address updateAddress(Long aid, Address newAddress);
    Address deleteAddressById(Long aid);
}
