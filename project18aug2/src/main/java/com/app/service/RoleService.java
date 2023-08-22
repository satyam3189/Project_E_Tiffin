package com.app.service;

import com.app.model.Role;

import java.util.List;

public interface RoleService {
    Role addRole(Role role);
    List<Role> addRoles(List<Role> roles);
    List<Role> showAllRoles();
    Role findRoleById(Long rid);
}
