import { useState, useEffect } from "react"
//saves on local storage
export default function useLocalStorage(key, defaultValue) {
  //gets value from local storage
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)
    //checks to see if defaultValue is a function 
    //because useState can handle a value or function
    if (typeof defaultValue === "function") {
      return defaultValue()
    } else {
      return defaultValue
    }
  })
  //to update local storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
