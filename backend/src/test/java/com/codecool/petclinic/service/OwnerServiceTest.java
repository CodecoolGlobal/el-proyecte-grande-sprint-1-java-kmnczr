package com.codecool.petclinic.service;

import com.codecool.petclinic.model.Owner;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class OwnerServiceTest {

    @Autowired
    OwnerService ownerService;

    @DisplayName("Test Spring @Autowired Integration")
    @Test
    void testGet() {
        Long LennonId = Long.valueOf(1);
        Owner lennon = new Owner("John", "Lennon", "john@lennon.com", "+66 666 66 66");
        assertEquals(lennon, ownerService.getOwnerById(LennonId));
    }

}