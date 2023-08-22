package com.app.service;

import com.app.model.DeliveryPersonnel;
import com.app.repository.DeliveryPersonnelRepository;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class DeliveryPersonnelServiceImpl implements DeliveryPersonnelService{
    DeliveryPersonnelRepository deliveryPersonnelRepository;

    public DeliveryPersonnelServiceImpl(DeliveryPersonnelRepository deliveryPersonnelRepository) {
        this.deliveryPersonnelRepository = deliveryPersonnelRepository;
    }

    @Override
    public DeliveryPersonnel addDeliveryPersonnel(DeliveryPersonnel deliveryPersonnel) {
        return deliveryPersonnelRepository.save(deliveryPersonnel);
    }

    @Override
    public List<DeliveryPersonnel> showAllDeliveryPersonnel() {
        return deliveryPersonnelRepository.findAll();
    }

    @Override
    public DeliveryPersonnel findDeliveryPersonnelById(Long dpid) {
        return deliveryPersonnelRepository.findById(dpid).get();
    }

    @Override
    public DeliveryPersonnel setInTime(Long dpid, Date inTime) {
        DeliveryPersonnel deliveryPersonnel = deliveryPersonnelRepository.findById(dpid).get();
        deliveryPersonnel.setInTime(inTime);
        return deliveryPersonnelRepository.save(deliveryPersonnel);
    }

    @Override
    public DeliveryPersonnel setOutTime(Long dpid, Date outTime) {
        DeliveryPersonnel deliveryPersonnel = deliveryPersonnelRepository.findById(dpid).get();
        deliveryPersonnel.setOutTime(outTime);
        return deliveryPersonnelRepository.save(deliveryPersonnel);
    }

    @Override
    public DeliveryPersonnel hourlyRate(Long dpid, Double newHourlyRate) {
        DeliveryPersonnel deliveryPersonnel = deliveryPersonnelRepository.findById(dpid).get();
        deliveryPersonnel.setHourlyRate(newHourlyRate);
        return deliveryPersonnelRepository.save(deliveryPersonnel);
    }
}
