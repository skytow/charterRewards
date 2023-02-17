
import './App.css';
import 'react-tabulator/lib/css/bulma/tabulator_bulma.css';
import {recordSorter, fetchMockTransactions, recordsGroupByCustomer} from './services/transaction.api'
import { useState, useEffect } from 'react'
import RewardsTable from './components/RewardsTable';



function App() {
  const [transactionsByMonth, setTransactionsByMonth] = useState([])


  useEffect(() => {
    fetchMockTransactions()
      .then(r => {
        setTransactionsByMonth(recordsGroupByCustomer(r))
      })
      .catch(error => {
        console.warn(error)
      })

  }, [])




  return <RewardsTable transactions={transactionsByMonth} />;
}

export default App;
