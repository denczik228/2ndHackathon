import { Button, Stack } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import AddBudgetWindow from "./components/AddBudgetWindow"
import AddExpenseWindow from "./components/AddExpenseWindow"
import ViewExpensesWindow from "./components/ViewExpensesWindow"
import BudgetCard from "./components/BudgetCard"
import UncategorizedBudgetCard from "./components/UncategorizedBudgetCard"
import TotalBudgetCard from "./components/TotalBudgetCard"
import { useState } from "react"
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "./contexts/BudgetsContext"
import React from "react"
import './App.css'
import Login from "./Pages/login/Login";

function Budget() {
    
    const [showAddBudgetWindow, setshowAddBudgetWindow] = useState(false)
    const [showAddExpenseWindow, setShowAddExpenseWindow] = useState(false)
    const [ViewExpensesWindowBudgetId, setViewExpensesWindowBudgetId] = useState()
    const [AddExpenseWindowBudgetId, setAddExpenseWindowBudgetId] = useState()
    const { budgets, getBudgetExpenses } = useBudgets()

    //function returns uncategorized by default
    //opens Expense modal
    function openAddExpenseWindow(budgetId) {
        setShowAddExpenseWindow(true)
        setAddExpenseWindowBudgetId(budgetId)
    }


    // const isLogged = false;

    const [isLogged, setIsLogged] = useState(true)
    const toggleisLogged = () => {
        setIsLogged(!isLogged)
    }

    return(
    <div className='lw'>
        {isLogged ? <>
            <Container className="my-4">
                <Stack direction="horizontal" gap="2" className="mb-4">
                    <h1 className="me-auto text-warning" >My Budget</h1>
                    {/* Add Budget Button and opens Budget modal */}
                    {/* variant = black button */}
                    <Button variant="primary" onClick={() => setshowAddBudgetWindow(true)}>
                        Add Budget
                    </Button>
                    {/* Add Expense Button and opens Expense modal */}
                    {/* variant = grey button */}
                    <Button variant="light" onClick={openAddExpenseWindow}>
                        Add Expense
                    </Button>
                </Stack>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: "1rem",
                        alignItems: "flex-start",
                    }}
                >
                    {/* gets the total of an expense (via same budget id)
          default value is 0 */}
                    {budgets.map(budget => {
                        const amount = getBudgetExpenses(budget.id).reduce(
                            (total, expense) => total + expense.amount,
                            0
                        )
                        return (
                            // creates budget card
                            <BudgetCard
                                key={budget.id}
                                name={budget.name}
                                amount={amount}
                                max={budget.max}
                                onAddExpenseClick={() => openAddExpenseWindow(budget.id)}
                                onViewExpensesClick={() =>
                                    setViewExpensesWindowBudgetId(budget.id)
                                }
                            />
                        )
                    })}
                    {/* creates uncategorized modal */}
                    <UncategorizedBudgetCard
                        onAddExpenseClick={openAddExpenseWindow}
                        onViewExpensesClick={() =>
                            setViewExpensesWindowBudgetId(UNCATEGORIZED_BUDGET_ID)
                        }
                    />
                    {/* creates total budget modal */}
                    <TotalBudgetCard />
                </div>
            </Container>
            {/* add budget modal */}
            <AddBudgetWindow
                show={showAddBudgetWindow}
                handleClose={() => setshowAddBudgetWindow(false)}
            />
            {/* add expense modal */}
            <AddExpenseWindow
                show={showAddExpenseWindow}
                defaultBudgetId={AddExpenseWindowBudgetId}
                handleClose={() => setShowAddExpenseWindow(false)}
            />
            {/* view expense modal */}
            <ViewExpensesWindow
                budgetId={ViewExpensesWindowBudgetId}
                handleClose={() => setViewExpensesWindowBudgetId()}
            />

        </> : <><Login isLoggedHandler={toggleisLogged} /></>}
    </div>
    )
}

export default Budget