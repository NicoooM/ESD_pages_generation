import data from "../src/db.json";
import Template from '../src/components/Template'

export default function Post({ company }) {
  return <Template company={company}></Template>
}

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const paths = data.map((company) => ({
    params: { title: company.title },
  }));

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const { params } = context;
  const { title } = params;
  const company = data.find((company) => company.title === title);
  return {
    // Passed to the page component as props
    props: { company },
  };
}
