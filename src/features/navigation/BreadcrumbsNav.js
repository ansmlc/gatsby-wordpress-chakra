import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { BiHomeAlt } from "@react-icons/all-files/bi/BiHomeAlt";
import { HiChevronRight } from "@react-icons/all-files/hi/HiChevronRight"

import {
    Text,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react"

const BreadcrumbsNav = ({ pageContext, data }) => {
    function BreadLink(props) {
        return (
            <BreadcrumbItem
                verticalAlign="top"
                minHeight={'21.05px'}
                {...props}
            >
                <BreadcrumbLink
                    as={Link}
                    to={props.path}
                    key={props.key}
                    aria-current={ props.isactiveitem === 1 ?  'page' : 'false' }
                >
                    {
                        props.isactiveitem === 1 ?
                        <Text 
                            color={'inherit'}
                            maxW={{base: "100px", md: "200px"}} 
                            fontStyle={'italic'}
                            isTruncated
                        >
                            {props.title}
                        </Text>
                        :
                        props.title
                    }
                </BreadcrumbLink>
            </BreadcrumbItem>
        );
    }
    function ListCrumbs() {
        return (
            <Breadcrumb separator={<HiChevronRight color="gray.200"/>}>
                <BreadLink 
                    key="page-front" 
                    path={"/"}
                    title={<BiHomeAlt/>}
                />
                {crumbData.map((item) =>
                    item.isCurrent ?
                        item.crumbs.map((crumb) =>
                            <BreadLink
                                key={crumb.key}
                                path={crumb.path}
                                title={crumb.title}
                                isactiveitem={crumb.isactiveitem}
                            />
                        )
                    :null
                )}
            </Breadcrumb>
        )
    }
    const crumbData = [
        { 
            isCurrent: data?.nodeType?.includes('Page') ? true : false,
            crumbs: [
                {
                    key: "page-single", 
                    path: "#",
                    title: data?.title,
                    isactiveitem: 1
                }
            ]
        },
        { 
            isCurrent: data?.nodeType?.includes('Post') ? true : false,
            crumbs: [
                {
                    key: "page-blog",
                    path: "../../blog",
                    title: "Blog",
                },
                {
                    key: "page-category",
                    path: "../../category/" + data?.categories?.nodes[0]?.slug,
                    title: data?.categories?.nodes[0]?.name
                },
                {
                    key: "single-post",
                    path: "#",
                    title: data?.title,
                    isactiveitem: 1
                },
            ]
        },
        { 
            isCurrent: pageContext?.type === 'blog' ? true : false,
            crumbs: [
                {
                    key: "page-blog",
                    path: "#",
                    title: "Blog",
                    isactiveitem: 1
                }
            ]
        },
        { 
            isCurrent: pageContext?.category ? true : false,
            crumbs: [
                {
                    key: "page-blog",
                    path: "../../blog",
                    title: "Blog",
                },
                {
                    key: "page-category",
                    path: "#",
                    title: pageContext?.category,
                    isactiveitem: 1
                }
            ]
        },
        { 
            isCurrent: pageContext?.tag ? true : false,
            crumbs: [
                {
                    key: "page-blog",
                    path: "../../blog",
                    title: "Blog",
                },
                {
                    key: "page-tag",
                    path: "#",
                    title: pageContext?.tag,
                    isactiveitem: 1
                }
            ]
        },
        { 
            isCurrent: data?.nodeType?.includes('User') ? true : false,
            crumbs: [
                {                    
                    key: "page-author",
                    path: "#",
                    title: data?.name,
                    isactiveitem: 1
                }
            ]
        }
    ]
    return (
        <Box
            fontSize="0.9rem"
            textColor="gray.500"
            marginTop="1"
            marginBottom="5"
        >
          <ListCrumbs/>
        </Box>
    )
}

BreadcrumbsNav.propTypes = {
  pageContext: PropTypes.object,
  data: PropTypes.object
}

export default BreadcrumbsNav
