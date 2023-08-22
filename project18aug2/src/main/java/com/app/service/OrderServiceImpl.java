package com.app.service;

import com.app.model.Order;
import com.app.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService{
    OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public List<Order> showAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order addOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public Order findOrderById(Long oid) {
        return orderRepository.findById(oid).get();
    }

    @Override
    public Order setDeliveryStatus(Long oid,Integer status) {
        Order order = orderRepository.findById(oid).get();
        order.setIsDelivered((status == 1) ? Boolean.TRUE:Boolean.FALSE);
        return orderRepository.save(order);
    }

    @Override
    public Order setAcceptStatus(Long oid, Integer status) {
        Order order = orderRepository.findById(oid).get();
        order.setIsAccepted((status == 1) ? Boolean.TRUE:Boolean.FALSE);
        return orderRepository.save(order);
    }

    @Override
    public Order setIsPickedUpStatus(Long oid, Integer status) {
        Order order = orderRepository.findById(oid).get();
        order.setIsPickedUp((status == 1) ? Boolean.TRUE:Boolean.FALSE);
        return orderRepository.save(order);
    }

    @Override
    public void deleteOrder(Long oid) {
        orderRepository.deleteById(oid);
    }
}
