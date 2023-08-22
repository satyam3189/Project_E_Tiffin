package com.app.service;

import com.app.model.TiffinDetail;

import java.util.List;

public interface TiffinDetailService {
    List<TiffinDetail> showAllTiffinDetail();
    TiffinDetail findTiffinDetailById(Long mdid);
    TiffinDetail addTiffinDetail(TiffinDetail tiffinDetail);
    Long updateQuantity(Long mdid, Long qty);
    TiffinDetail deleteTiffinDetail(Long tdid);
}
