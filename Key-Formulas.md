# Key Formulas Reference

[Midterm Home](index.md) | [Final Exam Home](final-index.md)

---

## 💰 Time Value of Money Formulas

### Future Value (FV)
**What will my investment be worth in the future?**

```
FV = PV(1 + r)ᵗ
```

**Where:**
- FV = Future Value
- PV = Present Value (current amount)
- r = interest rate per period (as decimal)
- t = number of time periods

**Example:**
```
Invest $1,000 at 8% for 4 years
FV = $1,000(1 + 0.08)⁴
FV = $1,000(1.36049)
FV = $1,360.49
```

---

### Present Value (PV)
**How much do I need to invest today to reach a future goal?**

```
PV = FV / (1 + r)ᵗ
```

**Alternative notation:**
```
PV = FV(1 + r)⁻ᵗ
```

**Where:**
- PV = Present Value (amount needed today)
- FV = Future Value (goal amount)
- r = interest rate per period (as decimal)
- t = number of time periods

**Example:**
```
Want $20,000 in 10 years at 7%
PV = $20,000 / (1 + 0.07)¹⁰
PV = $20,000 / 1.967151
PV = $10,167
```

---

### Future Value of Annuity (FVA)
**What will my regular savings be worth in the future?**

```
FVA = PMT × [(1 + r)ᵗ - 1] / r
```

**Where:**
- FVA = Future Value of Annuity
- PMT = Payment amount per period
- r = interest rate per period (as decimal)
- t = number of periods

**Example:**
```
Save $1,000/year for 10 years at 10%
FVA = $1,000 × [(1 + 0.10)¹⁰ - 1] / 0.10
FVA = $1,000 × [2.59374 - 1] / 0.10
FVA = $1,000 × 15.9374
FVA = $15,937.42
```

---

### Present Value of Annuity (PVA)
**How much do I need today to fund regular future payments?**

```
PVA = PMT × [1 - 1/(1 + r)ᵗ] / r
```

**Where:**
- PVA = Present Value of Annuity
- PMT = Payment amount per period
- r = interest rate per period (as decimal)
- t = number of periods

**Example:**
```
Want $30,000/year for 20 years at 7%
PVA = $30,000 × [1 - 1/(1 + 0.07)²⁰] / 0.07
PVA = $30,000 × [1 - 0.258419] / 0.07
PVA = $30,000 × 10.594
PVA = $317,820
```

---

### Simple Interest
**Basic interest calculation (not compounded)**

```
i = p × r × t = prt
```

**Where:**
- i = interest earned
- p = principal (amount invested)
- r = interest rate (as decimal)
- t = time in years

**Example:**
```
$1,000 at 8% for 4 years
i = $1,000 × 0.08 × 4
i = $320
```

---

### Compound Interest
**Interest earned including interest on interest**

```
Compound Interest = p[(1 + r)ᵗ - 1]
```

**Where:**
- p = principal
- r = interest rate (as decimal)
- t = time in years

**Example:**
```
$1,000 at 8% for 4 years
i = $1,000[(1 + 0.08)⁴ - 1]
i = $1,000[1.36049 - 1]
i = $1,000 × 0.36049
i = $360.49
```

---

### Rule of 72
**Quick calculation for doubling time**

```
Years to double = 72 / interest rate
```

**OR**

```
Interest rate needed = 72 / years to double
```

**Examples:**
```
At 8%: 72 / 8 = 9 years to double
At 6%: 72 / 6 = 12 years to double
To double in 10 years: 72 / 10 = 7.2% needed
```

---

## 📊 Financial Ratios

### Basic Liquidity Ratio
**Can I pay for emergencies?**

```
Basic Liquidity Ratio = Liquid Assets / Monthly Expenses
```

**Benchmark:** ≥ 3.0

**Example:**
```
Liquid assets: $9,000
Monthly expenses: $3,000
Ratio = $9,000 / $3,000 = 3.0 ✓
```

**Interpretation:**
- Ratio ≥ 3: Good emergency fund
- Ratio < 3: Need more liquid savings

---

### Asset-to-Debt Ratio
**Do I have enough assets compared to liabilities?**

