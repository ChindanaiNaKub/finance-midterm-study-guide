# Practice Questions

[← Previous: Tax Management](08-Tax-Management.md) | [Back to Home](README.md) | [Next: Quick Reference →](Quick-Reference.md)

---

## Time Value of Money Problems

### Question 1: Present Value
You will receive 10,000 baht one year from now. If the discount rate is 5% per year, what is the current value?

<details>
<summary>💡 Click to see solution</summary>

---

**Formula:**
```
PV = FV / (1 + r)ᵗ
```

**Given:**
- FV = 10,000 baht
- r = 5% = 0.05
- t = 1 year

**Calculation:**
```
PV = 10,000 / (1 + 0.05)¹
PV = 10,000 / 1.05
PV = 9,523.81 baht
```

**✅ Answer: 9,523.81 baht**

</details>

---

### Question 2: Present Value (Multi-Year)
A payment of 50,000 baht is due in 3 years. The discount rate is 4%. What is the PV?

<details>
<summary>💡 Click to see solution</summary>

---

**Formula:**
```
PV = FV / (1 + r)ᵗ
```

**Given:**
- FV = 50,000 baht
- r = 4% = 0.04
- t = 3 years

**Calculation:**
```
PV = 50,000 / (1 + 0.04)³
PV = 50,000 / 1.124864
PV = 44,449.82 baht
```

**✅ Answer: 44,449.82 baht**

</details>

---

### Question 3: Future Value
How much will 10,000 baht grow to in 3 years if the interest rate is 6%?

<details>
<summary>💡 Click to see solution</summary>

---

**Formula:**
```
FV = PV(1 + r)ᵗ
```

**Given:**
- PV = 10,000 baht
- r = 6% = 0.06
- t = 3 years

**Calculation:**
```
FV = 10,000(1 + 0.06)³
FV = 10,000(1.191016)
FV = 11,910.16 baht
```

**✅ Answer: 11,910.16 baht**

</details>

---

### Question 4: Future Value (Long-Term)
You invest 50,000 baht at 8% compounded annually. How much will you have after 5 years?

<details>
<summary>💡 Click to see solution</summary>

---

**Formula:**
```
FV = PV(1 + r)ᵗ
```

**Given:**
- PV = 50,000 baht
- r = 8% = 0.08
- t = 5 years

**Calculation:**
```
FV = 50,000(1 + 0.08)⁵
FV = 50,000(1.469328)
FV = 73,466.40 baht
```

**✅ Answer: 73,466.40 baht**

</details>

---

### Question 5: Present Value for Goal
An investor wants 200,000 baht in 4 years. If the interest rate is 6%, how much must they deposit today?

<details>
<summary>💡 Click to see solution</summary>

---

**Formula:**
```
PV = FV / (1 + r)ᵗ
```

**Given:**
- FV = 200,000 baht (goal)
- r = 6% = 0.06
- t = 4 years

**Calculation:**
```
PV = 200,000 / (1 + 0.06)⁴
PV = 200,000 / 1.262477
PV = 158,418.73 baht
```

**✅ Answer: 158,418.73 baht**

**Interpretation:** Need to deposit 158,418.73 baht today to have 200,000 baht in 4 years at 6% interest.

</details>

---

### Question 6: Present Value of Annuity
You will receive 5,000 baht per year for 4 years, discount rate 5%. What is the current value?

<details>
<summary>💡 Click to see solution</summary>

---

**Formula:**
```
PVA = PMT × [1 - 1/(1 + r)ᵗ] / r
```

**Given:**
- PMT = 5,000 baht per year
- r = 5% = 0.05
- t = 4 years

**Step-by-Step Calculation:**

**Step 1:** Calculate (1 + r)ᵗ
```
(1 + 0.05)⁴ = 1.215506
```

**Step 2:** Calculate 1/(1 + r)ᵗ
```
1/1.215506 = 0.822702
```

**Step 3:** Calculate [1 - 1/(1 + r)ᵗ]
```
1 - 0.822702 = 0.177298
```

**Step 4:** Divide by r
```
0.177298 / 0.05 = 3.54595
```

**Step 5:** Multiply by PMT
```
PVA = 5,000 × 3.54595
PVA = 17,729.75 baht
```

**✅ Answer: 17,729.75 baht (Ordinary annuity)**

