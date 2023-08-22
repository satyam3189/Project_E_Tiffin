package com.app.repository;

import com.app.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public interface RoleRepository extends JpaRepository<Role,Long> {
    Role findByName(String name);
}
