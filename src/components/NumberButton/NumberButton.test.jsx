import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"

import NumberButton from "./NumberButton"

describe("NumberButton Component", () => {
  it("Renders correctly", () => {
    render(<NumberButton />)
  })
  it("Renders a Number", () => {
    render(<NumberButton label="0" />)

    const element = screen.getByText("0")
    expect(element).toBeInTheDocument()
  })
  it("Renders as flex-start", () => {
    render(<NumberButton label="0" />)

    const element = screen.getByTestId("NumberButton")
    expect(element).toHaveTextContent("0")
    expect(element.style.alignItems).toBe("flex-start")
  })
  it("Renders as center", () => {
    render(<NumberButton label="+" />)

    const element = screen.getByTestId("NumberButton")
    expect(element).toHaveTextContent("+")
    expect(element.style.alignItems).toBe("center")
  })
  it("Renders an Operator", () => {
    render(<NumberButton label="+" />)

    const element = screen.getByText("+")
    expect(element).toBeInTheDocument()
  })
  it("Can be clicked", () => {
    const spy = vi.fn()
    render(<NumberButton onClick={spy} />)

    const element = screen.getByTestId("NumberButton")
    fireEvent.click(element)

    expect(spy).toHaveBeenCalled()
  })
})
