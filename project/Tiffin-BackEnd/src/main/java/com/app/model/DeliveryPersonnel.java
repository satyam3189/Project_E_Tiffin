package com.app.model;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(name = "delivery_personnel_tb")
public class DeliveryPersonnel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long dpid;
    @Temporal(TemporalType.TIMESTAMP)
    @Column
    private Date inTime;
    @Temporal(TemporalType.TIMESTAMP)
    @Column
    private Date outTime;
    @Column
    private Double hourlyRate;
    @Column(nullable = false)
    private Double balance;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "uid")
    private UserC userCd;
    @OneToMany(mappedBy = "deliveryPersonnel")
    private List<Order> orders = new ArrayList<>();
    public void toUser(UserC userC){
        this.userCd = userC;
    }
    public void populateOrder(Order order){
        this.orders.add(order);
    }
    public void deleteOrder(Order order){
        this.orders.remove(order);
    }
}
