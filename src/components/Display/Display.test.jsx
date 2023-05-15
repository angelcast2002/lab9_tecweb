import React from "react"
import { render, screen } from "@testing-library/react"

import Display from "./Display"

describe("Display Component", () => {
  it("Renders correctly", () => {
    render(<Display />)
  })
  it("Renders a default value", () => {
    render(<Display />)

    const element = screen.getByText("0")
    expect(element).toBeInTheDocument()
  })
  it("Renders a number", () => {
    render(<Display num="0" />)

    const element = screen.getByTestId("number")
    expect(element).toHaveTextContent("0")
    expect(element.style.color).toBe("")
  })
  it("Renders an operator", () => {
    render(<Display num="+" />)

    const element = screen.getByText("+")
    expect(element.style.color).toBe("")
  })
})
