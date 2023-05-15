import React from "react"
// import PropTypes from "prop-types"
import style from "./Calculator.module.css"
import Display from "../components/Display/Display"
import NumberButton from "../components/NumberButton/NumberButton"

// label, backgroundColor, textColor, onClick

const Calculator = () => {
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
  return (
    <div className={style.calculatorContainer}>
      <Display num="0" />
      <div className={style.buttonContainer}>
        <NumberButton />
      </div>
    </div>
  )
}

export default Calculator
