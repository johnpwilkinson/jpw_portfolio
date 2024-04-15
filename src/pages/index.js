import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import Main from "../components/Main"
import { Helmet } from "react-helmet"

function Index() {
  return (
    <div>
      <Appbar />
      <Main />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | John</title>
      </Helmet>
    </div>
  )
}

export default Index
