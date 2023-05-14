import React from "react"
import PropTypes from "prop-types"
import style from "./Display.module.css"

const Display = ({ num }) => {
  return (
    <div className={style.displayContainer}>
      <span>{num}</span>
    </div>
  )
}

Display.propTypes = {
  num: PropTypes.string,
}

Display.defaultProps = {
  num: "0",
}

export default Display
