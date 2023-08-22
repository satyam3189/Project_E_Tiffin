package com.app.service;

import com.app.model.Tiffin;
import com.app.repository.TiffinRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TiffinServiceImpl implements TiffinService{
    TiffinRepository tiffinRepository;

    public TiffinServiceImpl(TiffinRepository tiffinRepository) {
        this.tiffinRepository = tiffinRepository;
    }

    @Override
    public List<Tiffin> showAllTiffins() {
        return tiffinRepository.findAll();
    }

    @Override
    public Tiffin addTiffin(Tiffin tiffin) {
        return tiffinRepository.save(tiffin);
    }

    @Override
    public Tiffin findTiffinById(Long tid) {
        return tiffinRepository.findById(tid).get();
    }

    @Override
    public Tiffin deleteTiffin(Long tid) {
        Tiffin tiffin = tiffinRepository.findById(tid).get();
        tiffinRepository.deleteById(tid);
        return tiffin;
    }
}
