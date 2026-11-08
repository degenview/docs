# Portfolio: transactions and imports

Transactions are the record your portfolio is built from. Add them by hand, or import a CSV file or a CoinMarketCap export.

## Add a transaction

1. Select a portfolio, then click **Add Transaction** in the header.
2. Pick the asset. The picker has **Crypto**, **Stocks** and **Predictions** sections.
3. Choose a type: **Buy**, **Sell**, **Transfer**, **Income** or **Other**. Transfer, Income and Other open a second row of exact types.
4. Fill in **Quantity**, the price, an optional **Fee**, **Date & time** and **Notes**. For a buy or sell you can type either the price per unit or the total. The **Market** button fills in the current price.
5. Click **Add Transaction**.

Enter dates as `YYYY-MM-DD HH:MM`.

![The transaction editor](/images/portfolio/transaction-editor.png)

There are 11 types in all:

| Group | Types |
| --- | --- |
| Buy, Sell | Buy, Sell |
| Transfer | Transfer In, Transfer Out |
| Income | Reward, Staking Reward, Airdrop, Mining, Interest |
| Other | Fee, Adjustment |

A buy or sell needs a price. Transfer Out, Fee and Adjustment carry none. A sell larger than what you held at that date is rejected with **Insufficient holdings at that date**, followed by the amount available.

## Find, edit and delete

The **Transactions** section lists every row. Search by asset, notes or source, narrow it with the **All Types** and **All Assets** filters, and use **Clear** to reset. Choose 25, 50, 100, 250 or 500 rows per page.

![The Transactions section](/images/portfolio/transactions.png)

Use a row's menu for **Edit**, **Duplicate** or **Delete**. Duplicate opens a copy you can adjust. Deleting asks you to confirm, then recalculates holdings, cost basis and history.

## Import and export

Open **Import or Export** in the header.

| Item | What it does |
| --- | --- |
| **Import Transactions…** | Reads a CSV in DegenView's own format |
| **Import from CoinMarketCap…** | Reads a CoinMarketCap export |
| **Export Transactions…** | Saves every transaction as CSV |
| **Export Current Holdings…** | Saves your open positions |
| **Export Portfolio History…** | Saves the daily value history |

![The Import or Export menu](/images/portfolio/import-menu.png)

The easiest way to get the own format is to export first. Each row names its portfolio, and that portfolio must already exist.

### CoinMarketCap import

1. Select the portfolio that should receive the transactions.
2. Choose **Import from CoinMarketCap…** and open the file.
3. On **Match tokens to markets**, check each ticker. Matches are found for you. Use **Match…** for any that say **Not matched**, or leave them to be skipped.
4. Fees paid in a non-dollar currency need a historical exchange rate. DegenView looks it up, and **Skip Item** leaves a row out.
5. Click **Continue to Preview**, review the list, then click **Import N Transactions**.

![The import preview](/images/portfolio/import-preview.png)

Errors in the preview block the import. Warnings do not.

::: warning Windows
Import and export open a file dialog, which DegenView does not have on Windows yet. Use them on macOS or Linux.
:::

See [Statistics, currencies and privacy](/portfolio/statistics) for how transactions turn into cost and profit.
