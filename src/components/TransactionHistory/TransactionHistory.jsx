import PropTypes from 'prop-types';
import { Head, Info, Transaction, BoxTable } from './TransactionHistory.styled';
export default function TransactionHistory({ items }) {
  return (
    <BoxTable>
    <Transaction>
  <thead>
    <tr>
      <Head>Type</Head>
      <Head>Amount</Head>
      <Head>Currency</Head>
    </tr>
  </thead>

  <tbody>
{ items.map(dataTrans => (
    <tr key={dataTrans.id}>
      <Info>{dataTrans.type}</Info>
      <Info>{dataTrans.amount}</Info>
      <Info>{dataTrans.currency}</Info>
    </tr>
))}
  </tbody>
      </Transaction>
      </BoxTable>
  );
}

TransactionHistory.propTypes = {
  
  friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.number,
        currency: PropTypes.string,
    })
  ),
};