import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "prestige-waterford-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      placeholderImagemobile: file(
        relativePath: { eq: "prestige-waterford-banner.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 360, maxHeight: 400) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      } 

    }
  `)


  const Floorplansources = [
    data.placeholderImagemobile.childImageSharp.fluid,{
      ...data.placeholderImage.childImageSharp.fluid,
      media: `(min-width:768px)`
    }
  ]

  return <Img fluid={Floorplansources} />
}

export default Image
