import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = props => {
    // State variables
    const [enteredtTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEneteredDate] = useState('')

    // Functions that will be in charge to handle the input event
    const titleChangeHandler = event => {
        const { value } = event.target
        setEnteredTitle(value)
    }

    const amountChangeHandler = event => {
        const { value } = event.target
        setEnteredAmount(value)
    }

    const dateChangeHandler = event => {
        const { value } = event.target
        setEneteredDate(value)
    }

    // Function that will be in charge to handle the submit event
    const submitHandler = event => {
        // this prevents refreshing the page, avoid the normal web behavior and use the behaviour handler provided by React
        event.preventDefault()

        const expenseData = {
            title: enteredtTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        inputCleaner()
    }

    // Function that will be in charge to clean up the state variables
    const inputCleaner = () => {
        setEnteredTitle('')
        setEnteredAmount('')
        setEneteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredtTitle}
                        onChange={titleChangeHandler}
                    />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date' 
                        min='2019-01-01' 
                        max='2022-12-31'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm