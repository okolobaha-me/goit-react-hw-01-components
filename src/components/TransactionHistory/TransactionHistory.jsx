import TransactionHistoryBody from './TransactionHistory-body';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ transactionList }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th className={`${s.headLine}`}>Type</th>
          <th className={`${s.headLine}`}>Amount</th>
          <th className={`${s.headLine}`}>Currency</th>
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
