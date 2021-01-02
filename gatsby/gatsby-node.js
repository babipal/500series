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

async function makeModuleTagPages({ graphql, actions }) {
  // Get template
  const moduleTemplate = path.resolve('./src/pages/modules.js');

  // 2. Query all modules
  const { data } = await graphql(`
    query MyQuery {
      tags: allSanityTag {
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
    }
  `);

  // 3. Loop over each module and create a page for that module
  data.tags.nodes.forEach((tag) => {
    console.log(`creating tag page ${tag.name}`);

    actions.createPage({
      // What is the URL for this new page??
      path: `modules/${tag.slug.current}`,
      component: moduleTemplate,
      context: {
        slug: tag.slug.current,
      },
    });
  });
}

async function makeCompanyPages({ graphql, actions }) {
  // Get template
  const companyTemplate = path.resolve('./src/templates/Company.js');

  // 2. Query all modules
  const { data } = await graphql(`
    query CompaniesQuery {
      companies: allSanityCompany {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  // 3. Loop over each module and create a page for that module
  data.companies.nodes.forEach((company) => {
    actions.createPage({
      // What is the URL for this new page??
      path: `company/${company.slug.current}`,
      component: companyTemplate,
      context: {
        slug: company.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // 1. Modules
  await makeModulePages(params);

  // 2. modules by tags
  await makeModuleTagPages(params);

  // 3. Companies
  await makeCompanyPages(params);

  // 4. Blog posts
}
