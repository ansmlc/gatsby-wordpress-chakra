/* eslint-disable import/prefer-default-export */
export function blogPathPrefix(context) {
  let categoryPath;
  let tagPath;
  if (context === 'blog') {
    categoryPath = './../category/';
    tagPath = './../tag/';
  } else if (context === 'category') {
    categoryPath = './../';
    tagPath = '../../tag/';
  } else if (context === 'tag') {
    categoryPath = '../../category/';
    tagPath = './../';
  }
  return { categoryPath, tagPath };
}
