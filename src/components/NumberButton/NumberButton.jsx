import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import style from "./NumberButton.module.css"

const NumberButton = ({ label, backgroundColor, textColor, onClick }) => {
  const [align, setAlign] = useState("center")
  useEffect(() => {
    if (label === "0") {
      setAlign("flex-start")
    }
  }, [label])
  return (
    <div className={style.numberButtonContainer}>
      <button
        type="button"
        className={style.button}
        onClick={onClick}
        data-testid="NumberButton"
        style={{
          backgroundColor,
          alignItems: align,
        }}
      >
        <span
          data-testid="operator"
          style={{
            textColor,
          }}
        >
          {label}
        </span>
      </button>
    </div>
  )
}

NumberButton.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

NumberButton.defaultProps = {
  label: "",
  backgroundColor: "#fff",
  textColor: "#000",
}

export default NumberButton
