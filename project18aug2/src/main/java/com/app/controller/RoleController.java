package com.app.controller;

import com.app.model.Role;
import com.app.service.RoleService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RequestMapping("/api/role")
@RestController
public class RoleController {
    RoleService roleService;

    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }
    @GetMapping("/all")
    public List<Role> showAllRoles(){
        return roleService.showAllRoles();
    }
    @PostMapping("/add")
    public Role addRole(@RequestBody Role role){
        return roleService.addRole(role);
    }
    @PostMapping("/add/all")
    public List<Role> addRoles(@RequestBody List<Role> roles){
        return roleService.addRoles(roles);
    }
}
