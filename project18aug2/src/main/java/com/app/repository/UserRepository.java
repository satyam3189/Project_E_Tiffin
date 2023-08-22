package com.app.repository;

import com.app.model.UserC;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public interface UserRepository extends JpaRepository<UserC,Long> {
    UserC findByUsername(String username);
    
}