```
Asset-to-Debt Ratio = Total Assets / Total Liabilities
```

**Benchmark:** > 1.0

**Example:**
```
Total assets: $50,000
Total liabilities: $30,000
Ratio = $50,000 / $30,000 = 1.67 ✓
```

**Interpretation:**
- Ratio > 1: Solvent (own more than owe)
- Ratio = 1: Break even
- Ratio < 1: Insolvent (owe more than own)

---

### Debt Service-to-Income Ratio
**Can I meet my debt obligations?**

```
Debt Service-to-Income = Annual Debt Payments / Gross Annual Income
```

**Benchmark:** ≤ 0.333 (33.3%)

**Example:**
```
Annual debt payments: $18,000
Gross annual income: $60,000
Ratio = $18,000 / $60,000 = 0.30 ✓
```

**Interpretation:**
- Ratio ≤ 0.333: Manageable debt
- Ratio > 0.333: Too much debt

**Note:** Includes rent or mortgage payments

---

### Investment Assets-to-Total Assets Ratio
**Am I investing enough for my age?**

```
Investment Assets Ratio = Investment Assets / Total Assets
```

**Benchmarks (Age-Dependent):**
- 20s: 10%
- 30s: 11-30%
- 40s: 30%+
- 50s+: 50%+

**Example:**
```
Age 35, Investment assets: $25,000
Total assets: $100,000
Ratio = $25,000 / $100,000 = 0.25 (25%) ✓
```

---

## 💼 Financial Statement Formulas

### Net Worth
**True measure of financial wealth**

```
Net Worth = Total Assets - Total Liabilities
```

**Example:**
```
Assets: $222,000
Liabilities: $161,000
Net Worth = $222,000 - $161,000 = $61,000
```

---

### Cash Flow Surplus/Deficit
**Am I living within my means?**

```
Surplus (Deficit) = Total Income - Total Expenses
```

**Example:**
```
Income: $5,000
Expenses: $4,300
Surplus = $5,000 - $4,300 = $700
```

**Interpretation:**
- Positive: Surplus (save or invest)
- Negative: Deficit (need to cut expenses or increase income)

---

### Discretionary Income
**Money available after necessities**

```
Discretionary Income = Disposable Income - Necessities
```

**Where:**
- Disposable Income = Take-home pay (after taxes)
- Necessities = Housing, food, utilities, transportation

**Example:**
```
Disposable income: $48,000
Necessities: $30,000
Discretionary = $48,000 - $30,000 = $18,000
```

---

## 💵 Income & Inflation Formulas

### Nominal Income Change
**Percentage change in actual dollars**

```
Nominal Change % = [(New Income - Old Income) / Old Income] × 100
```

**Example:**
```
Old: $37,000, New: $38,600
Nominal = [($38,600 - $37,000) / $37,000] × 100
Nominal = ($1,600 / $37,000) × 100 = 4.3%
```

---

### Real Income Change
**Inflation-adjusted income change**

```
Real Change % = Nominal Change % - Inflation Rate %
```

**Example:**
```
Nominal change: 4.3%
Inflation: 4.0%
Real change = 4.3% - 4.0% = 0.3%
```

---

### Real Income in Dollars
**Actual purchasing power**

```
Real Income = Nominal Income × (1 + Real Change as decimal)
```

**Example:**
```
Nominal income: $37,000
Real change: 0.3% = 0.003
Real income = $37,000 × (1 + 0.003)
Real income = $37,000 × 1.003 = $37,111
```

---

## 🏛️ Tax Formulas

### Taxable Income
**Income subject to tax**

```
Taxable Income = Gross Income - Adjustments - Deductions - Exemptions
```

**Step-by-step:**
1. Start with Gross Income
2. Subtract Adjustments → AGI
3. Subtract Standard or Itemized Deductions
4. Subtract Exemptions → Taxable Income

**Example:**
```
Gross income: $56,000
Adjustments: -$4,000
AGI: $52,000
Itemized deductions: -$8,400
Subtotal: $43,600
Exemptions: -$3,650
Taxable income: $39,950
```

