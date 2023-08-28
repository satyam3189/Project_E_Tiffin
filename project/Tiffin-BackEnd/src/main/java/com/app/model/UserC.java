package com.app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@Table(name = "user_tb")
public class UserC {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long uid;
    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;
    @Column(nullable = false)
    private String mob;
    @Column(nullable = false)
    private LocalDate dob;

    @Column(nullable = false, unique = true)
    private String username;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false)
    private Boolean isSuspended = Boolean.FALSE;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "rid")
    private Role role;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "aid")
    private Address address;
    @JsonIgnore
    @OneToOne(mappedBy = "userCv", cascade = CascadeType.ALL, orphanRemoval = true)
    private Vendor vendor;
    @JsonIgnore
    @OneToOne(mappedBy = "userCc", cascade = CascadeType.ALL, orphanRemoval = true)
    private Customer customer;
    @JsonIgnore
    @OneToOne(mappedBy = "userCd", cascade = CascadeType.ALL)
    private DeliveryPersonnel deliveryPersonnel;

    public void assignRole(Role role){
        this.role = role;
    }
    public void assignAddress(Address address){
        this.address = address;
    }
    public void toVendor(Vendor vendor){
        this.vendor = vendor;
    }
    public void toCustomer(Customer customer){
        this.customer = customer;
    }
    public void toDeliveryPersonnel(DeliveryPersonnel deliverPersonnel){this.deliveryPersonnel=deliverPersonnel;}
}
