package com.app.service;

import java.util.List;

import com.app.model.Order;

public interface OrderService {
    List<Order> showAllOrders();
    Order addOrder(Order order);
    Order findOrderById(Long oid);
    Order setDeliveryStatus(Long oid,Integer status);
    Order setAcceptStatus(Long oid, Integer status);
    Order setIsPickedUpStatus(Long oid,Integer status);
    void deleteOrder(Long oid);
}
