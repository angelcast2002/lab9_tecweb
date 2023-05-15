import React, { useEffect, useState } from "react"
// import PropTypes from "prop-types"
import style from "./Calculator.module.css"
import Display from "../components/Display/Display"
import NumberButton from "../components/NumberButton/NumberButton"

// label, backgroundColor, textColor, onClick

const Calculator = () => {
  const [num, setNum] = useState("0")
  const [operation, setOperation] = useState([])

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
  const onClick = (e) => {
    switch (e.target.textContent) {
      case "0":
        if (num === "0") {
          break
        } else if (num.length === 9) {
          break
        } else {
          setNum(`${num}0`)
        }
        if (operation.length < 9) {
          setOperation([...operation, "0"])
        }
        break
      case "1":
        if (num === "0") {
          setNum("1")
        } else if (num.length === 9) {
          break
        } else {
          setNum(`${num}1`)
        }
        if (operation.length < 9) {
          setOperation([...operation, "1"])
        }
        break
      case "2":
        if (num === "0") {
          setNum("2")
        } else if (num.length === 9) {
          break
        } else {
          setNum(`${num}2`)
        }
        if (operation.length < 9) {
          setOperation([...operation, "2"])
        }
        break
      case "3":
        if (num === "0") {
          setNum("3")
        } else if (num.length === 9) {
          break
        } else {
          setNum(`${num}3`)
        }
        if (operation.length < 9) {
          setOperation([...operation, "3"])
        }
        break
      case "4":
        if (num === "0") {
          setNum("4")
        } else if (num.length === 9) {
          break
        } else {
          setNum(`${num}4`)
        }
        if (operation.length < 9) {
          setOperation([...operation, "4"])
        }
        break
      case "5":
        if (num === "0") {
          setNum("5")
        } else if (num.length === 9) {
          break
        } else {
          setNum(`${num}5`)
        }
        if (operation.length < 9) {
          setOperation([...operation, "5"])
        }
        break
      case "6":
        if (num === "0") {
          setNum("6")
        } else if (num.length === 9) {
          break
        } else {
          setNum(`${num}6`)
        }
        if (operation.length < 9) {
          setOperation([...operation, "6"])
        }
        break
      case "7":
        if (num === "0") {
          setNum("7")
        } else if (num.length === 9) {
          break
        } else {
          setNum(`${num}7`)
        }
        if (operation.length < 9) {
          setOperation([...operation, "7"])
        }
        break
      case "8":
        if (num === "0") {
          setNum("8")
        } else if (num.length === 9) {
          break
        } else {
          setNum(`${num}8`)
        }
        if (operation.length < 9) {
          setOperation([...operation, "8"])
        }
        break
      case "9":
        if (num === "0") {
          setNum("9")
        } else if (num.length === 9) {
          break
        } else {
          setNum(`${num}9`)
        }
        if (operation.length < 9) {
          setOperation([...operation, "9"])
        }
        break
      default:
    }
  }

  useEffect(() => {
    console.log(num)
  }, [num])

  useEffect(() => {
    console.log(operation)
  }, [operation])

  return (
    <div className={style.calculatorContainer}>
      <div className={style.displayContainer}>
        <Display num={num} />
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
