package com.tripsync.tripsync.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "expenses")
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;

    private double amount;

    private String paidBy;

    private LocalDate expenseDate;

    private String splitType;

    private int splitBetween;

    private String customSplitAmounts;

    private String expensePeople;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getPaidBy() {
        return paidBy;
    }

    public void setPaidBy(String paidBy) {
        this.paidBy = paidBy;
    }

    public LocalDate getExpenseDate() {
        return expenseDate;
    }

    public void setExpenseDate(LocalDate expenseDate) {
        this.expenseDate = expenseDate;
    }

    public String getSplitType() {
        return splitType;
    }

    public void setSplitType(String splitType) {
        this.splitType = splitType;
    }

    public int getSplitBetween() {
    return splitBetween;
}

    public void setSplitBetween(int splitBetween) {
    this.splitBetween = splitBetween;
}

    public String getCustomSplitAmounts() {
    return customSplitAmounts;
}

    public void setCustomSplitAmounts(String customSplitAmounts) {
    this.customSplitAmounts = customSplitAmounts;
}

    public String getExpensePeople() {
    return expensePeople;
}

    public void setExpensePeople(String expensePeople) {
    this.expensePeople = expensePeople;
}
}