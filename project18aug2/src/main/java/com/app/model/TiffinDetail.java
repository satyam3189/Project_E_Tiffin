package com.app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "tiffindetail_tb")
public class TiffinDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tdid;
    @Column
    private Long qty;
    @ManyToOne
    @JoinColumn(name="iid")
    private Item item;
    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "tid")
    private Tiffin tiffin;

    public void assignItem(Item item){
        this.item = item;
    }
    public void assignTiffin(Tiffin tiffin){
        this.tiffin = tiffin;
    }
}
