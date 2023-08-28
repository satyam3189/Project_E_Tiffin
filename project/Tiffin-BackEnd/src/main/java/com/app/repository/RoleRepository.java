package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.app.model.Role;

@Service
public interface RoleRepository extends JpaRepository<Role,Long> {
    Role findByName(String name);
}
