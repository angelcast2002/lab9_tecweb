import React from "react"
import { render } from "@testing-library/react"

import Calculator from "./Calculator"

describe("NumberButton Component", () => {
  it("Renders correctly", () => {
    render(<Calculator />)
  })
})
