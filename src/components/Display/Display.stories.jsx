import Display from "./Display"

export default {
  title: "Output/Display",
  component: Display,
  tags: ["autodocs"],
  argTypes: {},
}

export const AsClear = {
  args: {
    num: "0",
  },
}

export const AsNumber = {
  args: {
    num: "5",
  },
}

export const AsOperator = {
  args: {
    num: "+",
  },
}
