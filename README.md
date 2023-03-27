<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->


<div align="center" style="margin-bottom: 0; max-width: 50%;">

## WPGatsby

#### <img style="margin: auto 0 auto 10px;" alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="16" /> Gatsby   + <img style="margin: auto 0 auto 6px;" alt="WordPress" src="https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" width="16" /> WordPress +  <img style="margin: auto 0 auto 6px;" alt="Chakra-UI" src="https://i.ibb.co/wQRvTPb/chakra-monogram.png" width="16" /> Chakra-UI 



</div>

**How it works:** 

Grabs existing WordPress content and generates an equivalent static page for each post, page, taxonomy, author, etc. 
</br>

**Demo**: https://wpgatsby.dev/ 

**Features**: 


<ul>
    <li>:rocket: Responsive, fast-loading, animated</li>
    <li>:art: Customizable theme with Chakra-UI</li>
    <li>:star: Custom landing page</li>
    <li>:crescent_moon: Dark-mode support</li>
    <li>:love_letter: Built-in newsletter form with MailChimp</li>
    <li>:zap: Minimal WordPress setup</li>
    <li>:page_facing_up: Support for post, page, category, tag and author types</li>
</ul>
</br>

<img  alt="GatsbyPress" src="https://github.com/ansmlc/wpgatsby/blob/master/src/static/images/GatsbyPress.png" width="100%" height="auto" />
</div>

# 🚀 Quick start


1.  **Install.**

    Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)) to create a new site, specifying the wpgatsby starter.

    ```shell
    # Install wp-gatsby:
    gatsby new my-app https://github.com/ansmlc/wpgatsby
    ```


2.  **Configure WordPress.**
    
  * Install and activate these plugins 
    in a live WordPress instance:

      - [WPGraphQL](https://wordpress.org/plugins/wp-graphql/)
      - [WPGatsby](https://wordpress.org/plugins/wp-gatsby/)

    [ℹ️ How-to: Setup Data, Content & Styles](#🚀-Setup-Data-and-Content)

3.  **Configure GraphQL.**

    In `gatsby-config.js` under `gatsby-source-wordpress` point `url` to your WPGraphQL endpoint. E.g. `https://yoursite.com/graphql`

4.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-app/
    gatsby develop
    ```

    Your site is now running in development mode at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. 


## 🧐 Limitations

...

Coming soon

...

## 🧐 What's inside?

A quick look at important files and directories you'll see in this Gatsby project.

    .
    ├── node_modules
    ├── src
        ├── @chakra-ui
        ├── components
        ├── pages
        ├── templates
        ├── static
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

## 💫 Deploy

...

Coming soon

...

# 🚀 Setup Data and Content
How to setup WordPress and other data to work with wp-gatsby:

##  ↘️ **Header & Footer Menu**

    - Add menus titled "GP-HEADER" and "GP-FOOTER"
    - Add some pages to menus

##  ↘️ **Posts & pages**

    - Set permalink settings to "Post name".
    - Add posts with featured images
    - Add tags and categories
    - Add some posts to "featured" category (to show on homepage)

##  ↘️ **Logo & Branding**

### 🟠 **Logo**

Logo can be set in several ways:

1.  **SVG from React component** (default)

    - Put your SVG in `customSvgLogo.js` in `src/components/svgs` 
    - Edit `gatsby-config.js` with the following option:

    ```shell 
    module.exports = {
        siteMetadata: {
            customLogoComponent: true,
        }
    }
    ```
    ⚠️ Set this option to `false` if you wish to use any of the bellow options

2.  **From WP Media Library (JPEG or PNG)**
    - Upload and set image title to `"gp-logo"`.

3.  **From Gatsby's static directory (JPEG, PNG or SVG)**
    - Add logo named `"gp-logo"` to `src/static/images` directory.


4. If no image is found logo will be generated based on WordPress site name.

### 🖌️ **Colors, fonts and styles**

Edit the `theme.js` file to customize variables like
colors, fonts, border-radius and edit global styles of existing components

```shell 
src/@chakra-ui/theme.js
```


##  ↘️ **MailChimp Newsletter**
    
1. **Get the MailChimp endpoint**

    - Go to MailChimp dashboard: `Audience –> Signup Forms –> Embedded Form`
    
    - Generate a form and copy the first URL you see (from the `POST` method)

    - Paste the endpoint URL into gatsby-config.js:

```shell 
    plugins: [
        {
        resolve: "gatsby-plugin-mailchimp",
        options: {
            # example URL
            endpoint: 'https://name.list-manage.com/subscribe/post?u=4754c309a8',
            timeout: 3500,
        },
        },
    ]
```


2. **Paste URL in gatsby-config.js**


## ↘️ **Social Network Icons**

Edit `gatsby-config.js` and add URLs to your social networks:

 ```shell
module.exports = {
  siteMetadata: {
    # Social icons URLs / 
    # If not using leave it empty ( `` ) / Do not delete field
    socialLinks: {
      facebook:  `https://facebook.com`,
      instagram:  `https://instagram.com`,
      linkedin: `https://linkedin.com`,
      youtube: `https://youtube.com`,
      twitter: ``,
    },
  },
```

<!-- AUTO-GENERATED-CONTENT:END -->
