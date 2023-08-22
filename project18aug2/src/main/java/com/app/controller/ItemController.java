package com.app.controller;

import com.app.model.Item;
import com.app.model.Vendor;
import com.app.service.ItemService;
import com.app.service.VendorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RequestMapping("/api/item")
@RestController
public class ItemController {
    ItemService itemService;
    VendorService vendorService;

    public ItemController(ItemService itemService, VendorService vendorService) {
        this.itemService = itemService;
        this.vendorService = vendorService;
    }
    @GetMapping("/all")
    public List<Item> showAllItems(){
        return itemService.showAllItems();
    }
    @GetMapping("/all/{vendor_id}")
    public List<Item> showAllVendorItems(@PathVariable Long vendor_id){
        return vendorService.findVendorById(vendor_id).getItems();
    }
    @PostMapping("/add/vendor/{vendor_id}")
    public Item populateItems(@PathVariable Long vendor_id, @RequestBody Item item){
        Vendor vendor = vendorService.findVendorById(vendor_id);
        item.assignVendor(vendor);
        vendor.populateItems(item);
        return itemService.addItem(item);
    }
    @PostMapping("/update/{item_id}")
    public Item updateItem(@PathVariable Long item_id, @RequestBody Item newItem){
        return itemService.updateItem(item_id, newItem);
    }
    @GetMapping("/delete/{item_id}")
    public Item deleteItem(@PathVariable Long item_id){
        return itemService.deleteItemById(item_id);
    }
    @GetMapping("/{item_id}/get/vendor")
    public Vendor getVendor(@PathVariable Long item_id){
        return itemService.findItemById(item_id).getVendor();
    }
}
