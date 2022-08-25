package com.codecool.petclinic.controller;

import com.codecool.petclinic.model.Owner;
import com.codecool.petclinic.service.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class OwnerController {
    private OwnerService ownerService;

    @Autowired
    public OwnerController(OwnerService ownerService) {
        this.ownerService = ownerService;
    }


    @GetMapping("/owners")
    public Set<Owner> listAllOwners() {
    Set<Owner> owners =  ownerService.getAllOwners();
        return owners;
    }

    @GetMapping("/owners/{id}")
    public Owner getOwner(@PathVariable int id) {
        Owner owner = ownerService.getOwnerById(id);
        return owner;
    }

    @DeleteMapping("/owners/{id}")
    public void deleteOwner(@PathVariable int id) {
        Owner deletedOwner = ownerService.deleteOwner(id);
//        if (deletedOwner == null) {
//            return "Could NOT delete Owner";
//        }
//        return "Successfully deleted: " + deletedOwner;
    }

    @PostMapping(value = "/owners/add")
    public void addOwner(@RequestBody Owner ownerToAdd) {
        ownerService.addOwner(ownerToAdd);

    }

    @PutMapping(value = "/owners/update/{id}")
    public void updateOwner(@RequestBody Owner ownerToUpdate, @PathVariable int id) {
        System.out.println(ownerToUpdate);
        ownerService.updateOwner(ownerToUpdate, id);
        System.out.println("we are in updateOwner");
    }
}
