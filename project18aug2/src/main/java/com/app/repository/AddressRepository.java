package com.app.repository;

import com.app.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public interface AddressRepository extends JpaRepository<Address, Long> {
}
