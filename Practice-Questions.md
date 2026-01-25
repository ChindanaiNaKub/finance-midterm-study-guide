# Practice Questions

[← Previous: Tax Management](08-Tax-Management.md) | [Back to Home](README.md) | [Next: Quick Reference →](Quick-Reference.md)



## Time Value of Money Problems

### Question 1: Present Value
You will receive 10,000 baht one year from now. If the discount rate is 5% per year, what is the current value?

<details>
<summary>💡 Click to see solution</summary>
<div class="solution-content">
<p><strong>Formula:</strong></p>
<pre><code>PV = FV / (1 + r)ᵗ</code></pre>
<p><strong>Given:</strong></p>
<ul>
<li>FV = 10,000 baht</li>
<li>r = 5% = 0.05</li>
<li>t = 1 year</li>
</ul>
<p><strong>Calculation:</strong></p>
<pre><code>PV = 10,000 / (1 + 0.05)¹
PV = 10,000 / 1.05
PV = 9,523.81 baht</code></pre>
<p><strong>✅ Answer: 9,523.81 baht</strong></p>
</div>
</details>



### Question 2: Present Value (Multi-Year)
A payment of 50,000 baht is due in 3 years. The discount rate is 4%. What is the PV?

<details>
<summary>💡 Click to see solution</summary>
<div class="solution-content">
<p><strong>Formula:</strong></p>
<pre><code>PV = FV / (1 + r)ᵗ</code></pre>
<p><strong>Given:</strong></p>
<ul>
<li>FV = 50,000 baht</li>
<li>r = 4% = 0.04</li>
<li>t = 3 years</li>
</ul>
<p><strong>Calculation:</strong></p>
<pre><code>PV = 50,000 / (1 + 0.04)³
PV = 50,000 / 1.124864
PV = 44,449.82 baht</code></pre>
<p><strong>✅ Answer: 44,449.82 baht</strong></p>
</div>
</details>



### Question 3: Future Value
How much will 10,000 baht grow to in 3 years if the interest rate is 6%?

<details>
<summary>💡 Click to see solution</summary>
<div class="solution-content">
<p><strong>Formula:</strong></p>
<pre><code>FV = PV(1 + r)ᵗ</code></pre>
<p><strong>Given:</strong></p>
<ul>
<li>PV = 10,000 baht</li>
<li>r = 6% = 0.06</li>
<li>t = 3 years</li>
</ul>
<p><strong>Calculation:</strong></p>
<pre><code>FV = 10,000(1 + 0.06)³
FV = 10,000(1.191016)
FV = 11,910.16 baht</code></pre>
<p><strong>✅ Answer: 11,910.16 baht</strong></p>
</div>
</details>



### Question 4: Future Value (Long-Term)
You invest 50,000 baht at 8% compounded annually. How much will you have after 5 years?


<details>
<summary>💡 Click to see solution</summary>
<div class="solution-content">
<p><strong>Formula:</strong></p>
<pre><code>FV = PV(1 + r)ᵗ</code></pre>
<p><strong>Given:</strong></p>
<ul>
<li>PV = 50,000 baht</li>
<li>r = 8% = 0.08</li>
<li>t = 5 years</li>
</ul>
<p><strong>Calculation:</strong></p>
<pre><code>FV = 50,000(1 + 0.08)⁵
FV = 50,000(1.469328)
FV = 73,466.40 baht</code></pre>
<p><strong>✅ Answer: 73,466.40 baht</strong></p>
</div>
</details>



### Question 5: Present Value for Goal
An investor wants 200,000 baht in 4 years. If the interest rate is 6%, how much must they deposit today?


<details>
<summary>💡 Click to see solution</summary>
<div class="solution-content">
<p><strong>Formula:</strong></p>
<pre><code>PV = FV / (1 + r)ᵗ</code></pre>
<p><strong>Given:</strong></p>
<ul>
<li>FV = 200,000 baht (goal)</li>
<li>r = 6% = 0.06</li>
<li>t = 4 years</li>
</ul>
<p><strong>Calculation:</strong></p>
<pre><code>PV = 200,000 / (1 + 0.06)⁴
PV = 200,000 / 1.262477
PV = 158,418.73 baht</code></pre>
<p><strong>✅ Answer: 158,418.73 baht</strong></p>
<p><strong>Interpretation:</strong> Need to deposit 158,418.73 baht today to have 200,000 baht in 4 years at 6% interest.</p>
</div>
</details>



