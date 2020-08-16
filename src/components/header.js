import { Link } from "gatsby"
import React from "react"
import Logo from "../images/logo.png"
import HomeSVG from "../images/svg/home.svg"
import LoaderSVG from "../images/svg/loader.svg"
import ReadingSVG from "../images/svg/reading-library-2.svg"
import SiteVisitSVG from "../images/svg/site-visit.svg"
import PriceSVG from "../images/svg/price.svg"
import AmenitiesSVG from "../images/svg/amenities.svg"
import LocationSVG from "../images/svg/location.svg"
import { css } from "@emotion/core"

const Header = () => {
  return (
    <div css={one}>
      <div css={main}>
        <div css={image}>
          <Link to="/">
            <img src={Logo} alt="Waterfprd logo" className="main_logo1" />
          </Link>
        </div>
        <div css={list}>
          <ul>
            <img src={HomeSVG} alt="Home Svg" />
            <li>
              <Link to="/">Home</Link>
            </li>
            <img src={AmenitiesSVG} alt="Home Svg" />{" "}
            <li>
              <Link to="/overview">Overview</Link>
            </li>
            <img src={LoaderSVG} alt="Home Svg" />
            <li>
              <Link to="/configuration">Configuration</Link>
            </li>
            <img src={ReadingSVG} alt="Home Svg" />{" "}
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <img src={SiteVisitSVG} alt="Home Svg" />
            <li>
              <Link to="/masterplan">Master Plan</Link>
            </li>
            <img src={PriceSVG} alt="Home Svg" />{" "}
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <img src={AmenitiesSVG} alt="Home Svg" />
            <li>
              <Link to="/amenities">Amenities</Link>
            </li>
            <img src={LocationSVG} alt="Home Svg" />
            <li css={last}>
              <Link to="/location">Location</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header

const main = css`
  display: flex;
  justify-content: space-between;
`

const one = css`
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 0.1rem;
  z-index: 100;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.09);
  background: #fff;
`

const image = css`
  img {
    width: 76px;
    height: 77px;
    margin-top: 2px;
    padding-left: 15px;
    object-fit: cover;
  }
`

const last = css`
border-right: none !important;
padding-right:0px !important;
`

const list = css`
  ul {
    display: flex;
    list-style-type: none;
    width: 102%;
    padding: 25px 10px;
    li {
      padding-left: 8px;
      border-right: .1px solid #eee;
      padding-right: .5rem
    }
    img {
      padding-left: 25px;
      margin-top: 6px;
      height: 16px;
    }
    a{
      display: block;
      text-decoration: none;
      color: #000;
      text-align: center;
      font-size: 1.3rem;
      font-weight: 490;
      letter-spacing: .025rem;
    }
  }
`
