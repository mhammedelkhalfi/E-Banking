package com.invoice.management.system.ebankingback.ebankingback.web;

import com.invoice.management.system.ebankingback.ebankingback.dtos.BankAccountDTO;
import com.invoice.management.system.ebankingback.ebankingback.entities.Customer;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import com.invoice.management.system.ebankingback.ebankingback.dtos.CustomerDTO;
import com.invoice.management.system.ebankingback.ebankingback.exceptions.CustomerNotFoundException;
import com.invoice.management.system.ebankingback.ebankingback.services.BankAccountService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@Slf4j
@CrossOrigin("*")
public class CustomerRestController {
    private BankAccountService bankAccountService;
    @GetMapping("/customers")
    @PreAuthorize("hasAuthority('SCOPE_ROLE_USER')")
    public List<CustomerDTO> customers(){
        return bankAccountService.listCustomers();
    }
    @GetMapping("/customers/search")
    public List<CustomerDTO> searchCustomers(@RequestParam(name = "keyword",defaultValue = "") String keyword){
        return bankAccountService.searchCustomers("%"+keyword+"%");
    }
    @GetMapping("/customers/{id}")
    @PreAuthorize("hasAuthority('SCOPE_ROLE_USER')")
    public CustomerDTO getCustomer(@PathVariable(name = "id") Long customerId) throws CustomerNotFoundException {
        return bankAccountService.getCustomer(customerId);
    }
    @PostMapping("/customers")
    @PreAuthorize("hasAuthority('SCOPE_ROLE_ADMIN')")
    public CustomerDTO saveCustomer(@RequestBody CustomerDTO customerDTO){
        return bankAccountService.saveCustomer(customerDTO);
    }

    @PutMapping("/customers/{customerId}")
    @PreAuthorize("hasAuthority('SCOPE_ROLE_ADMIN')")
    public CustomerDTO updateCustomer(@PathVariable Long customerId, @RequestBody CustomerDTO customerDTO){
        customerDTO.setId(customerId);
        return bankAccountService.updateCustomer(customerDTO);
    }
    @DeleteMapping("/customers/{id}")
    @PreAuthorize("hasAuthority('SCOPE_ROLE_ADMIN')")
    public void deleteCustomer(@PathVariable Long id){
        bankAccountService.deleteCustomer(id);
    }

}
