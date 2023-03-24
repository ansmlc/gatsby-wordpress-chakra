import * as React from "react"
import PropTypes from "prop-types"
import Feature from './feature'
import {
    Alert,
    AlertIcon,
} from "@chakra-ui/react"

const Features = ({ featured }) => {
    if (featured && featured.length) {
        const featuredPosts = featured.map((featuredPost, index) =>
            index % 2 ?
                <Feature 
                    key={featuredPost.id}
                    featuredDesc={featuredPost.excerpt}
                    featuredImage={featuredPost.featuredImage?.node?.localFile?.childImageSharp.gatsbyImageData}
                    featuredTitle={featuredPost.title}
                    featuredSlug={featuredPost.slug}
                    txtAlign="left"
                />
            : 
                <Feature 
                    key={featuredPost.id}
                    featuredDesc={featuredPost.excerpt}
                    featuredImage={featuredPost.featuredImage?.node?.localFile?.childImageSharp.gatsbyImageData}
                    featuredTitle={featuredPost.title}
                    featuredSlug={featuredPost.slug}
                    orderBaseTxt={2}
                    orderLgTxt={1}
                    orderBaseImg={1}
                    orderLgImg={2}
                />
        )
        return featuredPosts
    }  
    else  {
        return (
            <Alert 
                margin={'0 auto'}
                mb={'4'}
                justifyContent={'center'} 
                borderRadius="brandRadius.card" 
                boxShadow="xl" 
                status="warning"
                maxW={'lg'}
            >
                <AlertIcon />
                Nothing found. Add some posts to "Featured" category
            </Alert>
        )
    }
}

Features.propTypes = {
    featured: PropTypes.array,
    featuredDesc: PropTypes.string,
    featuredImage: PropTypes.string,
    orderBaseTxt: PropTypes.number,
    orderLgTxt: PropTypes.number,
    orderBaseImg: PropTypes.number,
    orderLgImg: PropTypes.number,
}
  
Features.defaultProps = {
    featured: ``,
    featuredTitle: `Your Title Here`,
    featuredDesc: ``,
    featuredImage: ``,
    orderBaseTxt: 2,
    orderLgTxt: 2,
    orderBaseImg: 1,
    orderLgImg: 1,
}

export default Features
 