### Question 6: Present Value of Annuity
You will receive 5,000 baht per year for 4 years, discount rate 5%. What is the current value?


<details>
<summary>💡 Click to see solution</summary>
<div class="solution-content">
<p><strong>Formula:</strong></p>
<pre><code>PVA = PMT × [1 - 1/(1 + r)ᵗ] / r</code></pre>
<p><strong>Given:</strong></p>
<ul>
<li>PMT = 5,000 baht per year</li>
<li>r = 5% = 0.05</li>
<li>t = 4 years</li>
</ul>
<p><strong>Step-by-Step Calculation:</strong></p>
<p><strong>Step 1:</strong> Calculate (1 + r)ᵗ</p>
<pre><code>(1 + 0.05)⁴ = 1.215506</code></pre>
<p><strong>Step 2:</strong> Calculate 1/(1 + r)ᵗ</p>
<pre><code>1/1.215506 = 0.822702</code></pre>
<p><strong>Step 3:</strong> Calculate [1 - 1/(1 + r)ᵗ]</p>
<pre><code>1 - 0.822702 = 0.177298</code></pre>
<p><strong>Step 4:</strong> Divide by r</p>
<pre><code>0.177298 / 0.05 = 3.54595</code></pre>
<p><strong>Step 5:</strong> Multiply by PMT</p>
<pre><code>PVA = 5,000 × 3.54595
PVA = 17,729.75 baht</code></pre>
<p><strong>✅ Answer: 17,729.75 baht (Ordinary annuity)</strong></p>
<p><strong>Interpretation:</strong> The current value of receiving 5,000 baht per year for 4 years is 17,729.75 baht.</p>
</div>
</details>



### Question 7: Future Value of Annuity
You save 15,000 baht per year in a retirement fund earning 5%. How much will you have after 10 years?


<details>
<summary>💡 Click to see solution</summary>
<div class="solution-content">
<p><strong>Formula:</strong></p>
<pre><code>FVA = PMT × [(1 + r)ᵗ - 1] / r</code></pre>
<p><strong>Given:</strong></p>
<ul>
<li>PMT = 15,000 baht per year</li>
<li>r = 5% = 0.05</li>
<li>t = 10 years</li>
</ul>
<p><strong>Step-by-Step Calculation:</strong></p>
<p><strong>Step 1:</strong> Calculate (1 + r)ᵗ</p>
<pre><code>(1 + 0.05)¹⁰ = 1.628895</code></pre>
<p><strong>Step 2:</strong> Subtract 1</p>
<pre><code>1.628895 - 1 = 0.628895</code></pre>
<p><strong>Step 3:</strong> Divide by r</p>
<pre><code>0.628895 / 0.05 = 12.577893</code></pre>
<p><strong>Step 4:</strong> Multiply by PMT</p>
<pre><code>FVA = 15,000 × 12.577893
FVA = 188,668.39 baht</code></pre>
<p><strong>✅ Answer: 188,668.39 baht (Ordinary annuity)</strong></p>
<p><strong>Interpretation:</strong> Saving 15,000 baht per year for 10 years at 5% will grow to 188,668.39 baht.</p>
</div>
</details>



### Question 8: Solving for Payment
You want to accumulate 1,000,000 baht in 12 years. You can earn 6% per year, and you will deposit the same amount each year. How much must you deposit each year?


