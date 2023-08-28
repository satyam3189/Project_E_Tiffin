package com.app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "item_tb")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long iid;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private Long qty;
    @Column(nullable = false)
    private Double price;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "vid")
    private Vendor vendor;
    @JsonIgnore
    @OneToMany(mappedBy = "item",cascade = CascadeType.ALL)
    private List<TiffinDetail> tiffinDetails = new ArrayList<>();

    public void assignVendor(Vendor vendor){
        this.vendor = vendor;
    }
}
