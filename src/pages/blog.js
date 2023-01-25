import * as React from 'react'
import { graphql } from 'gatsby'
import LayoutPage from './components/layout'


const BlogPage = ({ data }) => {
  return (
    
    <LayoutPage pageTitle="BLOG">
    <ol>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
    </ol>

    </LayoutPage>
)
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <title>My BLOG PAGE</title>

export default BlogPage