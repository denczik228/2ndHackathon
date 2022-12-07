import { useBudgets } from "../contexts/BudgetsContext"
import BudgetCard from "./BudgetCard"

export default function TotalBudgetCard() {
  const { expenses, budgets } = useBudgets()
  //display total amount
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0)
  //display max budget amount
  const max = budgets.reduce((total, budget) => total + budget.max, 0)
  if (max === 0) return null
  // hideButtons - hides Add Expense and View Expenses buttons on Total card
  return <BudgetCard amount={amount} name="Total" gray max={max} hideButtons />
}
