import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import TitleComponant from "../components/titlecomponent"
import Img from "gatsby-image/withIEPolyfill"

const Overview = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "prestige-waterford-masterplan.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Prestige Waterford Masterplan" />
      <div style={{ paddingTop: "13vh", textAlign: "center" }}>
      <TitleComponant title="Waterford Gallery" />
      <br />
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="Waterford masterplan"
      />
      </div>
      <hr />
    </Layout>
  )
}

export default Overview
