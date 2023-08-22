package com.app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name ="customer_tb")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cid;
    @Column(nullable = false)
    private Double balance;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "uid")
    private UserC userCc;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "tid")
    private Tiffin tiffin;
    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "oid")
    private Order order;
    public void toUser(UserC userC){
        this.userCc = userC;
    }
    public void assignTiffin(Tiffin tiffin){
        this.tiffin = tiffin;
    }
    public void assignOrder(Order order){
        this.order = order;
    }
}
