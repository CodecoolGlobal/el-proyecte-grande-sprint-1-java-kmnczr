//package com.codecool.petclinic.service;
//
//import com.codecool.petclinic.model.Owner;
//import com.codecool.petclinic.repository.OwnerRepository;
//        import org.junit.jupiter.api.BeforeEach;
//        import org.junit.jupiter.api.DisplayName;
//        import org.junit.jupiter.api.Test;
//        import org.mockito.InjectMocks;
//        import org.mockito.Mock;
//        import org.springframework.boot.test.context.SpringBootTest;
//
//import java.util.ArrayList;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//        import static org.mockito.Mockito.when;
//
//@SpringBootTest
//public class OwnerServiceMockTest {
//
//    @Mock
//    private OwnerRepository ownerRepository;
//
//    @Mock
//    private UserServiceImpl userService;
//
//    @InjectMocks // auto inject ownerRepository....
//    private OwnerService ownerService = new OwnerService();
//
//    @BeforeEach
//    void setMockOutput() {
//        Owner testOwner = new Owner("Elek", "Teszt", "teszt@elek.hu", "+1234" );
//        ArrayList<Owner> testArray = new ArrayList<>();
//        testArray.add(testOwner);
//        when(ownerRepository.findAll()).thenReturn(testArray);
//    }
//
//    @DisplayName("Test Mock helloService + helloRepository")
//    @Test
//    void testGet() {
//        assertEquals("Hello Mockito From Repository", helloService.get());
//    }
//
//}