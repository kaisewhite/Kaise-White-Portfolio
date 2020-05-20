import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = props => {
  return (
    <div>
      <Header></Header>
      <div>{props.children}</div>
      <Footer></Footer>
    </div>
  )
}

export default Layout
