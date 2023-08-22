package com.app.repository;

import com.app.model.Tiffin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TiffinRepository extends JpaRepository<Tiffin, Long> {
}
