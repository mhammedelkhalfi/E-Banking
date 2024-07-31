package com.invoice.management.system.ebankingback.ebankingback.services;

import com.invoice.management.system.ebankingback.ebankingback.dtos.*;
import com.invoice.management.system.ebankingback.ebankingback.entities.BankAccount;
import com.invoice.management.system.ebankingback.ebankingback.entities.CurrentAccount;
import com.invoice.management.system.ebankingback.ebankingback.entities.Customer;
import com.invoice.management.system.ebankingback.ebankingback.entities.SavingAccount;
import com.invoice.management.system.ebankingback.ebankingback.exceptions.BalanceNotSufficientException;
import com.invoice.management.system.ebankingback.ebankingback.exceptions.BankAccountNotFoundException;
import com.invoice.management.system.ebankingback.ebankingback.exceptions.CustomerNotFoundException;

import java.util.List;
public interface BankAccountService {
    CustomerDTO saveCustomer(CustomerDTO customerDTO);
    CurrentBankAccountDTO saveCurrentBankAccount(double initialBalance, double overDraft, Long customerId) throws CustomerNotFoundException;
    SavingBankAccountDTO saveSavingBankAccount(double initialBalance, double interestRate, Long customerId) throws CustomerNotFoundException;
    List<CustomerDTO> listCustomers();
    BankAccountDTO getBankAccount(String accountId) throws BankAccountNotFoundException;
    void debit(String accountId, double amount, String description) throws BankAccountNotFoundException, BalanceNotSufficientException;
    void credit(String accountId, double amount, String description) throws BankAccountNotFoundException;
    void transfer(String accountIdSource, String accountIdDestination, double amount) throws BankAccountNotFoundException, BalanceNotSufficientException;

    List<BankAccountDTO> bankAccountList();

    CustomerDTO getCustomer(Long customerId) throws CustomerNotFoundException;

    CustomerDTO updateCustomer(CustomerDTO customerDTO);

    void deleteCustomer(Long customerId);

    List<AccountOperationDTO> accountHistory(String accountId);

    AccountHistoryDTO getAccountHistory(String accountId, int page, int size) throws BankAccountNotFoundException;

    List<CustomerDTO> searchCustomers(String keyword);
}