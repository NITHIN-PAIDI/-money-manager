import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  console.log(transactionDetails)
  const {id, type, amount, title} = transactionDetails
  const onDelete = () => {
    deleteTransaction(id, type, amount)
  }

  return (
    <div>
      <li className="history-item">
        <p>{title}</p>
        <p>{amount}</p>
        <p>{type}</p>
        <button className="del-button" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="del-logo"
            data-testid="delete"
            onClick={onDelete}
          />
        </button>
      </li>
    </div>
  )
}
export default TransactionItem
