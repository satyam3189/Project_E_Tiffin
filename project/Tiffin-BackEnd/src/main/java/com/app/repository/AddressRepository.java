package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.app.model.Address;

@Service
public interface AddressRepository extends JpaRepository<Address, Long> {
}
