package com.app.util;

import lombok.Data;

@Data
public class LoggedUser {
    private Long id;
    private Long uid;
    private String role;

    public LoggedUser(Long id, Long uid, String role) {
        this.id = id;
        this.uid = uid;
        this.role = role;
    }
}
