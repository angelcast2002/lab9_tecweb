import NumberButton from "./NumberButton"

export default {
  title: "Button/NumberButton",
  component: NumberButton,
  tags: ["autodocs"],
  argTypes: {},
}

export const AsNumber = {
  args: {
    label: "0",
    backgroundColor: "#afb0b5",
    textColor: "#444548",
  },
}

export const AsOperator = {
  args: {
    label: "+",
    backgroundColor: "#afb0b5",
    textColor: "#444548",
  },
}
