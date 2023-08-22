package com.app.service;

import com.app.model.TiffinDetail;
import com.app.repository.TiffinDetailRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TiffinDetailServiceImpl implements TiffinDetailService{
    TiffinDetailRepository tiffinDetailRepository;

    public TiffinDetailServiceImpl(TiffinDetailRepository tiffinDetailRepository) {
        this.tiffinDetailRepository = tiffinDetailRepository;
    }

    @Override
    public List<TiffinDetail> showAllTiffinDetail() {
        return tiffinDetailRepository.findAll();
    }

    @Override
    public TiffinDetail findTiffinDetailById(Long tdid) {
        return tiffinDetailRepository.findById(tdid).get();
    }

    @Override
    public TiffinDetail addTiffinDetail(TiffinDetail tiffinDetail) {
        return tiffinDetailRepository.save(tiffinDetail);
    }

    @Override
    public Long updateQuantity(Long tdid, Long qty) {
        TiffinDetail tiffinDetail = tiffinDetailRepository.findById(tdid).get();
        tiffinDetail.setQty(qty);
        return tiffinDetailRepository.findById(tdid).get().getQty();
    }

    @Override
    public TiffinDetail deleteTiffinDetail(Long tdid) {
        TiffinDetail tiffinDetail = tiffinDetailRepository.findById(tdid).get();
        tiffinDetailRepository.deleteById(tdid);
        return tiffinDetail;
    }
}