**Interpretation:** The current value of receiving 5,000 baht per year for 4 years is 17,729.75 baht.

</details>

---

### Question 7: Future Value of Annuity
You save 15,000 baht per year in a retirement fund earning 5%. How much will you have after 10 years?

<details>
<summary>💡 Click to see solution</summary>

---

**Formula:**
```
FVA = PMT × [(1 + r)ᵗ - 1] / r
```

**Given:**
- PMT = 15,000 baht per year
- r = 5% = 0.05
- t = 10 years

**Step-by-Step Calculation:**

**Step 1:** Calculate (1 + r)ᵗ
```
(1 + 0.05)¹⁰ = 1.628895
```

**Step 2:** Subtract 1
```
1.628895 - 1 = 0.628895
```

**Step 3:** Divide by r
```
0.628895 / 0.05 = 12.577893
```

**Step 4:** Multiply by PMT
```
FVA = 15,000 × 12.577893
FVA = 188,668.39 baht
```

**✅ Answer: 188,668.39 baht (Ordinary annuity)**

**Interpretation:** Saving 15,000 baht per year for 10 years at 5% will grow to 188,668.39 baht.

</details>

---

### Question 8: Solving for Payment
You want to accumulate 1,000,000 baht in 12 years. You can earn 6% per year, and you will deposit the same amount each year. How much must you deposit each year?

<details>
<summary>💡 Click to see solution</summary>

---

**Formula:**
```
FVA = PMT × [(1 + r)ᵗ - 1] / r
```

**Rearrange to solve for PMT:**
```
PMT = FVA × r / [(1 + r)ᵗ - 1]
```

**Given:**
- FVA = 1,000,000 baht (goal)
- r = 6% = 0.06
- t = 12 years

**Step-by-Step Calculation:**

**Step 1:** Calculate (1 + r)ᵗ
```
(1 + 0.06)¹² = 2.012196
```

**Step 2:** Subtract 1
```
2.012196 - 1 = 1.012196
```

**Step 3:** Multiply FVA by r
```
1,000,000 × 0.06 = 60,000
```

**Step 4:** Divide
```
PMT = 60,000 / 1.012196
PMT = 59,277.03 baht
```

**✅ Answer: 59,277.03 baht per year (Ordinary annuity)**

**Interpretation:** You must deposit 59,277.03 baht each year for 12 years at 6% to accumulate 1,000,000 baht.

</details>

---

## Financial Ratio Problems

### Question 9: Basic Liquidity Ratio
You have $9,000 in liquid assets and monthly expenses of $2,500. Calculate your basic liquidity ratio. Is it adequate?

<details>
<summary>💡 Click to see solution</summary>

---

**Formula:**
```
Basic Liquidity Ratio = Liquid Assets / Monthly Expenses
```

**Given:**
- Liquid Assets = $9,000
- Monthly Expenses = $2,500

**Calculation:**
```
Ratio = $9,000 / $2,500 = 3.6
```

**✅ Answer: 3.6**

**Benchmark:** ≥ 3.0 (recommended)

**Interpretation:** 
- ✅ **Yes, adequate!** Your ratio of 3.6 exceeds the recommended 3.0
- You can survive **3.6 months** without income using only liquid assets
- This provides a good emergency fund cushion

</details>

---

### Question 10: Asset-to-Debt Ratio
Total assets: $75,000. Total liabilities: $45,000. Calculate asset-to-debt ratio. Are you solvent?

<details>
<summary>💡 Click to see solution</summary>

---

**Formula:**
```
Asset-to-Debt Ratio = Total Assets / Total Liabilities
```

**Given:**
- Total Assets = $75,000
- Total Liabilities = $45,000

**Calculation:**
```
Ratio = $75,000 / $45,000 = 1.67
```

**✅ Answer: 1.67**

**Benchmark:** > 1.0 (must be greater than 1 to be solvent)

**Interpretation:**
- ✅ **Yes, you are solvent!** Ratio > 1.0 means you own more than you owe
- You own $1.67 for every $1.00 you owe
- Net Worth = $75,000 - $45,000 = $30,000 (positive)

</details>

---

### Question 11: Debt Service-to-Income Ratio
Annual debt payments: $22,000. Gross annual income: $70,000. Calculate debt service-to-income ratio. Is it acceptable?

