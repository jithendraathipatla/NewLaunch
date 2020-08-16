import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import TitleComponant from "../components/titlecomponent"
import Callusback from '../images/svg/call-back.svg'

const Overview = () => {
  return (
    <Layout>
      <SEO title="Prestige Waterford Contact" />
      <div style={{ paddingTop: "13vh", textAlign: "centr" }}>
        <div style={{ textAlign: "center" }}>
          <TitleComponant title="Contact" />
          <div>
            <h2>Want Detailed Information?</h2>
            <br/>
            <div
              style={{
                width: "100%",
                background: "linear-gradient(101deg, #d4af37, #000)",
                color: "white",
                textAlign: "center",
                padding: "10px 0px",
              }}
            >
              <a href="tel:7013724071">
                <img
                  src={Callusback}
                  style={{ maringLeft: "10px" }}
                  alt="call back"
                />{" "}
                <span style={{ color: "white" }}>7013724071</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </Layout>
  )
}

export default Overview
