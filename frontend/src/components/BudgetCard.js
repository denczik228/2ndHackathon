import { Button, Card, ProgressBar, Stack } from "react-bootstrap"
import { currencyFormatter } from "../utilities"

export default function BudgetCard({
  name,
  amount,
  max,
  gray,
  hideButtons,
  onAddExpenseClick,
  onViewExpensesClick,
}) {
  const classNames = []
  //if expense amount is higher than maximum amount, set card background to red
  if (amount > max) {
    // classNames.push("bg-warning", "bg-opacity-75")
    classNames.push("bg-opacity-75")
    //otherwise set card background to gray
  } else if (gray) {
    classNames.push("bg-light")
  }

  return (
    // <Card className={classNames.join(" ")}>
    <Card className={`${classNames.join(" ")} cardColor`} >
      {/* <Card.Body className='border border-primary'> */}
      <Card.Body className={`border border-primary cardColor`}>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2">{name}</div>
          <div className="d-flex align-items-baseline">
            {currencyFormatter.format(amount)}
            {max && (
              // sets NIS currency
              <span className="text-muted fs-6 ms-1">
                / {currencyFormatter.format(max)}
              </span>
            )}
          </div>
        </Card.Title>
        {max && (
          <ProgressBar 
            className="rounded-pill"
            // variant = color
            variant={getProgressBarVariant(amount, max)}
            min={0}
            max={max}
            now={amount}
            label={`${Math.ceil((amount/max)*100)}%`}
          />
        )}
        {!hideButtons && (
          <Stack direction="horizontal" gap="2" className="mt-4">
            <Button
              // variant = color
              variant="outline-dark"
              className="border border-primary ms-auto"
              onClick={onAddExpenseClick}
            >
              Add Expense
            </Button>
             {/* variant = color */}
            <Button className='border border-warning' onClick={onViewExpensesClick} variant="outline-secondary">
              View Expenses
            </Button>
          </Stack>
        )}
      </Card.Body>
    </Card>
  )
}
//set ProgressBar color depending on amount 
function getProgressBarVariant(amount, max) {
  const ratio = amount / max
  //if amount is under 50% set progressBar color to blue
  if (ratio < 0.5) return "primary"
  //if amount is between 50-75% set progressBar color to yellow
  if (ratio < 0.75) return "warning"
  //otherwise set progressBar color red
  return "danger"
}
