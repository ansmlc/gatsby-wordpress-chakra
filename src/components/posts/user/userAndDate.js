import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Stack, Text, useColorModeValue, Image } from "@chakra-ui/react"

const UserAndDate = ({ user, date }) => {
  return (
    <Stack my={6} direction={'row'} spacing={2} align={'center'}>
      <Image
        borderRadius='brandRadius.avatar'
        boxSize='30px'
        htmlHeight='30px'
        htmlWidth='30px'
        src={user.node.avatar.url}
        alt={'Author'}
      />
      <Stack direction={'column'} spacing={-1} fontSize={'small'}>
        <Link to={"../../author/" + user.node.slug}>
          <Text fontWeight={600} color={useColorModeValue('gray.800', 'gray.100')}>
            {user.node.name}
          </Text>
        </Link>
        <Text color={useColorModeValue('gray.700', 'gray.300')}><time>{date}</time></Text>
      </Stack>
    </Stack>
  )
}

UserAndDate.propTypes = {
    user: PropTypes.object,
  }
  
  UserAndDate.defaultProps = {
    user: ``,
}
  
export default UserAndDate