package com.app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "order_tb")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long oid;
    @Column
    private Boolean isDelivered;
    @Column
    private Boolean isPickedUp;
    @Column
    private Boolean isAccepted;
    @OneToOne(mappedBy = "order")
    private Customer customer;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "dpid")
    private DeliveryPersonnel deliveryPersonnel;

   public void assignCustomer(Customer customer){
       this.customer = customer;
   }
   public void assignDeliveryPersonnel(DeliveryPersonnel deliveryPersonnel){
       this.deliveryPersonnel = deliveryPersonnel;
   }
}
