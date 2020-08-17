import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import { Link } from "gatsby"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import {css} from '@emotion/core'
import HomeSVG from "../images/svg/home.svg"
import LoaderSVG from "../images/svg/loader.svg"
import ReadingSVG from "../images/svg/reading-library-2.svg"
import SiteVisitSVG from "../images/svg/site-visit.svg"
import PriceSVG from "../images/svg/price.svg"
import AmenitiesSVG from "../images/svg/amenities.svg"
import LocationSVG from "../images/svg/location.svg"
import { FaBars } from "react-icons/fa"

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
})

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = anchor => (
    <div css={main}
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { name: "Home", link: "/"},
          { name: "Overview", link: "/overview"},
          { name: "Configuration", link: "/configuration"},
          { name: "Gallery", link: "/gallery"},
          { name: "MasterPlan", link: "/masterplan"},
          { name: "Amenities", link: "/amenities"},
          { name: "Pricing", link: "/pricing"},
          { name: "Location", link: "/location"},
        ].map((text, index) => (
          <ListItem button key={text}>
          <Link to={text.link}><ListItemText primary={text.name} /></Link>   
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  )

  return (
    <div>
      {["left"].map(anchor => (
        <React.Fragment key={anchor}>
          <FaBars
            onClick={toggleDrawer(anchor, true)}
            style={{ marginLeft: "20px" }}
          />
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  )
}


const main = css`
 ul{
  a{
    text-decoration: none;
    color:black;
    font-size:18px;
    :hover{
      text-decoration: underline;
    }
  }
 }
`