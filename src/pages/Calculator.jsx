import React, { useState } from "react"
// import PropTypes from "prop-types"
import style from "./Calculator.module.css"
import Display from "../components/Display/Display"
import NumberButton from "../components/NumberButton/NumberButton"

// label, backgroundColor, textColor, onClick

const Calculator = () => {
  const [num, setNum] = useState("0")
  const [num2, setNum2] = useState("")
  const [operator, setOperator] = useState("")
  const [numToUse, setNumToUse] = useState("1")

  // Debug
  // useEffect(() => {
  console.log("NumToUse: ", numToUse)
  // }, [numToUse])

  // useEffect(() => {
  console.log("Operator: ", operator)
  // }, [operator])

  // useEffect(() => {
  console.log("Num: ", num)
  // }, [num])

  // useEffect(() => {
  console.log("Num2: ", num2)
  // }, [num2])

  const labelsNumberButton = [
    "C",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ]

  const handleNumber = (number) => {
    if (operator.length === 0) {
      setNumToUse("1")
      if (num.length === 0) {
        setNum(number)
      } else if (num.length > 0 && num.length < 9) {
        if (num === "0") {
          setNum(number)
        } else {
          setNum(num + number)
        }
      }
    } else if (num2.length === 0) {
      setNumToUse("2")
      setNum2(number)
    } else if (num2.length > 0 && num2.length < 9) {
      if (num2 === "0") {
        setNum2(number)
      } else {
        setNum2(num2 + number)
      }
    }
  }

  const handleOperation = (e) => {
    let result = ""
    let decimales = 0
    switch (e) {
      case "+":
        if (num2.length === 0) {
          setNum(num)
        } else {
          result = `${parseFloat(num, 10) + parseFloat(num2, 10)}`
          if (result.length < 10) {
            setNum(result)
          } else {
            setNum("Error")
          }
          setNum2("")
          setNumToUse("1")
          setOperator("")
        }
        break
      case "=":
        if (num2.length === 0) {
          setNum(num)
          break
        } else {
          result = `${parseFloat(num, 10) + parseFloat(num2, 10)}`
          if (result.length < 10) {
            setNum(result)
          } else {
            setNum("Error")
          }
        }

        setNum2("")
        setNumToUse("1")
        setOperator("")
        break
      case "-":
        if (num2.length === 0) {
          setNum(num)
        } else {
          result = `${parseFloat(num, 10) - parseFloat(num2, 10)}`
          if (result.length < 10) {
            setNum(result)
          } else {
            setNum("Error")
          }
          setNum2("")
          setNumToUse("1")
          setOperator("")
        }
        break
      case "x":
        if (num2.length === 0) {
          setNum(num)
        } else {
          result = `${parseFloat(num, 10) * parseFloat(num2, 10)}`
          if (result.length < 10) {
            setNum(result)
          } else {
            setNum("Error")
          }
          setNum2("")
          setNumToUse("1")
          setOperator("")
        }
        break
      case "/":
        if (num2.length === 0) {
          setNum(num)
        } else {
          result = `${parseFloat(num, 10) / parseFloat(num2, 10)}`
          decimales = `${result.split(".")[0]}`
          result = `${(parseFloat(num, 10) / parseFloat(num2, 10)).toFixed(
            8 - decimales.length
          )}`
          if (result.length < 10) {
            setNum(result)
          } else {
            setNum("Error")
          }
          setNum2("")
          setNumToUse("1")
          setOperator("")
        }
        break
      case "%":
        if (num2.length === 0) {
          setNum(num)
        } else {
          result = `${parseFloat(num, 10) % parseFloat(num2, 10)}`
          if (result.length < 10) {
            setNum(result)
          } else {
            setNum("Error")
          }
          setNum2("")
          setNumToUse("1")
          setOperator("")
        }
        break
      default:
        setNum("Error")
    }
  }

  const handleOperator = (e) => {
    if (operator.length === 0) {
      setOperator(e)
    } else {
      handleOperation(operator)
      if (e !== "=") {
        setOperator(e)
      }
    }
  }

  const onClick = (e) => {
    switch (e.target.textContent) {
      case "0":
        handleNumber("0")
        break
      case "1":
        handleNumber("1")
        break
      case "2":
        handleNumber("2")
        break
      case "3":
        handleNumber("3")
        break
      case "4":
        handleNumber("4")
        break
      case "5":
        handleNumber("5")
        break
      case "6":
        handleNumber("6")
        break
      case "7":
        handleNumber("7")
        break
      case "8":
        handleNumber("8")
        break
      case "9":
        handleNumber("9")
        break
      case "C":
        setNum("0")
        setNum2("")
        setOperator("")
        setNumToUse("1")
        break
      case "+":
        handleOperator("+")
        break
      case "=":
        handleOperator("=")
        break
      case "-":
        handleOperator("-")
        break
      case "x":
        handleOperator("x")
        break
      case "/":
        handleOperator("/")
        break
      case "+/-":
        if (numToUse === "1" && num.length >= 1 && num.length < 9) {
          if (num[0] === "-") {
            setNum(num.slice(1))
          } else {
            setNum(`-${num}`)
          }
        } else if (numToUse === "2" && num2.length > 0 && num2.length < 9) {
          if (num2[0] === "-") {
            setNum2(num2.slice(1))
          } else {
            setNum2(`-${num2}`)
          }
        }
        break
      case ".":
        if (numToUse === "1" && num.length < 8 && num.indexOf(".") === -1) {
          setNum(`${num}.`)
        } else if (
          numToUse === "2" &&
          num2.length < 8 &&
          num2.length > 1 &&
          num2.indexOf(".") === -1
        ) {
          setNum2(`${num2}.`)
        } else if (
          numToUse === "1" &&
          num2.length === 0 &&
          num2.indexOf(".") === -1
        ) {
          setNum2("0.")
        }
        break
      case "%":
        handleOperator("%")
        break
      default:
        break
    }
  }

  return (
    <div className={style.calculatorContainer}>
      <div className={style.displayContainer}>
        <Display num={numToUse === "1" ? num : num2} />
      </div>
      <div className={style.buttonContainer}>
        {labelsNumberButton.map((label) => {
          switch (label) {
            case "0":
              return (
                <NumberButton
                  key={label}
                  label={label}
                  onClick={onClick}
                  backgroundColor="#000"
                  width="105px"
                />
              )
            case "C":
              return (
                <NumberButton
                  key={label}
                  label={label}
                  onClick={onClick}
                  backgroundColor="#3F3F3F"
                  width="50px"
                />
              )
            case "+/-":
              return (
                <NumberButton
                  key={label}
                  label={label}
                  onClick={onClick}
                  backgroundColor="#3F3F3F"
                  width="50px"
                />
              )
            case "%":
              return (
                <NumberButton
                  key={label}
                  label={label}
                  onClick={onClick}
                  backgroundColor="#3F3F3F"
                  width="50px"
                />
              )
            case "/":
              return (
                <NumberButton
                  key={label}
                  label={label}
                  onClick={onClick}
                  backgroundColor="#FF7A4C"
                  width="50px"
                />
              )
            case "x":
              return (
                <NumberButton
                  key={label}
                  label={label}
                  onClick={onClick}
                  backgroundColor="#FF7A4C"
                  width="50px"
                />
              )
            case "+":
              return (
                <NumberButton
                  key={label}
                  label={label}
                  onClick={onClick}
                  backgroundColor="#FF7A4C"
                  width="50px"
                />
              )
            case "=":
              return (
                <NumberButton
                  key={label}
                  label={label}
                  onClick={onClick}
                  backgroundColor="#FF7A4C"
                  width="50px"
                />
              )
            case "-":
              return (
                <NumberButton
                  key={label}
                  label={label}
                  onClick={onClick}
                  backgroundColor="#FF4B4B"
                  width="50px"
                />
              )
            default:
              return (
                <NumberButton
                  key={label}
                  label={label}
                  onClick={onClick}
                  backgroundColor="#000"
                  width="50px"
                />
              )
          }
        })}
      </div>
    </div>
  )
}

export default Calculator
