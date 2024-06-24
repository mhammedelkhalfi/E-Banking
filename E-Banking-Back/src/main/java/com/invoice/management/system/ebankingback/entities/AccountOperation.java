package com.invoice.management.system.ebankingback.entities;

import com.invoice.management.system.ebankingback.enums.OperationType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class AccountOperation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Date operationDate;
    private double amount;
    private OperationType Type;
    @ManyToOne
    private BankAccount bankAccount;
}




















