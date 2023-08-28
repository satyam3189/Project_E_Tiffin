package com.app.service;

import java.util.List;

import com.app.model.Role;

public interface RoleService {
    Role addRole(Role role);
    List<Role> addRoles(List<Role> roles);
    List<Role> showAllRoles();
    Role findRoleById(Long rid);
}
