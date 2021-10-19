import React, { useState } from 'react'
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'

const Expenses = ({ items }) => {
    // useState variables
    const [filteredYear, setFilteredYear] = useState('2020')

    // filterChangeHandler function to handle the select action
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
        console.log(filteredYear)
    }

    return (
        <div className='expenses'>
            {/* Expenses filter */}
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

            {/* Expenses list */}
            <ExpenseItem
                title={items[0].title}
                amount={items[0].amount}
                date={items[0].date}
            />

            <ExpenseItem
                title={items[1].title}
                amount={items[1].amount}
                date={items[1].date}
            />

            <ExpenseItem
                title={items[2].title}
                amount={items[2].amount}
                date={items[2].date}
            />

            <ExpenseItem
                title={items[3].title}
                amount={items[3].amount}
                date={items[3].date}
            />
        </div>
    )
}

export default Expenses