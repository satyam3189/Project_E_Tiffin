package com.app.service;

import java.util.List;

import com.app.model.Tiffin;

public interface TiffinService {
    List<Tiffin> showAllTiffins();
    Tiffin addTiffin(Tiffin tiffin);
    Tiffin findTiffinById(Long tid);
    Tiffin deleteTiffin(Long tid);
}