<details>
<summary>💡 Click to see solution</summary>

---

**Formula:**
```
Debt Service-to-Income Ratio = Annual Debt Payments / Gross Annual Income
```

**Given:**
- Annual Debt Payments = $22,000
- Gross Annual Income = $70,000

**Calculation:**
```
Ratio = $22,000 / $70,000 = 0.314 = 31.4%
```

**✅ Answer: 0.314 (31.4%)**

**Benchmark:** ≤ 0.333 (33.3%) recommended

**Interpretation:**
- ✅ **Yes, acceptable!** Your ratio of 31.4% is below the recommended 33.3%
- You spend 31.4% of gross income on debt payments
- You have manageable debt levels
- Room for additional debt if needed (but not recommended)

</details>

---

### Question 12: Investment Assets Ratio
You are 35 years old. Investment assets: $25,000. Total assets: $100,000. Calculate the ratio. Is it appropriate for your age?

<details>
<summary>💡 Click to see solution</summary>

---

**Formula:**
```
Investment Assets-to-Total Assets Ratio = Investment Assets / Total Assets
```

**Given:**
- Age = 35 years old
- Investment Assets = $25,000
- Total Assets = $100,000

**Calculation:**
```
Ratio = $25,000 / $100,000 = 0.25 = 25%
```

**✅ Answer: 0.25 (25%)**

**Benchmark (Age-Based):**
- 20s: 10%
- **30s: 11-30%** ← Your age group
- 40s: 30%+
- 50s+: 50%+

**Interpretation:**
- ✅ **Yes, appropriate for your age!** Your 25% is within the 11-30% range for people in their 30s
- You're on track for retirement savings
- Consider gradually increasing as you approach your 40s

</details>

---

## Tax Calculation Problems

### Question 13: Marginal Tax Calculation
Taxable income: $45,000
Tax brackets: 10% ($0-$8,350), 15% ($8,351-$33,950), 25% ($33,951+)
Calculate total tax liability.

<details>
<summary>💡 Click to see solution</summary>

---

**Given:**
- Taxable Income = $45,000
- Tax Brackets:
  - 10% on $0 - $8,350
  - 15% on $8,351 - $33,950
  - 25% on $33,951+

**Progressive Tax Calculation (Step-by-Step):**

**Bracket 1:** First $8,350 at 10%
```
$8,350 × 0.10 = $835.00
```

**Bracket 2:** Next $25,600 at 15% ($33,950 - $8,350)
```
$25,600 × 0.15 = $3,840.00
```

**Bracket 3:** Remaining $11,050 at 25% ($45,000 - $33,950)
```
$11,050 × 0.25 = $2,762.50
```

**Total Tax:**
```
$835.00 + $3,840.00 + $2,762.50 = $7,437.50
```

**✅ Answer: $7,437.50**

**Additional Info:**
- **Marginal Tax Rate:** 25% (last dollar taxed at 25%)
- **Average Tax Rate:** $7,437.50 / $45,000 = 16.5%
- **NOT:** $45,000 × 0.25 = $11,250 ❌ (This is wrong!)

</details>

---

### Question 14: Average Tax Rate
Gross income: $55,000. Total taxes paid: $8,250. Calculate average tax rate.

<details>
<summary>💡 Click to see solution</summary>

---

**Formula:**
```
Average Tax Rate = Total Taxes Paid / Gross Income
```

**Given:**
- Gross Income = $55,000
- Total Taxes Paid = $8,250

**Calculation:**
```
Average Tax Rate = $8,250 / $55,000 = 0.15 = 15%
```

**✅ Answer: 15%**

**Interpretation:**
- You pay 15% of your total income in taxes
- This is your overall tax burden
- Average tax rate is always less than marginal tax rate

</details>

---

### Question 15: Tax Credit vs. Deduction
You're in the 28% marginal tax bracket. Compare:
- Option A: $2,000 tax deduction
- Option B: $2,000 tax credit

Which saves more money?

<details>
<summary>💡 Click to see solution</summary>

---

**Given:**
- Marginal Tax Rate = 28%
- Both options = $2,000

**Option A: Tax Deduction**
```
Tax Savings = Deduction × Marginal Tax Rate
Tax Savings = $2,000 × 0.28 = $560
```

