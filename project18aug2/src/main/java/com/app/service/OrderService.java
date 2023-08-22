package com.app.service;

import com.app.model.Order;

import java.util.List;

public interface OrderService {
    List<Order> showAllOrders();
    Order addOrder(Order order);
    Order findOrderById(Long oid);
    Order setDeliveryStatus(Long oid,Integer status);
    Order setAcceptStatus(Long oid, Integer status);
    Order setIsPickedUpStatus(Long oid,Integer status);
    void deleteOrder(Long oid);
}
