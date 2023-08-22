package com.app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "tiffin_tb")
public class Tiffin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tid;
    @OneToMany(mappedBy = "tiffin",cascade = CascadeType.ALL)
    private List<TiffinDetail> tiffinDetails = new ArrayList<>();
    @JsonIgnore
    @OneToOne(mappedBy = "tiffin")
    private Customer customer;

    public void addDetails(TiffinDetail tiffinDetail){
        this.tiffinDetails.add(tiffinDetail);
    }
    public void assignCustomer(Customer customer){
        this.customer = customer;
    }
}
