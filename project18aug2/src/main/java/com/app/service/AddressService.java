package com.app.service;

import com.app.model.Address;

import java.util.List;

public interface AddressService {
    Address addAddress(Address address);
    List<Address> showAllAddress();
    Address findAddressById(Long aid);
    Address updateAddress(Long aid, Address newAddress);
    Address deleteAddressById(Long aid);
}
