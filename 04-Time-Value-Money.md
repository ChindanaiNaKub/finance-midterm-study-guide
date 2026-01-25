# Time Value of Money (TVM)

[← Previous: Inflation & Interest Rates](03-Inflation-Interest-Rates.md) | [Back to Home](README.md) | [Next: Economic Decision Making →](05-Economic-Decision-Making.md)

---

## Core Concept

### The Fundamental Principle
> **A dollar today is worth more than a dollar in the future**

**Why?** Because time is money - you can invest today's dollar to earn returns.

### TVM Definition
- Adjusts for the fact that dollars received/paid in the future are **not equivalent** to those received/paid today
- **Most important concept** in personal finance

### Two Main Components
1. **Future Value (FV)**: What an investment will be worth in the future
2. **Present Value (PV)**: What a future amount is worth today

---

## Interest Calculation Methods

### Simple Interest
**Formula:**
```
i = p × r × t = prt
```

**Where:**
- `p` = principal (amount invested)
- `r` = interest rate (as decimal)
- `t` = time in years

**Example:**
- Principal: $1,000
- Rate: 8% (0.08)
- Time: 4 years
- Interest: $1,000 × 0.08 × 4 = **$320**

**Limitation:** Assumes interest is withdrawn each year; only principal earns interest

---

## Compound Interest

### Definition
- **Earning interest on interest**
- The best way to build investment values over time
- Always assumed in TVM calculations

### How It Works
**Example: $1,000 at 8% for 4 years**

| Year | Starting Amount | Interest (8%) | Ending Amount |
|------|----------------|---------------|---------------|
| 1 | $1,000.00 | $80.00 | $1,080.00 |
| 2 | $1,080.00 | $86.40 | $1,166.40 |
| 3 | $1,166.40 | $93.31 | $1,259.71 |
| 4 | $1,259.71 | $100.78 | $1,360.49 |

**Total Interest:** $360.49 (vs. $320 with simple interest)

### Deriving the Formula

**Year 1:**
```
V₁ = p + pr = p(1 + r)
```

**Year 2:**
```
V₂ = V₁(1 + r) = p(1 + r)(1 + r) = p(1 + r)²
```

**Year 3:**
```
V₃ = V₂(1 + r) = p(1 + r)²(1 + r) = p(1 + r)³
```

**General Formula:**
```
Vₜ = p(1 + r)ᵗ
```

### Compound Interest Formula
```
Compound Interest = p[(1 + r)ᵗ - 1]
```

---

## Future Value (FV)

### Definition
- Valuation of an asset projected to the end of a time period in the future
- What your investment will be worth

### Formula
```
FV = PV(1 + r)ᵗ
```

**Where:**
- `PV` = Present Value (current amount)
- `r` = interest rate per period
- `t` = number of time periods

### Example
- Invest $1,000 at 8% for 4 years
- FV = $1,000(1 + 0.08)⁴ = **$1,360.49**

---

## The Rule of 72

### Quick Doubling Calculator
**Formula:**
```
Years to double = 72 ÷ interest rate
```

**Examples:**
- 7% interest: 72 ÷ 7 = **10.3 years** to double
- 6% interest: 72 ÷ 6 = **12 years** to double
- 8% interest: 72 ÷ 8 = **9 years** to double

**Use:** Quick mental calculation for investment growth

---

## Future Value of Annuity (FVA)

### Definition
- **Annuity**: Series of equal payments made at regular intervals
- FVA: What those payments will be worth in the future

### Formula
```
FVA = PMT × [(1 + r)ᵗ - 1] / r
```

**Where:**
- `PMT` = payment amount per period
- `r` = interest rate per period
- `t` = number of periods

### Example
- Save $1,000 per year for 10 years
- Earn 10% per year
- FVA = $1,000 × [(1 + 0.1)¹⁰ - 1] / 0.1 = **$15,937.42**

---

## Present Value (PV)

### Definition
- Current value of an asset (or stream of assets) to be received in the future
- Amount needed today to reach a future goal

### Formula
```
PV = FV / (1 + r)ᵗ
```