---

### Progressive Tax Calculation
**Tax calculated through brackets**

**Method:** Calculate tax for each bracket separately, then sum

**Example:**
```
Taxable income: $50,650
Brackets: 10% ($0-$8,350), 15% ($8,351-$33,950), 25% ($33,951+)

First bracket:  $8,350 × 0.10 = $835.00
Second bracket: $25,600 × 0.15 = $3,840.00
Third bracket:  $16,700 × 0.25 = $4,175.00
Total Tax = $8,850.00
```

**NOT:** $50,650 × 0.25 = $12,662.50 ❌

---

### Average Tax Rate
**Overall tax burden**

```
Average Tax Rate = Total Taxes Paid / Gross Income
```

**Example:**
```
Total taxes: $8,850
Gross income: $60,000
Average rate = $8,850 / $60,000 = 0.1475 = 14.75%
```

**Note:** Always less than marginal tax rate

---

### Tax Savings from Deduction
**How much a deduction saves**

```
Tax Savings = Deduction Amount × Marginal Tax Rate
```

**Example:**
```
$1,000 deduction, 25% marginal rate
Savings = $1,000 × 0.25 = $250
```

---

### Tax Savings from Credit
**How much a credit saves**

```
Tax Savings = Credit Amount (full dollar value)
```

**Example:**
```
$1,000 credit
Savings = $1,000 (dollar-for-dollar)
```

**Comparison:**
- $1,000 deduction at 25% = $250 savings
- $1,000 credit = $1,000 savings
- **Credit is 4x better!**

---

## 📈 Economic Decision Making

### Opportunity Cost
**Value of next best alternative**

```
Opportunity Cost = Return from Best Alternative - Return from Chosen Option
```

**Example:**
```
Option A: 5% return on $5,000 = $250
Option B: 8% return on $5,000 = $400
Choose A, opportunity cost = $400 - $250 = $150
```

---

### Marginal Analysis
**Compare incremental costs and benefits**

```
Decision: Choose if Marginal Utility > Marginal Cost
```

**Example:**
```
Regular seat: $90
Premium seat: $150
Marginal cost = $150 - $90 = $60

If extra benefits worth more than $60 → Choose premium
If extra benefits worth less than $60 → Choose regular
```

---

## 🎓 Final Exam Formulas (Topics 9–14)

*Topic pages: [Final Exam Home](final-index.md).*

### Insurance: Deductible + coinsurance

```
Reimbursement = (1 − coinsurance %) × (Loss − Deductible)
```

**Example:** Loss $1,350, deductible $100, you pay 20% coinsurance  
Loss after deductible = $1,250 → Reimbursement = 0.80 × $1,250 = **$1,000** → You pay **$350**

---

### Homeowners: Replacement-cost partial loss

```
Reimbursement = (Loss − Deductible) × (Insurance carried ÷ (Replacement value × required %))
```

**Required %** is often **80%** (0.80) or **100%** (1.00) of replacement value—check the policy.

---

### Investment: Total return and yield

```
Total return = Current income + Capital gain (or loss)

Yield = Total return ÷ Price paid
```

**Example:** Paid $4,500; dividends $300; capital gain $500 → Total return $800 → Yield = 800 ÷ 4,500 ≈ **17.78%**

---

### Stock ratios

```
P/E ratio = Market price per share ÷ EPS

EPS = Annual profit (after preferred) ÷ Common shares outstanding

Dividend yield = Annual dividend per share ÷ Market price per share

Payout ratio = Dividends ÷ Earnings  (or DPS ÷ EPS)

P/S ratio = Market capitalization ÷ Annual sales
```

**Lecture rule of thumb:** avoid P/S **> 1.5**; **< 0.75** often favorable.

```
Book value per share = Shareholders' equity ÷ Shares outstanding
```

---

### Mutual fund: Net asset value (NAV)

```
NAV = (Market value of assets − Market value of liabilities) ÷ Shares outstanding
```

**Example:** Assets $100M, liabilities $5M, 10M shares → NAV = 95M ÷ 10M = **$9.50**

---

### Mutual fund: Load (amount invested)

