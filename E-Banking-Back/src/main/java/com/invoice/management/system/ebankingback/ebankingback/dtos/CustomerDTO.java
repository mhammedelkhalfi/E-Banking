package com.invoice.management.system.ebankingback.ebankingback.dtos;

import com.invoice.management.system.ebankingback.ebankingback.entities.BankAccount;
import lombok.Data;

import java.util.List;


@Data
public class CustomerDTO {
    private Long id;
    private String name;
    private String email;
}
