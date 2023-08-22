package com.app.service;

import com.app.model.Role;
import com.app.repository.RoleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService{
    RoleRepository roleRepository;

    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public Role addRole(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public List<Role> addRoles(List<Role> roles) {
        return roleRepository.saveAll(roles);
    }

    @Override
    public List<Role> showAllRoles() {
        return roleRepository.findAll();
    }

    @Override
    public Role findRoleById(Long rid) {
        return roleRepository.findById(rid).get();
    }
}
