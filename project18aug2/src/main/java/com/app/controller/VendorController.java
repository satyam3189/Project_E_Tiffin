package com.app.controller;

import com.app.model.Vendor;
import com.app.service.ItemService;
import com.app.service.UserService;
import com.app.service.VendorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RequestMapping("/api/vendor")
@RestController
public class VendorController {
    VendorService vendorService;
    UserService userService;
    ItemService itemService;

    public VendorController(VendorService vendorService, UserService userService, ItemService itemService) {
        this.vendorService = vendorService;
        this.userService = userService;
        this.itemService = itemService;
    }
    @GetMapping("/all")
    public List<Vendor> showAllVendors(){
        return vendorService.showAllVendor();
    }
    @GetMapping("/bal/{vendor_id}")
    public Double getBalance(@PathVariable Long vendor_id){
        return vendorService.getBalance(vendor_id);
    }
    @GetMapping("/{vendor_id}")
    public Vendor findVendorById(@PathVariable Long vendor_id){
        return vendorService.findVendorById(vendor_id);
    }
}
