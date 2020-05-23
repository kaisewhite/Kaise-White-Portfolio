import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import layoutStyles from "../css/layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header></Header>
        <div className={layoutStyles.props}>{props.children}</div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Layout
