import React from "react"
import "../style.css"
import Appbar from "../components/Appbar"
import { graphql } from "gatsby"
import Card from "../components/Card"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer"

function Projects({ data }) {
  const projectList = data.allProjectsYaml.edges

  return (
    <div className="container-fluid">
      <Appbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects | John</title>
      </Helmet>
      <div className="row">
        {projectList.map(({ node }) => {
          return (
            <Card
              cardTitle={node.title}
              cardSubtitle={node.subtitle}
              link={node.link}
              url={node.url}
              key={node.id}
            />
          )
        })}
      </div>
      <div className="fixed-bottom">
        <Footer />
      </div>
    </div>
  )
}

export default Projects

export const query = graphql`
  {
    allProjectsYaml {
      edges {
        node {
          title
          subtitle
          link
          url
          id
        }
      }
    }
  }
`