<details>
<summary>💡 Click to see solution</summary>
<div class="solution-content">
<p><strong>Formula:</strong></p>
<pre><code>FVA = PMT × [(1 + r)ᵗ - 1] / r</code></pre>
<p><strong>Rearrange to solve for PMT:</strong></p>
<pre><code>PMT = FVA × r / [(1 + r)ᵗ - 1]</code></pre>
<p><strong>Given:</strong></p>
<ul>
<li>FVA = 1,000,000 baht (goal)</li>
<li>r = 6% = 0.06</li>
<li>t = 12 years</li>
</ul>
<p><strong>Step-by-Step Calculation:</strong></p>
<p><strong>Step 1:</strong> Calculate (1 + r)ᵗ</p>
<pre><code>(1 + 0.06)¹² = 2.012196</code></pre>
<p><strong>Step 2:</strong> Subtract 1</p>
<pre><code>2.012196 - 1 = 1.012196</code></pre>
<p><strong>Step 3:</strong> Multiply FVA by r</p>
<pre><code>1,000,000 × 0.06 = 60,000</code></pre>
<p><strong>Step 4:</strong> Divide</p>
<pre><code>PMT = 60,000 / 1.012196
PMT = 59,277.03 baht</code></pre>
<p><strong>✅ Answer: 59,277.03 baht per year (Ordinary annuity)</strong></p>
<p><strong>Interpretation:</strong> You must deposit 59,277.03 baht each year for 12 years at 6% to accumulate 1,000,000 baht.</p>
</div>
</details>



## Financial Ratio Problems

### Question 9: Basic Liquidity Ratio
You have $9,000 in liquid assets and monthly expenses of $2,500. Calculate your basic liquidity ratio. Is it adequate?


<details>
<summary>💡 Click to see solution</summary>
<div class="solution-content">
<p><strong>Formula:</strong></p>
<pre><code>Basic Liquidity Ratio = Liquid Assets / Monthly Expenses</code></pre>
<p><strong>Given:</strong></p>
<ul>
<li>Liquid Assets = $9,000</li>
<li>Monthly Expenses = $2,500</li>
</ul>
<p><strong>Calculation:</strong></p>
<pre><code>Ratio = $9,000 / $2,500 = 3.6</code></pre>
<p><strong>✅ Answer: 3.6</strong></p>
<p><strong>Benchmark:</strong> ≥ 3.0 (recommended)</p>
<p><strong>Interpretation:</strong></p>
<ul>
<li>✅ **Yes, adequate!** Your ratio of 3.6 exceeds the recommended 3.0</li>
<li>You can survive **3.6 months** without income using only liquid assets</li>
<li>This provides a good emergency fund cushion</li>
</ul>
</div>
</details>



### Question 10: Asset-to-Debt Ratio
Total assets: $75,000. Total liabilities: $45,000. Calculate asset-to-debt ratio. Are you solvent?


<details>
<summary>💡 Click to see solution</summary>
<div class="solution-content">
<p><strong>Formula:</strong></p>
<pre><code>Asset-to-Debt Ratio = Total Assets / Total Liabilities</code></pre>
<p><strong>Given:</strong></p>
<ul>
<li>Total Assets = $75,000</li>
<li>Total Liabilities = $45,000</li>
</ul>
<p><strong>Calculation:</strong></p>
<pre><code>Ratio = $75,000 / $45,000 = 1.67</code></pre>
<p><strong>✅ Answer: 1.67</strong></p>
<p><strong>Benchmark:</strong> > 1.0 (must be greater than 1 to be solvent)</p>
<p><strong>Interpretation:</strong></p>
<ul>
<li>✅ **Yes, you are solvent!** Ratio > 1.0 means you own more than you owe</li>
<li>You own $1.67 for every $1.00 you owe</li>
<li>Net Worth = $75,000 - $45,000 = $30,000 (positive)</li>
</ul>
</div>
</details>



### Question 11: Debt Service-to-Income Ratio
Annual debt payments: $22,000. Gross annual income: $70,000. Calculate debt service-to-income ratio. Is it acceptable?


<details>
<summary>💡 Click to see solution</summary>
<div class="solution-content">
<p><strong>Formula:</strong></p>
<pre><code>Debt Service-to-Income Ratio = Annual Debt Payments / Gross Annual Income</code></pre>
<p><strong>Given:</strong></p>
<ul>
<li>Annual Debt Payments = $22,000</li>
<li>Gross Annual Income = $70,000</li>
</ul>
<p><strong>Calculation:</strong></p>
<pre><code>Ratio = $22,000 / $70,000 = 0.314 = 31.4%</code></pre>
<p><strong>✅ Answer: 0.314 (31.4%)</strong></p>
<p><strong>Benchmark:</strong> ≤ 0.333 (33.3%) recommended</p>
<p><strong>Interpretation:</strong></p>
<ul>
<li>✅ **Yes, acceptable!** Your ratio of 31.4% is below the recommended 33.3%</li>
<li>You spend 31.4% of gross income on debt payments</li>
<li>You have manageable debt levels</li>
<li>Room for additional debt if needed (but not recommended)</li>
</ul>
</div>
</details>



