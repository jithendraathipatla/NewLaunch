import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import Firstcomponant from "../components/highlightcomponant"
import Secondcomponant from "../components/highlightform"
import Titlecomponent from "../components/titlecomponent"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import OverviewComponent from "../components/overviewcomponant"
import Configirationcomponant from "../components/configurationcomponant"
import AmenititesComponant from "../components/amenitiescomponant"

const IndexPage = () => {
  const [isShown, setIsShown] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "prestige-waterford-banner.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 220) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      masterPlan: file(
        relativePath: { eq: "prestige-waterford-masterplan.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 900, maxHeight: 500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }

      floorplanThree: file(relativePath: { eq: "floorplan3.jpeg" }) {
        childImageSharp {
          fixed(width: 1200, height: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Prestige Waterford | ITPL | Brochure" />
      <div
        css={one}
        style={{ maxWidth: `100%`, marginBottom: `1.45rem`, marginTop: `50px` }}
      >
        <Image />
      </div>
      <div css={two}>
        <div css={twoone}>
          <Firstcomponant />
        </div>
        <div css={twotwo}>
          <Secondcomponant />
        </div>
      </div>
      <div style={{ marginTop: "-20px" }}>
        <div style={{ textAlign: "center" }}>
          <Titlecomponent title="About Preigewaterford" />
        </div>
        <div css={overview}>
          <div>
            <Img
              fluid={data.placeholderImage.childImageSharp.fluid}
              alt="Waterford Image"
            />
          </div>
          <div style={{ textAlign: "justify" }}>
            <span>
              Prestige Group presents Prestige Waterford at Whitefield,a
              flourishing suburb of Bangalore. Made by the best of
              extravagances, this milestone will presently wake up at the
              Whitefield.It is an upcoming new residential project located in
              Whitefield Bangalore. And Locations is Pattandur Agrahara,
              Whitefield, Bangalore, Karnataka 560066.It is construction by
              Prestige Group which is one of the top real-estate firms of the
              country with projects spread across the cities of India.It Also
              includes a clubhouse, fully equipped gymnasium, swimming pool,
              multi-purpose hall, 24/7 Security and much more. Prestige
              Waterford comes with smartly designed homes and ample space that
              is utilized to give you more in life. And there will be the best
              International Schools, work places, Quality Health Care
              Facilities, Shopping Malls, Hotels and Restaurants and much more.
              Achievements of Prestige Group which are worth mention below:- i)
              Prestige Group has been commemorated with India’s most trusted
              brand 2015 award at Hotel Leela, ii)Mumbai by IBC Info Media Corp,
              USA, in association with the International brand council. And many
              more Awards.
            </span>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <div>
        <OverviewComponent />
      </div>
      <hr />
      <div>
        <Configirationcomponant />
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <div style={{ textAlign: "center" }}>
          <Titlecomponent title="Waterford Masterplan" />
        </div>
        <Img
          fluid={data.masterPlan.childImageSharp.fluid}
          alt="Waterford Image"
        />
      </div>
      <hr />
      <div>
        <div style={{ textAlign: "center" }}>
          <Titlecomponent title="Floor Plans" />
        </div>
        <div
          css={isShown === true ? floorplansa : floorplans }
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <Img
            fixed={data.floorplanThree.childImageSharp.fixed}
            alt="Waterford Image"
            objectFit="cover"
            objectPosition="50% 50%"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          />
          {isShown === true ? (
            <Link to="/contact" css={knowmore}>
              <button title="Know More" class="prestigecopyabcd">
                Know More
              </button>
            </Link>
          ) : null}
        </div>
      </div>
      <hr/>
      <div>
        <AmenititesComponant />
      </div>
      <hr />
    </Layout>
  )
}

export default IndexPage

const floorplans = css`
  display: block;
  position: relative;
  padding-top: 20px;
  text-align: center;
  img {
    :hover {
      cursor: pointer;
      opacity: 0.2 !important;
    }
  }
`
const floorplansa = css`
  display: block;
  position: relative;
  padding-top: 20px;
  text-align: center;
  img {
    opacity: 0.2 !important;
  }
`

const knowmore = css`
  left: 50%;
  margin-top: 15%;
  position: absolute;
`

const overview = css`
  padding: 0px 40px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 4fr 8fr;
  span {
    line-height: 25px;
    font-size: 18px;
  }
`

const twoone = css`
  background-color: rgba(0, 0, 0, 0.7);
  width: 500px;
  padding: 10px 10px 47px;
  border-radius: 5px;
  text-align: justify;
  margin-left: 25px;
  height: 370px;
`

const twotwo = css`
  margin-right: 25px;
  background-color: rgba(0, 0, 0, 0.81);
  width: 300px;
  height: 330px;
  margin-top: 35px;
`

const one = css`
  position: relative;
`

const two = css`
  position: absolute;
  top: 110px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`
