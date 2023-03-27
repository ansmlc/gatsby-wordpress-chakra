// eslint-disable-next-line @typescript-eslint/no-var-requires
const { paginate } = require('gatsby-awesome-pagination');

// eslint-disable-next-line consistent-return
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResult = await graphql(`
    query {
      wp {
        allSettings {
          readingSettingsPostsPerPage
        }
      }
      allWpPost {
        tags: group(field: tags___nodes___name) {
          fieldValue
          edges {
            node {
              slug
            }
          }
        }
        categories: group(field: categories___nodes___name) {
          fieldValue
          edges {
            node {
              slug
            }
          }
        }
        nodes {
          slug
          id
        }
        edges {
          node {
            slug
            id
          }
          next {
            slug
          }
          previous {
            slug
          }
        }
      }
      allWpPage {
        nodes {
          slug
          id
        }
      }
      allWpUser {
        nodes {
          slug
        }
      }
    }
  `);

  if (queryResult.errors) {
    queryResult.errors.forEach(e => console.error(e.toString()));
    return Promise.reject(queryResult.errors);
  }

  // Create Author pages
  queryResult.data.allWpUser.nodes.forEach(user => {
    createPage({
      path: `author/${user?.slug}`,
      component: require.resolve('./src/templates/userTemplate.jsx'),
      context: {
        // This is the $slug variable
        // passed to blog-post.js
        slug: user?.slug,
      },
    });
  });

  // * POST
  // Create a page view for each blog post
  queryResult.data.allWpPost.edges.forEach(edge => {
    createPage({
      path: `post/${edge.node?.slug}`,
      component: require.resolve('./src/templates/postTemplate.jsx'),
      context: {
        // This is the $slug variable
        // passed to blog-post.js
        slug: edge.node?.slug,
        nextPostSlug: edge.next?.slug,
        previousPostSlug: edge.previous?.slug,
        // added for testing post previews with wp gatsby (doesn't work)
        id: edge.node.id,
      },
    });
  });

  // * PAGE
  // Create a page view for each wordpres page
  queryResult.data.allWpPage.nodes.forEach(page => {
    createPage({
      path: `page/${page?.slug}`,
      component: require.resolve('./src/templates/pageTemplate.jsx'),
      context: {
        // This is the $slug variable
        // passed to blog-post.js
        slug: page?.slug,
        // added for testing post previews with wp gatsby (doesn't work)
        id: page.id,
      },
    });
  });

  // * BLOG ARCHIVE PAGE
  // Create a paginated blog, e.g., /, /page/2, /page/3
  const blogPosts = queryResult.data.allWpPost.nodes;
  const blogTemplate = require.resolve('./src/templates/blogTemplate.jsx');
  // Set to fixed because of responsive layout fine-tuning
  // const postsPerPage = queryResult.data.wp.allSettings.readingSettingsPostsPerPage;
  paginate({
    createPage,
    items: blogPosts,
    itemsPerPage: 6,
    path: 'blog/',
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? 'blog' : 'blog'),
    component: blogTemplate,
    context: { type: 'blog' },
  });

  // * CATEGORY
  // Create pages and list posts for each category
  const categoryTemplate = require.resolve('./src/templates/categoryTemplate.jsx');
  queryResult.data.allWpPost.categories.forEach(category => {
    const str = category.fieldValue;
    const slug = str.replace(/\s+/g, '-').toLowerCase();
    paginate({
      createPage,
      items: category.edges,
      itemsPerPage: 6,
      pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `category/${slug}` : `${slug}`),
      component: categoryTemplate,
      context: { slug, category: category.fieldValue },
    });
  });

  // * TAG
  // Create pages and list posts for each tag
  const tagTemplate = require.resolve('./src/templates/tagTemplate.jsx');
  queryResult.data.allWpPost.tags.forEach(tag => {
    const str = tag.fieldValue;
    const slug = str.replace(/\s+/g, '-').toLowerCase();
    paginate({
      createPage,
      items: tag.edges,
      itemsPerPage: 6,
      pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `tag/${slug}` : `${slug}`),
      component: tagTemplate,
      context: { slug, tag: tag.fieldValue },
    });
  });
};
