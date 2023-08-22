package com.app.controller;

import com.app.model.UserC;
import com.app.service.UserService;
import org.springframework.web.bind.annotation.*;
@CrossOrigin("*")
@RequestMapping("/api/admin/")
@RestController
public class AdminController {
    UserService userService;

    public AdminController(UserService userService) {
        this.userService = userService;
    }
    @PostMapping("/suspend/user/{user_id}")
    public UserC suspendUser(@PathVariable Long user_id, @RequestBody Integer status){
        return userService.setSuspensionStatus(user_id, status);
    }
    @GetMapping("/delete/user/{user_id}")
    public UserC deleteUser(@PathVariable Long user_id){
        return userService.deleteUserById(user_id);
    }
}
