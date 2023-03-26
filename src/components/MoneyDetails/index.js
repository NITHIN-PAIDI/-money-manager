import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="bankcards-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          alt="balance"
          className="logo"
        />
        <div className="description-container">
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs.{balance}</p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="logo"
        />
        <div className="description-container">
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs.{income}</p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="logo"
        />
        <div className="description-container">
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs.{expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
