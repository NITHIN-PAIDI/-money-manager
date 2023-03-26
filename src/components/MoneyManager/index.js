import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
class MoneyManager extends Component {
  state = {
    transactionDetailsList: [],
    title: '',
    type: 'Income',
    amount: 0,
    balance: 0,
    income: 0,
    expenses: 0,
  }

  deleteTransaction = (id, type, amount) => {
    const {transactionDetailsList} = this.state
    const filteredlist = transactionDetailsList.filter(each => each.id !== id)
    this.setState({transactionDetailsList: filteredlist})
    if (type === 'Income') {
      this.setState(prevState => ({income: prevState.income - amount}))
    }
    if (type === 'Expenses') {
      this.setState(prevState => ({expenses: prevState.expenses - amount}))
    }
    this.setState(prevState => ({
      balance: prevState.income - prevState.expenses,
    }))
  }

  updateTitle = event => {
    this.setState({title: event.target.value})
  }

  updateAmount = event => {
    this.setState(prevState => ({
      amount: event.target.value,
    }))
  }

  updateType = event => {
    this.setState({type: event.target.value})
  }

  AddTransaction = event => {
    event.preventDefault()
    const {amount, type, title, income, expenses, balance} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      type,
      amount,
    }
    this.setState(prevState => ({
      transactionDetailsList: [
        ...prevState.transactionDetailsList,
        newTransaction,
      ],
    }))

    if (type === 'Income') {
      this.setState(prevState => ({
        income: prevState.income + parseInt(amount),
        amount: 0,
      }))
    }
    if (type === 'Expenses') {
      this.setState(prevState => ({
        expenses: prevState.expenses + parseInt(amount),
        amount: 0,
      }))
    }
    this.setState(prevState => ({
      balance: prevState.income - prevState.expenses,
    }))
  }

  render() {
    const {
      transactionDetailsList,
      title,
      type,
      balance,
      income,
      expenses,
    } = this.state
    console.log(transactionDetailsList)
    return (
      <div className="money-manager-container">
        <div className="name-container">
          <h1>Hi,Richard</h1>
          <p>
            Welcome back to your manager
            <span className="separateelement">Money Mananger</span>
          </p>
        </div>
        <div className="card-container">
          <MoneyDetails balance={balance} income={income} expenses={expenses} />
        </div>
        <div className="bottom-section">
          <div className="add-transation-container">
            <h1>Add Transaction</h1>
            <form className="formEl" onSubmit={this.AddTransaction}>
              <label htmlFor="title">Title</label>
              <input
                placeholder="Title"
                className="input-title"
                id="title"
                onChange={this.updateTitle}
              />
              <label htmlFor="amount">Amount</label>
              <input
                id="amount"
                className="input-title"
                placeholder="Amount"
                onChange={this.updateAmount}
              />
              <label htmlFor="type">Type</label>
              <select
                id="type"
                className="list-options"
                onChange={this.updateType}
              >
                {transactionTypeOptions.map(each => (
                  <option value={each.optionId} className="list-options">
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <div className="transaction-history-container">
            <h1>History</h1>
            <div className="trans-container">
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
            </div>
            <ul className="list-items">
              {transactionDetailsList.map(each => (
                <TransactionItem
                  value={each.optionId}
                  transactionDetails={each}
                  deleteTransaction={this.deleteTransaction}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
