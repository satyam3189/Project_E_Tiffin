package com.app.controller;

import com.app.model.*;
import com.app.service.CustomerService;
import com.app.service.DeliveryPersonnelService;
import com.app.service.OrderService;
import com.app.service.VendorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RequestMapping("/api/order")
@RestController
public class OrderController {
    OrderService orderService;
    CustomerService customerService;
    DeliveryPersonnelService deliveryPersonnelService;
    VendorService vendorService;

    public OrderController(OrderService orderService, CustomerService customerService, DeliveryPersonnelService deliveryPersonnelService, VendorService vendorService) {
        this.orderService = orderService;
        this.customerService = customerService;
        this.deliveryPersonnelService = deliveryPersonnelService;
        this.vendorService = vendorService;
    }

    @GetMapping("/all")
    public List<Order> showAllOrder(){
        return orderService.showAllOrders();
    }
    @GetMapping("/add/cust/{cust_id}")
    public Order addOrder(@PathVariable Long cust_id)
    {
        Order order = new Order();
        Customer customer = customerService.findCustomerById(cust_id);
        order.assignCustomer(customer);
        customer.assignOrder(order);
        order.setIsDelivered(Boolean.FALSE);
        order.setIsPickedUp(Boolean.FALSE);
        order.setIsAccepted(Boolean.FALSE);
        return orderService.addOrder(order);
    }
    @GetMapping("/cust/{cust_id}")
    public Order showCustOrder(@PathVariable Long cust_id){
        return customerService.findCustomerById(cust_id).getOrder();
    }
    @GetMapping("/{order_id}")
    public Order findOrderById(@PathVariable Long order_id){
        return orderService.findOrderById(order_id);
    }
    @GetMapping("/accept/{order_id}/delp/{del_id}/status/{status}")
    public Order acceptOrder(@PathVariable Long order_id, @PathVariable Long del_id, @PathVariable Integer status){
        Order order = orderService.findOrderById(order_id);
        DeliveryPersonnel deliveryPersonnel = deliveryPersonnelService.findDeliveryPersonnelById(del_id);
        order.assignDeliveryPersonnel(deliveryPersonnel);
        deliveryPersonnel.populateOrder(order);
        return orderService.setAcceptStatus(order_id,status);
    }
    @GetMapping("/set/del/{order_id}/status/{status}")
    public Order setDeliveryStatus(@PathVariable Long order_id, @PathVariable Integer status){
        double itempricexqty = 0.0;
        Order order = orderService.findOrderById(order_id);
        Customer customer = order.getCustomer();
        Tiffin tiffin = customer.getTiffin();
        List<TiffinDetail> tiffinDetails = tiffin.getTiffinDetails();
        orderService.setDeliveryStatus(order_id,status);
        for (TiffinDetail td : tiffinDetails) {
            itempricexqty += td.getQty()*td.getItem().getPrice();
        }
        customer.setBalance(customer.getBalance()+itempricexqty);
        customerService.addCustomer(customer);
        return orderService.addOrder(order);
    }
    @GetMapping("/set/picked/{order_id}/status/{status}")
    public Order setPickedUpStatus(@PathVariable Long order_id, @PathVariable Integer status){
        double itempricexqty = 0.0;
        Order order = orderService.findOrderById(order_id);
        Customer customer = order.getCustomer();
        Tiffin tiffin = customer.getTiffin();
        List<TiffinDetail> tiffinDetails = tiffin.getTiffinDetails();
        orderService.setIsPickedUpStatus(order_id,status);
        for (TiffinDetail td : tiffinDetails) {
            Vendor vendor = td.getItem().getVendor();
            itempricexqty = td.getQty()*td.getItem().getPrice();
            vendor.setBalance(vendor.getBalance()+itempricexqty);
            vendorService.addVendor(vendor);
        }
        return orderService.setIsPickedUpStatus(order_id,status);
    }
    @GetMapping("/cancel/{order_id}")
    public DeliveryPersonnel deleteOrder(@PathVariable Long order_id){
        Order order = findOrderById(order_id);
        DeliveryPersonnel deliveryPersonnel = order.getDeliveryPersonnel();
        order.setIsAccepted(Boolean.FALSE);
        order.setIsDelivered(Boolean.FALSE);
        order.setIsPickedUp(Boolean.FALSE);
        deliveryPersonnel.deleteOrder(order);
        order.setDeliveryPersonnel(null);
        return deliveryPersonnelService.addDeliveryPersonnel(deliveryPersonnel);
    }
}
