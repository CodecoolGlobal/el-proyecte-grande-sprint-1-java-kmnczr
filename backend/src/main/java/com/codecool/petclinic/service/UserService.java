package com.codecool.petclinic.service;


import com.codecool.petclinic.model.Role;
import com.codecool.petclinic.model.AppUser;

import java.util.List;

public interface UserService {
    AppUser saveUser(AppUser user);
    Role saveRole(Role role);
    void addRoleToUser(String username, String roleName);
    AppUser getUser(String username);
    List<AppUser>getUsers();
}
