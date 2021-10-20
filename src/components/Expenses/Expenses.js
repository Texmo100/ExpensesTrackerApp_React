import React, { useState } from 'react'

import ExpensesChart from './ExpensesChart'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import './Expenses.css'

const Expenses = props => {
    // useState variables
    const [filteredYear, setFilteredYear] = useState('2021')

    // filterChangeHandler function to handle the select action
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    // filteredExpenses that contains the filtered expenses list
    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear)


    return (
        <div className='expenses'>
            {/* Expenses filter */}
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />

            {/* Expenses chart */}
            <ExpensesChart expenses={filteredExpenses}/>

            {/* Expenses list */}
            <ExpensesList items={filteredExpenses}/>
        </div>
    )
}

export default Expenses