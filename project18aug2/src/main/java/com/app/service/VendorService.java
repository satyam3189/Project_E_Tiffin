package com.app.service;

import com.app.model.Vendor;

import java.util.List;

public interface VendorService {
    Vendor addVendor(Vendor vendor);
    List<Vendor> showAllVendor();
    Vendor findVendorById(Long vid);
    Double getBalance(Long vid);
    Vendor deleteVendor(Long vid);
}
