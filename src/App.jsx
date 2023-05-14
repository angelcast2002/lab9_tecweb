import React from "react"
import { StoreContext } from "storeon/react"
// eslint-disable-next-line import/no-unresolved
import store from "@store"
import "./App.css"
// eslint-disable-next-line import/no-unresolved
import Page from "@pages"

function App() {
  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <Page />
      </div>
    </StoreContext.Provider>
  )
}

export default App
