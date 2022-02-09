import TransactionHistoryBody from '../TransactionHistory-body/TransactionHistory-body';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ transactionList }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <TransactionHistoryBody transactions={transactionList} />
    </table>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  transactionList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
