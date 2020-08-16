import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Titleabc from '../components/titlecomponent'
import OverviewComponant from '../components/overviewcomponant'



const Overview = () => {
    return(
        <Layout>
            <SEO title="Prestige waterford overview" />
            
        <div style={{paddingTop:"12vh"}}>
      
            <OverviewComponant/>
          <hr/>
          </div>
        </Layout>
       
    )
}

export default Overview;