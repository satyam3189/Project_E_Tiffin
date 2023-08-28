package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.app.model.UserC;

@Service
public interface UserRepository extends JpaRepository<UserC,Long> {
    UserC findByUsername(String username);
}
