package com.invoice.management.system.ebankingback.ebankingback.dtos;

import lombok.Data;

@Data
public class CreditDTO {
    private String accountId;
    private double amount;
    private String description;
}
