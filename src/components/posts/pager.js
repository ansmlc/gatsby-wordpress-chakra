import React from "react"
import { Link  } from "gatsby"
import { Stack } from "@chakra-ui/react"
import PrimaryButton from "../buttons/primaryButton"


const Pager = ({ pageContext, pathPrefix }) => {
const { previousPagePath, nextPagePath } = pageContext
  return (
    <Stack marginY="8" direction={{ base: "column", md: "row"}} spacing={4}>
      {previousPagePath && (
        <Link to={`/${previousPagePath}`}>
          <PrimaryButton width="100%" d="block" arrowLeft>Previous page</PrimaryButton>
        </Link>
      )}
      {nextPagePath && (
        <Link to={`/${nextPagePath}`}>
          <PrimaryButton arrowRight>Next page</PrimaryButton>
        </Link>
      )}
    </Stack>
  )
}
export default Pager

