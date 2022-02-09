import TransactionHistoryBodyRow from '../TransactionHistory-body-row/TransactionHistory-body-row';
import PropTypes from 'prop-types';
import s from './TransactionHistory-body.module.css';

function TransactionHistoryBody({ transactions }) {
  return (
    <tbody>
      {transactions.map(transaction => (
        <TransactionHistoryBodyRow
          key={transaction.id}
          id={transaction.id}
          currency={transaction.currency}
          amount={transaction.amount}
          type={transaction.type}
        />
      ))}
    </tbody>
  );
}

export default TransactionHistoryBody;

TransactionHistoryBody.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