**Option B: Tax Credit**
```
Tax Savings = Credit Amount (dollar-for-dollar)
Tax Savings = $2,000
```

**Comparison:**
| Option | Amount | Savings |
|--------|--------|---------|
| A: Deduction | $2,000 | $560 |
| B: Credit | $2,000 | **$2,000** |
| **Difference** | | **$1,440** |

**✅ Answer: Option B (Tax Credit) is better!**

**Key Insight:**
- Credit saves $2,000
- Deduction saves only $560
- Credit provides **$1,440 more savings**
- Tax credits are always better than deductions of the same amount!

</details>

---

### Question 16: 401(k) Tax Savings
You contribute $5,000 to your 401(k). Your marginal tax rate is 25%. How much do you save in taxes?

<details>
<summary>💡 Click to see solution</summary>

---

**Formula:**
```
Tax Savings = Contribution × Marginal Tax Rate
```

**Given:**
- 401(k) Contribution = $5,000
- Marginal Tax Rate = 25% = 0.25

**Calculation:**
```
Tax Savings = $5,000 × 0.25 = $1,250
```

**✅ Answer: $1,250 in immediate tax savings**

**Additional Benefits:**
- ✅ Your $5,000 grows tax-deferred (no taxes on growth until withdrawal)
- ✅ Employer may match contributions (free money!)
- ✅ Reduces taxable income from gross income
- ✅ Builds retirement savings

**Example:**
- Without 401(k): Pay taxes on $5,000 = $1,250 in taxes
- With 401(k): Save $5,000 + avoid $1,250 in taxes = Win-win!

</details>

---

## Real vs. Nominal Income Problems

### Question 17: Real Income Change
Current salary: $45,000. New salary: $47,500. Inflation: 3.5%. Calculate real income change.

<details>
<summary>💡 Click to see solution</summary>

---

**Given:**
- Current Salary = $45,000
- New Salary = $47,500
- Inflation Rate = 3.5%

**Step 1: Calculate Nominal Change**
```
Nominal Change % = [(New - Old) / Old] × 100
Nominal Change % = [($47,500 - $45,000) / $45,000] × 100
Nominal Change % = ($2,500 / $45,000) × 100
Nominal Change % = 5.56%
```

**Step 2: Calculate Real Change**
```
Real Change % = Nominal Change % - Inflation %
Real Change % = 5.56% - 3.5%
Real Change % = 2.06%
```

**Step 3: Calculate Real Income in Dollars**
```
Real Income = Old Salary × (1 + Real Change as decimal)
Real Income = $45,000 × (1 + 0.0206)
Real Income = $45,000 × 1.0206
Real Income = $45,927
```

**✅ Answer Summary:**

| Measure | Amount |
|---------|--------|
| Nominal raise | $2,500 |
| Real economic progress | $927 |
| Lost to inflation | $1,573 |
| Real change percentage | 2.06% |

**Interpretation:**
- You got a $2,500 raise (5.56%)
- But inflation ate $1,573 of it
- Your real purchasing power only increased by $927 (2.06%)

</details>

---

## Budgeting Problems

### Question 18: Net Worth Calculation
Assets: Checking $2,000, Savings $5,000, Car $15,000, House $200,000
Liabilities: Credit card $3,000, Car loan $8,000, Mortgage $150,000
Calculate net worth.

<details>
<summary>💡 Click to see solution</summary>

---

**Formula:**
```
Net Worth = Total Assets - Total Liabilities
```

**Given Assets:**
- Checking account: $2,000
- Savings account: $5,000
- Car: $15,000
- House: $200,000

**Given Liabilities:**
- Credit card: $3,000
- Car loan: $8,000
- Mortgage: $150,000

**Step 1: Calculate Total Assets**
```
Total Assets = $2,000 + $5,000 + $15,000 + $200,000
Total Assets = $222,000
```

**Breakdown:**
- Monetary assets: $7,000 (checking + savings)
- Tangible assets: $15,000 (car)
- Investment assets: $200,000 (house)

**Step 2: Calculate Total Liabilities**
```
Total Liabilities = $3,000 + $8,000 + $150,000
Total Liabilities = $161,000
```

**Breakdown:**
- Short-term: $3,000 (credit card)
- Long-term: $158,000 (car loan + mortgage)

