package com.app.service;

import java.util.List;

import com.app.model.Vendor;

public interface VendorService {
    Vendor addVendor(Vendor vendor);
    List<Vendor> showAllVendor();
    Vendor findVendorById(Long vid);
    Double getBalance(Long vid);
    Vendor deleteVendor(Long vid);
}
