package com.app.service;

import com.app.model.Tiffin;

import java.util.List;

public interface TiffinService {
    List<Tiffin> showAllTiffins();
    Tiffin addTiffin(Tiffin tiffin);
    Tiffin findTiffinById(Long tid);
    Tiffin deleteTiffin(Long tid);
}

