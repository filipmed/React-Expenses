import React,{ useState } from "react";

import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";

const Expenses=(props)=>{
       
    const [filteredYear,setFilteredYear]= useState('2020');
    
   
    const filterChangeHandler=(selectedyear)=>{
    setFilteredYear(selectedyear);
   };
   //function below filters years depending on user choice
   const filteredExpense=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })
    
  return(
        <div>

        <Card className="Expenses">
        <ExpensesFilter selected = {filteredYear} onChangeFilter={filterChangeHandler} 
        />
         
          {filteredExpense.map((expense) => (
          <ExpenseItem 
          key={expense.id}
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date}
          />
          ))}
        </Card>
        </div>
    )
}
export default Expenses;