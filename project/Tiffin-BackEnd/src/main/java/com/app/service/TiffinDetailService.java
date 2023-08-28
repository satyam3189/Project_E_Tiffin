package com.app.service;

import java.util.List;

import com.app.model.TiffinDetail;

public interface TiffinDetailService {
    List<TiffinDetail> showAllTiffinDetail();
    TiffinDetail findTiffinDetailById(Long mdid);
    TiffinDetail addTiffinDetail(TiffinDetail tiffinDetail);
    Long updateQuantity(Long mdid, Long qty);
    TiffinDetail deleteTiffinDetail(Long tdid);
}
