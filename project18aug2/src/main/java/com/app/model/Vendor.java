package com.app.model;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "vendor_tb")
public class Vendor {
    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    private Long vid;
    @Column(nullable = false)
    private Double balance;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "uid")
    private UserC userCv;
    @OneToMany(mappedBy = "vendor", cascade = CascadeType.ALL)
    private List<Item> items = new ArrayList<>();
    public void toUser(UserC userC){
        this.userCv = userC;
    }
    public void populateItems(Item item){
        this.items.add(item);
    }
}
