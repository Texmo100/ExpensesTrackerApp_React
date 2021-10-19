import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = props => {

    // This function will be in charge to extract the info collected by the ExpenseForm component
    // thus, the data can be send it to the parent component
    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        }

        props.onAddExpense(expenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense