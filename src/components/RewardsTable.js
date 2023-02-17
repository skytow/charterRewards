import React from 'react'
import './RewardsTable.css';
import { ReactTabulator } from 'react-tabulator'
function RewardsTable({ transactions = [] }) {

    const columns = [
        { title: "Transaction ID", field: "transactionId", hozAlign: "left" },
        { title: "Customer ID", field: "customerId", width: 150 },
        { title: "Product ID", field: "productId", hozAlign: "left" },
        { title: "Price", field: "price", hozAlign: "left" },
        { title: "Month", field: "month", hozAlign: "left" },
        { title: "Points", field: "points", hozAlign: "left" }
    ];


    const options = {
        movableRows:true,
        groupBy:"month"
    };
    const months = Object.keys(transactions);

    console.log('transactions are :', transactions);
    return (
            <ReactTabulator
                data={transactions}
                columns={columns}
                layout={"fitColumns"}
                options={options}
            />
    )
}

export default RewardsTable