### Question 12: Investment Assets Ratio
You are 35 years old. Investment assets: $25,000. Total assets: $100,000. Calculate the ratio. Is it appropriate for your age?


<details>
<summary>💡 Click to see solution</summary>
<div class="solution-content">
<p><strong>Formula:</strong></p>
<pre><code>Investment Assets-to-Total Assets Ratio = Investment Assets / Total Assets</code></pre>
<p><strong>Given:</strong></p>
<ul>
<li>Age = 35 years old</li>
<li>Investment Assets = $25,000</li>
<li>Total Assets = $100,000</li>
</ul>
<p><strong>Calculation:</strong></p>
<pre><code>Ratio = $25,000 / $100,000 = 0.25 = 25%</code></pre>
<p><strong>✅ Answer: 0.25 (25%)</strong></p>
<p><strong>Benchmark (Age-Based):</strong></p>
<ul>
<li>20s: 10%</li>
<li>**30s: 11-30%** ← Your age group</li>
<li>40s: 30%+</li>
<li>50s+: 50%+</li>
</ul>
<p><strong>Interpretation:</strong></p>
<ul>
<li>✅ **Yes, appropriate for your age!** Your 25% is within the 11-30% range for people in their 30s</li>
<li>You're on track for retirement savings</li>
<li>Consider gradually increasing as you approach your 40s</li>
</ul>
</div>
</details>



## Tax Calculation Problems

### Question 13: Marginal Tax Calculation
Taxable income: $45,000
Tax brackets: 10% ($0-$8,350), 15% ($8,351-$33,950), 25% ($33,951+)
Calculate total tax liability.


<details>
<summary>💡 Click to see solution</summary>
<div class="solution-content">
<p><strong>Given:</strong></p>
<ul>
<li>Taxable Income = $45,000</li>
<li>Tax Brackets:</li>
<li>10% on $0 - $8,350</li>
<li>15% on $8,351 - $33,950</li>
<li>25% on $33,951+</li>
</ul>
<p><strong>Progressive Tax Calculation (Step-by-Step):</strong></p>
<p><strong>Bracket 1:</strong> First $8,350 at 10%</p>
<pre><code>$8,350 × 0.10 = $835.00</code></pre>
<p><strong>Bracket 2:</strong> Next $25,600 at 15% ($33,950 - $8,350)</p>
<pre><code>$25,600 × 0.15 = $3,840.00</code></pre>
<p><strong>Bracket 3:</strong> Remaining $11,050 at 25% ($45,000 - $33,950)</p>
<pre><code>$11,050 × 0.25 = $2,762.50</code></pre>
<p><strong>Total Tax:</strong></p>
<pre><code>$835.00 + $3,840.00 + $2,762.50 = $7,437.50</code></pre>
<p><strong>✅ Answer: $7,437.50</strong></p>
<p><strong>Additional Info:</strong></p>
<ul>
<li>**Marginal Tax Rate:** 25% (last dollar taxed at 25%)</li>
<li>**Average Tax Rate:** $7,437.50 / $45,000 = 16.5%</li>
<li>**NOT:** $45,000 × 0.25 = $11,250 ❌ (This is wrong!)</li>
</ul>
</div>
</details>



### Question 14: Average Tax Rate
Gross income: $55,000. Total taxes paid: $8,250. Calculate average tax rate.


<details>
<summary>💡 Click to see solution</summary>
<div class="solution-content">
<p><strong>Formula:</strong></p>
<pre><code>Average Tax Rate = Total Taxes Paid / Gross Income</code></pre>
<p><strong>Given:</strong></p>
<ul>
<li>Gross Income = $55,000</li>
<li>Total Taxes Paid = $8,250</li>
</ul>
<p><strong>Calculation:</strong></p>
<pre><code>Average Tax Rate = $8,250 / $55,000 = 0.15 = 15%</code></pre>
<p><strong>✅ Answer: 15%</strong></p>
<p><strong>Interpretation:</strong></p>
<ul>
<li>You pay 15% of your total income in taxes</li>
<li>This is your overall tax burden</li>
<li>Average tax rate is always less than marginal tax rate</li>
</ul>
</div>
</details>



