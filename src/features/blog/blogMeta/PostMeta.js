import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Stack, Text, useColorModeValue, Image } from "@chakra-ui/react"

const PostMeta = ({ authorData, datePublished }) => {
  return (
    <Stack my={6} direction={'row'} spacing={2} align={'center'}>
      <Image
        borderRadius='brandRadius.avatar'
        boxSize='30px'
        htmlHeight='30px'
        htmlWidth='30px'
        src={authorData.node.avatar.url}
        alt={'Author'}
      />
      <Stack direction={'column'} spacing={-1} fontSize={'small'}>
        <Link to={"../../author/" + authorData.node.slug}>
          <Text fontWeight={600} color={useColorModeValue('gray.800', 'gray.100')}>
            {authorData.node.name}
          </Text>
        </Link>
        <Text color={useColorModeValue('gray.700', 'gray.300')}><time>{datePublished}</time></Text>
      </Stack>
    </Stack>
  )
}

PostMeta.propTypes = {
    authorData: PropTypes.object,
  }
  
  PostMeta.defaultProps = {
    authorData: ``,
}
  
export default PostMeta