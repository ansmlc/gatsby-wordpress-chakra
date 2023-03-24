import React from "react"
import { Link } from "gatsby" 
import PrimaryButton from "../buttons/primaryButton"
import PropTypes from "prop-types"
import { Stack } from "@chakra-ui/react"

const NextAndPreviousPost = ({ previousPostSlug, nextPostSlug }) => {
    return (
        <Stack 
            justify={{ base: "start", sm: "center"}} 
            marginY="8" 
            direction={{ base: "column", sm: "row" }} 
            spacing={4}
        >
            <Link to={"../../post/" + previousPostSlug}>
                <PrimaryButton arrowLeft>
                    Previous post
                </PrimaryButton>
            </Link>
            <Link to={"../../post/" + nextPostSlug}>
                <PrimaryButton arrowRight>
                    Next post
                </PrimaryButton>
            </Link>
        </Stack> 
    )
}

NextAndPreviousPost.propTypes = {
    previousPostSlug: PropTypes.string,
    nextPostSlug: PropTypes.string,
}
  
NextAndPreviousPost.defaultProps = {
    previousPostSlug: `../../`,
    nextPostSlug: `../../`,
}
  
export default NextAndPreviousPost
