import path from 'path';

async function makeModulePages({ graphql, actions }) {
  // Get template
  const moduleTemplate = path.resolve('./src/templates/Module.js');

  // 2. Query all modules
  const { data } = await graphql(`
    query ModulesQuery {
      modules: allSanityProduct {
        nodes {
          name
          id
          slug {
            current
          }
          mainImage {
            asset {
              assetId
            }
          }
          description
          msrp
          url
          company {
            name
            mainImage {
              asset {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `);

  // 3. Loop over each module and create a page for that module
  data.modules.nodes.forEach((module) => {
    actions.createPage({
      // What is the URL for this new page??
      path: `module/${module.slug.current}`,
      component: moduleTemplate,
      context: {
        slug: module.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // 1. Modules
  await makeModulePages(params);

  // 2. Companies

  // 3. Blog posts
}