### Question 15: Tax Credit vs. Deduction
You're in the 28% marginal tax bracket. Compare:
- Option A: $2,000 tax deduction
- Option B: $2,000 tax credit

Which saves more money?


<details>
<summary>💡 Click to see solution</summary>
<div class="solution-content">
<p><strong>Given:</strong></p>
<ul>
<li>Marginal Tax Rate = 28%</li>
<li>Both options = $2,000</li>
</ul>
<p><strong>Option A: Tax Deduction</strong></p>
<pre><code>Tax Savings = Deduction × Marginal Tax Rate
Tax Savings = $2,000 × 0.28 = $560</code></pre>
<p><strong>Option B: Tax Credit</strong></p>
<pre><code>Tax Savings = Credit Amount (dollar-for-dollar)
Tax Savings = $2,000</code></pre>
<p><strong>Comparison:</strong></p>
<div class="table-wrapper">
<table>
<tr>
<td>Option</td>
<td>Amount</td>
<td>Savings</td>
</tr>
<tr>
<td>A: Deduction</td>
<td>$2,000</td>
<td>$560</td>
</tr>
<tr>
<td>B: Credit</td>
<td>$2,000</td>
<td><strong>$2,000</strong></td>
</tr>
<tr>
<td><strong>Difference</strong></td>
<td></td>
<td><strong>$1,440</strong></td>
</tr>
</table>
</div>
<p><strong>✅ Answer: Option B (Tax Credit) is better!</strong></p>
<p><strong>Key Insight:</strong></p>
<ul>
<li>Credit saves $2,000</li>
<li>Deduction saves only $560</li>
<li>Credit provides **$1,440 more savings**</li>
<li>Tax credits are always better than deductions of the same amount!</li>
</ul>
</div>
</details>



### Question 16: 401(k) Tax Savings
You contribute $5,000 to your 401(k). Your marginal tax rate is 25%. How much do you save in taxes?


<details>
<summary>💡 Click to see solution</summary>
<div class="solution-content">
<p><strong>Formula:</strong></p>
<pre><code>Tax Savings = Contribution × Marginal Tax Rate</code></pre>
<p><strong>Given:</strong></p>
<ul>
<li>401(k) Contribution = $5,000</li>
<li>Marginal Tax Rate = 25% = 0.25</li>
</ul>
<p><strong>Calculation:</strong></p>
<pre><code>Tax Savings = $5,000 × 0.25 = $1,250</code></pre>
<p><strong>✅ Answer: $1,250 in immediate tax savings</strong></p>
<p><strong>Additional Benefits:</strong></p>
<ul>
<li>✅ Your $5,000 grows tax-deferred (no taxes on growth until withdrawal)</li>
<li>✅ Employer may match contributions (free money!)</li>
<li>✅ Reduces taxable income from gross income</li>
<li>✅ Builds retirement savings</li>
</ul>
<p><strong>Example:</strong></p>
<ul>
<li>Without 401(k): Pay taxes on $5,000 = $1,250 in taxes</li>
<li>With 401(k): Save $5,000 + avoid $1,250 in taxes = Win-win!</li>
</ul>
</div>
</details>



## Real vs. Nominal Income Problems

### Question 17: Real Income Change
Current salary: $45,000. New salary: $47,500. Inflation: 3.5%. Calculate real income change.


