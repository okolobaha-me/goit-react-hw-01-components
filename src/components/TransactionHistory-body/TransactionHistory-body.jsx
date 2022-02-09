import PropTypes from 'prop-types';

function TransactionHistoryBody({ transactions }) {
  return (
    <tbody>
      {transactions.map(transaction => (
        <tr key={transaction.id}>
          <td>{`${transaction.type}`}</td>
          <td>{`${transaction.amount}`}</td>
          <td>{`${transaction.currency}`}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TransactionHistoryBody;

TransactionHistoryBody.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
