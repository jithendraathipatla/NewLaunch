import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ConfigurationComponant from "../components/configurationcomponant"

const Overview = () => {
  return (
    <Layout>
      <SEO title="Prestige Configuration | Best Offers" />

      <div style={{ paddingTop: "13vh" }}>
        <ConfigurationComponant />
        <hr />
      </div>
    </Layout>
  )
}

export default Overview
