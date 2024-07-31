package com.invoice.management.system.ebankingback.ebankingback.repositories;

import com.invoice.management.system.ebankingback.ebankingback.entities.BankAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BankAccountRepository extends JpaRepository<BankAccount,String> {
}
