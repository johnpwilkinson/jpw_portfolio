import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import Info2 from "../components/info2"
import { Helmet } from "react-helmet"
import Footer from "../components/footer"

function index() {
  return (
    <div>
      <Appbar />
      <Info2 />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | John</title>
      </Helmet>
    </div>
  )
}

export default index