```
Amount invested = Amount paid × (1 − load %)
```

**Example:** $10,000 with 8.5% load → 10,000 × 0.915 = **$9,150** invested

---

### Real estate

```
Price-to-rent = Property price ÷ (12 × monthly rent)

Rental yield = (Annual rent ÷ 2) ÷ Purchase price
```
*(Lecture screen: half of rent to non-debt expenses.)*

```
LTV (loan-to-value) = Debt ÷ Property value

Capital gain = Sale price − Purchase price − Capital improvements
```
*(Repairs may be treated separately in examples.)*

```
Annual depreciation (building only) = Building value ÷ Depreciation years
```

**Discounted cash flow (property value):**

```
Price = CF1/(1+r)¹ + CF2/(1+r)² + CF3/(1+r)³ + CF4/(1+r)⁴ + CF5/(1+r)⁵
```

*(Last period often includes sale proceeds.)*

---

### Retirement

```
Income shortfall = Desired retirement income − Social Security − Pension

Annual withdrawal (given PVA factor) = Nest egg ÷ PVA factor(r, years)
```

**Nest egg planning:** Find PV of the annual shortfall over retirement years, subtract future value of current savings, then use annuity formula to find required **PMT** (annual save) to close the gap.

**Income replacement (rule of thumb):** often **80–100%** of pre-retirement gross income (including SS), depending on lifestyle.

---

### Final exam quick table

| What you need | Formula |
|---------------|---------|
| Insurer pays (deductible + coinsurance) | (1 − CP) × (L − D) |
| Partial loss reimbursement (home) | (L − D) × (I ÷ (RV × 0.8 or 1.0)) |
| Fund share price | NAV |
| Stock valuation ratios | P/E, EPS, yield, P/S, book value/sh |
| Rental deal screen | Price-to-rent; rental yield |
| Leverage | LTV |
| Max price for property (DCF) | Sum of PV of cash flows |
| How much can I withdraw? | Nest egg ÷ PVA factor |

---

## 🎯 Quick Reference Table

| What You Want to Find | Formula to Use |
|----------------------|----------------|
| Future value of lump sum | FV = PV(1 + r)ᵗ |
| Present value of lump sum | PV = FV / (1 + r)ᵗ |
| Future value of payments | FVA = PMT[(1+r)ᵗ-1]/r |
| Present value of payments | PVA = PMT[1-1/(1+r)ᵗ]/r |
| Years to double money | 72 / interest rate |
| Emergency fund adequacy | Liquid Assets / Monthly Expenses |
| Solvency | Total Assets / Total Liabilities |
| Debt burden | Annual Debt / Gross Income |
| Investment progress | Investment Assets / Total Assets |
| Financial wealth | Assets - Liabilities |
| Living within means | Income - Expenses |
| Inflation-adjusted income | Nominal % - Inflation % |
| Income subject to tax | Gross - Adjustments - Deductions - Exemptions |
| Overall tax burden | Total Tax / Gross Income |

---

## ⚠️ Common Formula Mistakes

### Time Value of Money
- ❌ Using 8 instead of 0.08 for 8%
- ❌ Using monthly rate with annual periods
- ❌ Forgetting to subtract 1 in annuity formulas
- ❌ Confusing which formula to use (PV vs FV)

### Financial Ratios
- ❌ Using monthly debt instead of annual
- ❌ Using net income instead of gross
- ❌ Including non-liquid assets in liquidity ratio

### Taxes
- ❌ Multiplying entire income by marginal rate
- ❌ Confusing deductions with credits
- ❌ Forgetting progressive tax calculation

---

## 💡 Formula Tips

1. **Always write the formula first** before plugging in numbers
2. **Convert percentages to decimals** (8% = 0.08)
3. **Match time periods** (annual rate needs annual periods)
4. **Use parentheses** for order of operations
5. **Show your work** for partial credit
6. **Label your answer** with correct units
7. **Double-check** your calculation
8. **Verify reasonableness** of answer

---

**Print this page for quick exam reference! 📄**

[Midterm Home](index.md) | [Final Exam Home](final-index.md)
