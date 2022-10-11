import React,{ useState } from "react";


import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
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
         <ExpensesList items={filteredExpense}/>
        </Card>
        </div>
    )
}
export default Expenses;