package com.app.service;

import com.app.model.Address;
import com.app.repository.AddressRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressServiceImpl implements AddressService{
    AddressRepository addressRepository;

    public AddressServiceImpl(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    @Override
    public Address addAddress(Address address) {
        return addressRepository.save(address);
    }

    @Override
    public List<Address> showAllAddress() {
        return addressRepository.findAll();
    }

    @Override
    public Address findAddressById(Long aid) {
        return addressRepository.findById(aid).get();
    }

    @Override
    public Address updateAddress(Long aid, Address newAddress) {
        Address oldAddress = addressRepository.findById(aid).get();
        oldAddress.setFlatNo(newAddress.getFlatNo());
        oldAddress.setStreet(newAddress.getStreet());
        oldAddress.setLandmark(newAddress.getLandmark());
        oldAddress.setCity(newAddress.getCity());
        oldAddress.setPincode(newAddress.getPincode());
        return addressRepository.save(oldAddress);
    }

    @Override
    public Address deleteAddressById(Long aid) {
        Address address = addressRepository.findById(aid).get();
        addressRepository.deleteById(aid);
        return address;
    }
}
