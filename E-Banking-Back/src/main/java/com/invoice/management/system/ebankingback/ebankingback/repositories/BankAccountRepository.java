package com.invoice.management.system.ebankingback.ebankingback.repositories;

import com.invoice.management.system.ebankingback.ebankingback.dtos.AccountOperationDTO;
import com.invoice.management.system.ebankingback.ebankingback.entities.BankAccount;
import com.invoice.management.system.ebankingback.ebankingback.exceptions.CustomerNotFoundException;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BankAccountRepository extends JpaRepository<BankAccount,String> {
    List<BankAccount> findByCustomerId(Long customerId);
}
