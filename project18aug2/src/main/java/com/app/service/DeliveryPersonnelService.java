package com.app.service;

import com.app.model.DeliveryPersonnel;

import java.util.Date;
import java.util.List;

public interface DeliveryPersonnelService {
    DeliveryPersonnel addDeliveryPersonnel(DeliveryPersonnel deliveryPersonnel);
    List<DeliveryPersonnel> showAllDeliveryPersonnel();
    DeliveryPersonnel findDeliveryPersonnelById(Long dpid);
    DeliveryPersonnel setInTime(Long dpid, Date inTime);
    DeliveryPersonnel setOutTime(Long dpid, Date outTime);
    DeliveryPersonnel hourlyRate(Long dpid, Double newHourlyRate);
}
