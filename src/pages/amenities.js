import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import TitleComponant from "../components/titlecomponent"
import AmenitiesComponent from '../components/amenitiescomponant'

const Overview = () => {
  return (
    <Layout>
      <SEO title="Prestige Amenities | Facilities" />
      <SEO title="Prestige Waterford Gallery" />
      <div style={{ paddingTop: "13vh", textAlign: "center" }}>
        <AmenitiesComponent/>
        <hr />
      </div>
    </Layout>
  )
}

export default Overview
