package com.app.service;

import com.app.model.UserC;

import java.util.List;

public interface UserService {
    UserC saveUser(UserC userC);
    List<UserC> showAllUsers();
    UserC findUserById(Long uid);
    UserC updateUser(Long uid, UserC newUserC);
    UserC deleteUserById(Long uid);
    UserC setSuspensionStatus(Long uid, Integer status);
    UserC getUserByUsername(String username);
}
