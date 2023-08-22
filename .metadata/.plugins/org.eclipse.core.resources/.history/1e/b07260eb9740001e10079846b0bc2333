package com.app.service;

import com.app.model.UserC;
import com.app.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@Slf4j
public class UserServiceImpl implements UserService
//,UserDetailsService 
{
    UserRepository userRepository;
//    PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository
//    		, PasswordEncoder passwordEncoder
    		) {
        this.userRepository = userRepository;
//        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserC saveUser(UserC userC) {
        userC.setPassword((userC.getPassword()));
        return userRepository.save(userC);
    }

    @Override
    public List<UserC> showAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public UserC findUserById(Long uid) {
        return userRepository.findById(uid).get();
    }

    @Override
    public UserC updateUser(Long uid, UserC newUserC) {
        UserC oldUserC = userRepository.findById(uid).get();
        oldUserC.setFirstName(newUserC.getFirstName());
        oldUserC.setLastName(newUserC.getLastName());
        oldUserC.setUsername(newUserC.getUsername());
        oldUserC.setMob(newUserC.getMob());
        oldUserC.setDob(newUserC.getDob());
        oldUserC.setPassword(newUserC.getPassword());
        return userRepository.save(oldUserC);
    }

    @Override
    public UserC deleteUserById(Long uid) {
        UserC userC = userRepository.findById(uid).get();
        userRepository.deleteById(uid);
        return userC;
    }

    @Override
    public UserC setSuspensionStatus(Long uid, Integer status) {
        UserC userC = userRepository.findById(uid).get();
        userC.setIsSuspended(((status == 1) ? Boolean.TRUE:Boolean.FALSE));
        return userRepository.save(userC);
    }

    @Override
    public UserC getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        UserC userC = userRepository.findByUsername(username);
//        if (userC == null) {
//            log.error("user not found in database");
//            throw new UsernameNotFoundException("user not found in database");
//        } else log.info("user found in database");
//        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
//        authorities.add(new SimpleGrantedAuthority(userC.getRole().getName()));
//        return new User(userC.getUsername(), userC.getPassword(), authorities);
//    }
}