<details>
<summary>💡 Click to see solution</summary>
<div class="solution-content">
<p><strong>Given:</strong></p>
<ul>
<li>Current Salary = $45,000</li>
<li>New Salary = $47,500</li>
<li>Inflation Rate = 3.5%</li>
</ul>
<p><strong>Step 1: Calculate Nominal Change</strong></p>
<pre><code>Nominal Change % = [(New - Old) / Old] × 100
Nominal Change % = [($47,500 - $45,000) / $45,000] × 100
Nominal Change % = ($2,500 / $45,000) × 100
Nominal Change % = 5.56%</code></pre>
<p><strong>Step 2: Calculate Real Change</strong></p>
<pre><code>Real Change % = Nominal Change % - Inflation %
Real Change % = 5.56% - 3.5%
Real Change % = 2.06%</code></pre>
<p><strong>Step 3: Calculate Real Income in Dollars</strong></p>
<pre><code>Real Income = Old Salary × (1 + Real Change as decimal)
Real Income = $45,000 × (1 + 0.0206)
Real Income = $45,000 × 1.0206
Real Income = $45,927</code></pre>
<p><strong>✅ Answer Summary:</strong></p>
<div class="table-wrapper">
<table>
<tr>
<td>Measure</td>
<td>Amount</td>
</tr>
<tr>
<td>Nominal raise</td>
<td>$2,500</td>
</tr>
<tr>
<td>Real economic progress</td>
<td>$927</td>
</tr>
<tr>
<td>Lost to inflation</td>
<td>$1,573</td>
</tr>
<tr>
<td>Real change percentage</td>
<td>2.06%</td>
</tr>
</table>
</div>
<p><strong>Interpretation:</strong></p>
<ul>
<li>You got a $2,500 raise (5.56%)</li>
<li>But inflation ate $1,573 of it</li>
<li>Your real purchasing power only increased by $927 (2.06%)</li>
</ul>
</div>
</details>



## Budgeting Problems

### Question 18: Net Worth Calculation
Assets: Checking $2,000, Savings $5,000, Car $15,000, House $200,000
Liabilities: Credit card $3,000, Car loan $8,000, Mortgage $150,000
Calculate net worth.


<details>
<summary>💡 Click to see solution</summary>
<div class="solution-content">
<p><strong>Formula:</strong></p>
<pre><code>Net Worth = Total Assets - Total Liabilities</code></pre>
<p><strong>Given Assets:</strong></p>
<ul>
<li>Checking account: $2,000</li>
<li>Savings account: $5,000</li>
<li>Car: $15,000</li>
<li>House: $200,000</li>
</ul>
<p><strong>Given Liabilities:</strong></p>
<ul>
<li>Credit card: $3,000</li>
<li>Car loan: $8,000</li>
<li>Mortgage: $150,000</li>
</ul>
<p><strong>Step 1: Calculate Total Assets</strong></p>
<pre><code>Total Assets = $2,000 + $5,000 + $15,000 + $200,000
Total Assets = $222,000</code></pre>
<p><strong>Breakdown:</strong></p>
<ul>
<li>Monetary assets: $7,000 (checking + savings)</li>
<li>Tangible assets: $15,000 (car)</li>
<li>Investment assets: $200,000 (house)</li>
</ul>
<p><strong>Step 2: Calculate Total Liabilities</strong></p>
<pre><code>Total Liabilities = $3,000 + $8,000 + $150,000
Total Liabilities = $161,000</code></pre>
<p><strong>Breakdown:</strong></p>
<ul>
<li>Short-term: $3,000 (credit card)</li>
<li>Long-term: $158,000 (car loan + mortgage)</li>
</ul>
<p><strong>Step 3: Calculate Net Worth</strong></p>
<pre><code>Net Worth = Assets - Liabilities
Net Worth = $222,000 - $161,000
Net Worth = $61,000</code></pre>
<p><strong>✅ Answer: $61,000</strong></p>
<p><strong>Interpretation:</strong></p>
<ul>
<li>Your true financial wealth is $61,000</li>
<li>You are **solvent** (positive net worth)</li>
<li>Asset-to-debt ratio: $222,000 / $161,000 = 1.38 (good!)</li>
</ul>
</div>
</details>



### Question 19: Cash Flow Surplus/Deficit
Monthly income: $5,000
Fixed expenses: $2,500 (rent, car payment, insurance)
Variable expenses: $1,800 (food, utilities, entertainment)
Calculate surplus or deficit.


