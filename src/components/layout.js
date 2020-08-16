/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SideMenu from '../components/sidemenu'
import FooterComponent from '../components/footercomponent'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <SideMenu/>
        <main>{children}</main>
        <FooterComponent/>
        <div style={{boxShadow:"0px 0px 1px 1px rgba(0,0,0,0.01)", padding:"10px", textAlign:"justify", marginTop:"0px", background:"#d3b169", color:"#fff"}}>
            Disclaimer: This site is all about the information on the Prestige  Waterford. Also Do not consider this as an official site. Information in this site might change witout your Prior notice.
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
