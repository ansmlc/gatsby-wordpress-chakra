import { extendTheme } from "@chakra-ui/react"

const Heading = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
  },
}

const theme = extendTheme({
  components: {
    Heading,
  },
  // Default color mode
  initialColorMode: "light",
  useSystemColorMode: false,
  // Customize border radius
  radii: {
    brandRadius: {
      card: '1rem',
      image: '1rem',
      button: '9999px',
      avatar: '9999px',
      badge: '0.375rem',
    }
  },
  // Customize default fonts
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  // Customize brand colors
  colors: {
    brand: {
      50: '#F7D6D6', 
      100: '#F4C5C5', 
      200: '#EDA2A2', 
      300: '#E68080', 
      400: '#E05E5E', 
      500: '#D93C3C', 
      600: '#B92424', 
      700: '#8A1B1B', 
      800: '#5B1212', 
      900: '#2C0909'
    },
    secondary: {
      50: '#E2F6FF',
      100: '#CDF0FF',
      200: '#A4E4FF',
      300: '#7CD8FF',
      400: '#53CBFF',
      500: '#2ABFFF',
      600: '#00A9F1',
      700: '#0081B9',
      800: '#005A81',
      900: '#003349',
    },
    gray: {
      50: '#F4F5F6', 
      100: '#E9EBEE', 
      200: '#D2D7DC', 
      300: '#BBC2CA', 
      400: '#A4AEB8', 
      500: '#8D99A6', 
      600: '#6E7D8D', 
      700: '#55616D', 
      800: '#3D454E', 
      900: '#24292E'
    },
  },
  styles: {
    global: (props) => ({
      // Style content field in postTemplate.js & pageTemplate.js
      ".wysiwyg": {
        ".blocks-gallery-item__caption": {
          borderRadius: "xl",
        },
        ".gatsby-image-wrapper": {
          marginBottom: "6"
        },
        ".blocks-gallery-grid": {
          ml: '0',
          my: '2',
          ".gatsby-image-wrapper": {
            marginBottom: 0
          }
        },
        img: {
          borderRadius: "xl"
        },
        a: { 
          color: "secondary.500",
          textDecoration: "underline"
        },
      },
      ".mailchimpMessage": {
        a: {
          textDecoration: "underline",
          color: "secondary.600"
        }
      },
      // image radius fix for iOS 
      ".chakra-image": {
        img: {
          borderRadius: "brandRadius.image",
          borderBottomRadius: "0"
        }
      },
      body: {
        backgroundColor: props.colorMode === "dark" ? "gray.800" : "gray.50",
      },
      p: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.800",
      },
      ol: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.800",
      },
      ul: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.800", 
      },
      h1: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.800",
      },
      h2: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.800",
      },
      h3: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.800",
      },
      h4: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.800",
      },
      h5: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.800",
      },
      blockquote: {
        p: {       
          color: props.colorMode === "dark" ? "gray.50" : "gray.800",
        }
      },
    }),
  },
})


export default extendTheme(theme)