<details>
<summary>💡 Click to see solution</summary>
<div class="solution-content">
<p><strong>Formula:</strong></p>
<pre><code>Surplus (Deficit) = Total Income - Total Expenses</code></pre>
<p><strong>Given:</strong></p>
<ul>
<li>Monthly Income = $5,000</li>
<li>Fixed Expenses = $2,500 (rent, car payment, insurance)</li>
<li>Variable Expenses = $1,800 (food, utilities, entertainment)</li>
</ul>
<p><strong>Step 1: Calculate Total Expenses</strong></p>
<pre><code>Total Expenses = Fixed + Variable
Total Expenses = $2,500 + $1,800
Total Expenses = $4,300</code></pre>
<p><strong>Step 2: Calculate Surplus/Deficit</strong></p>
<pre><code>Surplus = Income - Expenses
Surplus = $5,000 - $4,300
Surplus = $700</code></pre>
<p><strong>✅ Answer: $700 surplus (positive cash flow)</strong></p>
<p><strong>What to Do with Surplus:</strong></p>
<p>1. ✅ Build emergency fund (if < 3 months expenses)</p>
<p>2. ✅ Pay down high-interest debt</p>
<p>3. ✅ Invest in retirement account (401k, IRA)</p>
<p>4. ✅ Save for specific goals</p>
<p>5. ✅ Invest in taxable accounts</p>
<p><strong>Budget Breakdown:</strong></p>
<ul>
<li>Income: 100%</li>
<li>Fixed expenses: 50% (reasonable)</li>
<li>Variable expenses: 36% (good)</li>
<li>Surplus: 14% (excellent savings rate!)</li>
</ul>
</div>
</details>



## Rule of 72 Problems

### Question 20: Doubling Time
You invest at 9% annual return. How long until your money doubles?


<details>
<summary>💡 Click to see solution</summary>
<div class="solution-content">
<p><strong>Formula (Rule of 72):</strong></p>
<pre><code>Years to Double = 72 / Interest Rate</code></pre>
<p><strong>Given:</strong></p>
<ul>
<li>Interest Rate = 9%</li>
</ul>
<p><strong>Calculation:</strong></p>
<pre><code>Years = 72 / 9 = 8 years</code></pre>
<p><strong>✅ Answer: 8 years</strong></p>
<p><strong>Interpretation:</strong></p>
<ul>
<li>At 9% annual return, your investment will double in 8 years</li>
<li>$1,000 → $2,000 in 8 years</li>
<li>$10,000 → $20,000 in 8 years</li>
<li>This is a quick mental calculation (actual: 8.04 years)</li>
</ul>
<p><strong>Verification (using FV formula):</strong></p>
<pre><code>FV = PV(1 + r)ᵗ
$2,000 = $1,000(1.09)⁸
$2,000 = $1,000(1.9926)
$2,000 ≈ $1,993 ✓ (close!)</code></pre>
</div>
</details>



### Question 21: Required Return
You want to double your money in 6 years. What return do you need?


<details>
<summary>💡 Click to see solution</summary>
<div class="solution-content">
<p><strong>Formula (Rule of 72 - Rearranged):</strong></p>
<pre><code>Interest Rate = 72 / Years to Double</code></pre>
<p><strong>Given:</strong></p>
<ul>
<li>Desired time to double = 6 years</li>
</ul>
<p><strong>Calculation:</strong></p>
<pre><code>Rate = 72 / 6 = 12%</code></pre>
<p><strong>✅ Answer: 12% annual return needed</strong></p>
<p><strong>Interpretation:</strong></p>
<ul>
<li>You need a 12% annual return to double your money in 6 years</li>
<li>This is relatively high - stock market averages ~10% long-term</li>
<li>Higher returns usually mean higher risk</li>
</ul>
<p><strong>Examples at 12%:</strong></p>
<ul>
<li>$5,000 → $10,000 in 6 years</li>
<li>$25,000 → $50,000 in 6 years</li>
<li>$100,000 → $200,000 in 6 years</li>
</ul>
<p><strong>Verification (using FV formula):</strong></p>
<pre><code>FV = PV(1 + r)ᵗ
$2,000 = $1,000(1.12)⁶
$2,000 = $1,000(1.9738)
$2,000 ≈ $1,974 ✓ (close!)</code></pre>
</div>
</details>



## Exam Tips for Practice

- ✅ **Show your work** - partial credit possible
- ✅ **Use correct formulas** - write them down first
- ✅ **Check units** - annual vs. monthly, percentages vs. decimals
- ✅ **Round appropriately** - usually 2 decimal places for money
- ✅ **Label your answers** - include units (%, $, years)
- ✅ **Double-check calculations** - use calculator carefully
- ✅ **Read carefully** - is it asking for PV or FV? Annual or monthly?



[← Previous: Tax Management](08-Tax-Management.md) | [Back to Home](README.md) | [Next: Quick Reference →](Quick-Reference.md)
