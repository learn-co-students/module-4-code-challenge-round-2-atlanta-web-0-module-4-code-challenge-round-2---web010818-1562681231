import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'
const transactionURL = `https://boiling-brook-94902.herokuapp.com/transactions`

class AccountContainer extends Component {

  constructor() {
    super()
    this.state={
      transactions: [],
      searchValue: null,
      results: null
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }

  componentDidMount(){
      fetch(transactionURL)
      .then(res => res.json())
      .then(res => this.setState({
        transactions: res
      }))
  }

  handleChange = (e) => {
    let results = this.state.transactions.filter((transaction) => transaction.description.toLowerCase().includes(e.target.value) || transaction.category.toLowerCase().includes(e.target.value))
    this.setState({
      searchValue: e.target.value,
      results: results
    })
    // your code here
  }


  render() {

    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions} searchResults={this.state.results}/>
      </div>
    )
  }
}

export default AccountContainer