**Step 3: Calculate Net Worth**
```
Net Worth = Assets - Liabilities
Net Worth = $222,000 - $161,000
Net Worth = $61,000
```

**✅ Answer: $61,000**

**Interpretation:**
- Your true financial wealth is $61,000
- You are **solvent** (positive net worth)
- Asset-to-debt ratio: $222,000 / $161,000 = 1.38 (good!)

</details>

---

### Question 19: Cash Flow Surplus/Deficit
Monthly income: $5,000
Fixed expenses: $2,500 (rent, car payment, insurance)
Variable expenses: $1,800 (food, utilities, entertainment)
Calculate surplus or deficit.

<details>
<summary>💡 Click to see solution</summary>

---

**Formula:**
```
Surplus (Deficit) = Total Income - Total Expenses
```

**Given:**
- Monthly Income = $5,000
- Fixed Expenses = $2,500 (rent, car payment, insurance)
- Variable Expenses = $1,800 (food, utilities, entertainment)

**Step 1: Calculate Total Expenses**
```
Total Expenses = Fixed + Variable
Total Expenses = $2,500 + $1,800
Total Expenses = $4,300
```

**Step 2: Calculate Surplus/Deficit**
```
Surplus = Income - Expenses
Surplus = $5,000 - $4,300
Surplus = $700
```

**✅ Answer: $700 surplus (positive cash flow)**

**What to Do with Surplus:**
1. ✅ Build emergency fund (if < 3 months expenses)
2. ✅ Pay down high-interest debt
3. ✅ Invest in retirement account (401k, IRA)
4. ✅ Save for specific goals
5. ✅ Invest in taxable accounts

**Budget Breakdown:**
- Income: 100%
- Fixed expenses: 50% (reasonable)
- Variable expenses: 36% (good)
- Surplus: 14% (excellent savings rate!)

</details>

---

## Rule of 72 Problems

### Question 20: Doubling Time
You invest at 9% annual return. How long until your money doubles?

<details>
<summary>💡 Click to see solution</summary>

---

**Formula (Rule of 72):**
```
Years to Double = 72 / Interest Rate
```

**Given:**
- Interest Rate = 9%

**Calculation:**
```
Years = 72 / 9 = 8 years
```

**✅ Answer: 8 years**

**Interpretation:**
- At 9% annual return, your investment will double in 8 years
- $1,000 → $2,000 in 8 years
- $10,000 → $20,000 in 8 years
- This is a quick mental calculation (actual: 8.04 years)

**Verification (using FV formula):**
```
FV = PV(1 + r)ᵗ
$2,000 = $1,000(1.09)⁸
$2,000 = $1,000(1.9926)
$2,000 ≈ $1,993 ✓ (close!)
```

</details>

---

### Question 21: Required Return
You want to double your money in 6 years. What return do you need?

<details>
<summary>💡 Click to see solution</summary>

---

**Formula (Rule of 72 - Rearranged):**
```
Interest Rate = 72 / Years to Double
```

**Given:**
- Desired time to double = 6 years

**Calculation:**
```
Rate = 72 / 6 = 12%
```

**✅ Answer: 12% annual return needed**

**Interpretation:**
- You need a 12% annual return to double your money in 6 years
- This is relatively high - stock market averages ~10% long-term
- Higher returns usually mean higher risk

**Examples at 12%:**
- $5,000 → $10,000 in 6 years
- $25,000 → $50,000 in 6 years
- $100,000 → $200,000 in 6 years

**Verification (using FV formula):**
```
FV = PV(1 + r)ᵗ
$2,000 = $1,000(1.12)⁶
$2,000 = $1,000(1.9738)
$2,000 ≈ $1,974 ✓ (close!)
```

</details>

---

## Exam Tips for Practice

- ✅ **Show your work** - partial credit possible
- ✅ **Use correct formulas** - write them down first
- ✅ **Check units** - annual vs. monthly, percentages vs. decimals
- ✅ **Round appropriately** - usually 2 decimal places for money
- ✅ **Label your answers** - include units (%, $, years)
- ✅ **Double-check calculations** - use calculator carefully
- ✅ **Read carefully** - is it asking for PV or FV? Annual or monthly?

---

[← Previous: Tax Management](08-Tax-Management.md) | [Back to Home](README.md) | [Next: Quick Reference →](Quick-Reference.md)
