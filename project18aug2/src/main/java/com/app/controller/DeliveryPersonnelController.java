package com.app.controller;

import com.app.model.DeliveryPersonnel;
import com.app.service.DeliveryPersonnelService;
import com.app.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;
@CrossOrigin("*")
@RequestMapping("/api/deliveryp")
@RestController
public class DeliveryPersonnelController {
    DeliveryPersonnelService deliveryPersonnelService;
    UserService userService;
    public DeliveryPersonnelController(DeliveryPersonnelService deliveryPersonnelService, UserService userService) {
        this.deliveryPersonnelService = deliveryPersonnelService;
        this.userService = userService;
    }
    @GetMapping("/all")
    public List<DeliveryPersonnel> showAllDeliveryPersonnel(){
        return deliveryPersonnelService.showAllDeliveryPersonnel();
    }
    @GetMapping("/{del_id}")
    public DeliveryPersonnel getById(@PathVariable Long del_id){
        return deliveryPersonnelService.findDeliveryPersonnelById(del_id);
    }
    @GetMapping("/intime/{del_id}")
    public DeliveryPersonnel setInTime(@PathVariable Long del_id)
    {
        return deliveryPersonnelService.setInTime(del_id,new Date());
    }
    @GetMapping("/outtime/{del_id}")
    public DeliveryPersonnel setOutTime(@PathVariable Long del_id)
    {
        return deliveryPersonnelService.setOutTime(del_id, new Date());
    }
    @PostMapping("/rate/{del_id}")
    public DeliveryPersonnel setHourlyRate(@PathVariable Long del_id, @RequestBody Double newHourlyRate){
        return deliveryPersonnelService.hourlyRate(del_id,newHourlyRate);
    }
    @GetMapping("/compute/bal/{del_id}")
    public DeliveryPersonnel getIntime(@PathVariable Long del_id){
        DeliveryPersonnel deliveryPersonnel = deliveryPersonnelService.findDeliveryPersonnelById(del_id);
        double bal = (TimeUnit.SECONDS.convert(deliveryPersonnel.getOutTime().getTime()-deliveryPersonnel.getInTime().getTime(),TimeUnit.MILLISECONDS)/3600.0)*deliveryPersonnel.getHourlyRate();
        deliveryPersonnel.setBalance(deliveryPersonnel.getBalance()+bal);
        return deliveryPersonnelService.addDeliveryPersonnel(deliveryPersonnel);
    }
}
