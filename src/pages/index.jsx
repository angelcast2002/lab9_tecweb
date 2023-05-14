import React from "react"
import { useStoreon } from "storeon/react"
import { routerKey } from "@storeon/router"

const Page = () => {
  const { [routerKey]: route } = useStoreon(routerKey)

  let Component = null
  switch (route.match.page) {
    case "home":
      Component = <h1>Home</h1>
      break
    default:
      Component = <h1>404</h1>
  }

  return <main>{Component}</main>
}

export default Page