**Alternative notation:**
```
PV = FV(1 + r)⁻ᵗ
```

### Example
- Want $20,000 in 10 years
- Can earn 7% return
- PV = $20,000 / (1 + 0.07)¹⁰ = **$10,167**

**Interpretation:** Need to invest $10,167 today to have $20,000 in 10 years at 7%

---

## Present Value of Annuity (PVA)

### Definition
- Current worth of a stream of future payments
- Useful for retirement planning

### Formula
```
PVA = PMT × [1 - 1/(1 + r)ᵗ] / r
```

### Example: Retirement Planning
- Want $30,000 per year for 20 years in retirement
- Can earn 7% return
- PVA = $30,000 × [1 - 1/(1 + 0.07)²⁰] / 0.07 = **$317,820**

**Interpretation:** Need $317,820 at retirement (not $600,000!) to fund $30,000/year for 20 years at 7%

---

## Power of Compounding

### Comparison: 40 Years at 8%

**Simple Interest:**
```
i = $1,000 × 0.08 × 40 = $3,200
```

**Compound Interest:**
```
i = $1,000[(1 + 0.08)⁴⁰ - 1] = $20,724.52
```

**Difference:** $17,524.52 more with compounding!

### Key Insight
> "The way to build wealth is to make money on your money, not simply to put money away"

---

## Key Formulas Summary

| Concept | Formula | Use |
|---------|---------|-----|
| **Simple Interest** | `i = prt` | Basic interest calculation |
| **Future Value** | `FV = PV(1 + r)ᵗ` | What investment will be worth |
| **Present Value** | `PV = FV/(1 + r)ᵗ` | What to invest today |
| **Rule of 72** | `Years = 72/rate` | Quick doubling time |
| **FV Annuity** | `FVA = PMT[(1+r)ᵗ-1]/r` | Future value of payments |
| **PV Annuity** | `PVA = PMT[1-1/(1+r)ᵗ]/r` | Present value of payments |

---

## Practical Applications

### 1. Savings Goals
- Use FV to see what regular savings will become
- Use PV to determine how much to save now

### 2. Retirement Planning
- Use PVA to calculate retirement nest egg needed
- Use FVA to see what regular contributions will accumulate to

### 3. Investment Decisions
- Compare different investment options using TVM
- Evaluate whether returns justify the investment

### 4. Loan Analysis
- Calculate total cost of borrowing
- Compare loan options

---

## Exam Tips

- ✅ **Master the formulas** - they're essential
- ✅ Know when to use FV vs. PV
- ✅ Understand annuities (series of payments)
- ✅ Remember: compound interest > simple interest
- ✅ Rule of 72 is for quick mental calculations
- ✅ PV and FV are inversely related
- ✅ Always convert percentages to decimals (8% = 0.08)
- ✅ Time periods and interest rate must match (annual rate = annual periods)

---

## Common Mistakes to Avoid

- ❌ Using percentage instead of decimal (use 0.08, not 8)
- ❌ Mixing time periods (annual rate with monthly periods)
- ❌ Forgetting to subtract 1 in compound interest formula
- ❌ Confusing PV and FV
- ❌ Using simple interest when compound is appropriate
- ❌ Forgetting parentheses in calculations

---

## Practice Problem Types

### Type 1: Future Value
"How much will $X grow to in Y years at Z%?"
- Use: `FV = PV(1 + r)ᵗ`

### Type 2: Present Value
"How much do I need today to have $X in Y years at Z%?"
- Use: `PV = FV/(1 + r)ᵗ`

### Type 3: Future Value Annuity
"If I save $X per year for Y years at Z%, how much will I have?"
- Use: `FVA = PMT[(1+r)ᵗ-1]/r`

### Type 4: Present Value Annuity
"How much do I need to fund $X per year for Y years at Z%?"
- Use: `PVA = PMT[1-1/(1+r)ᵗ]/r`

---

[← Previous: Inflation & Interest Rates](03-Inflation-Interest-Rates.md) | [Back to Home](README.md) | [Next: Economic Decision Making →](05-Economic-Decision-Making.md)
