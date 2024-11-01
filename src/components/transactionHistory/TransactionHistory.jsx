import clsx from "clsx";
import css from "./TransactionHistory.module.css";
import transactions from "../../transactions.json"

const TransactionHistory = (type, amount, currency) => {
	return (

		<table>
		<thead>
			<tr>
			<th>Type</th>
			<th>Amount</th>
			<th>Currency</th>
			</tr>
		</thead>

		<tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
		</table>



  );
};

export default TransactionHistory;