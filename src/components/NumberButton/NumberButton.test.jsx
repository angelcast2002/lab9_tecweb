import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"

import { vi } from "vitest"
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
    render(<NumberButton label="0" datatestid="NumeberButton" />)

    const element = screen.getByTestId("NumeberButton")
    expect(element).toHaveTextContent("0")
    expect(element.style.alignItems).toBe("flex-start")
  })
  it("Test click", () => {
    const spy = vi.fn()
    const { getByTestId } = render(
      <NumberButton label="1" datatestid="number-button" onClick={spy} />
    )
    const element = getByTestId("number-button")
    fireEvent.click(element)
    expect(spy).toHaveBeenCalled()
  })
})
