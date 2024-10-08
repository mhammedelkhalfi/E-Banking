package com.invoice.management.system.ebankingback.ebankingback.repositories;

import com.invoice.management.system.ebankingback.ebankingback.dtos.AccountOperationDTO;
import com.invoice.management.system.ebankingback.ebankingback.entities.AccountOperation;
import com.invoice.management.system.ebankingback.ebankingback.entities.Customer;
import com.invoice.management.system.ebankingback.ebankingback.exceptions.CustomerNotFoundException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer,Long> {
    @Query("select c from Customer c where c.name like :kw")
    List<Customer> searchCustomer(@Param("kw") String keyword);
}
