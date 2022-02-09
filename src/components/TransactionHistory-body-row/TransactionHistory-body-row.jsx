import PropTypes from 'prop-types';
import s from './TransactionHistory-body-row.module.css';

function TransactionHistoryBodyRow({ id, type, amount, currency }) {
  return (
    <tr key={id} className={`${s.line}`}>
      <td>{`${type}`}</td>
      <td>{`${amount}`}</td>
      <td>{`${currency}`}</td>
    </tr>
  );
}

export default TransactionHistoryBodyRow;

TransactionHistoryBodyRow.propTypes = {
  id: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
