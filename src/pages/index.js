import * as React from 'react'
import LayoutPage from './components/layout'
import { index, indexImage, indexTitle, indexSubTitle } from './components/layout.module.css'


const IndexPage = () => {
  return(
    <>
      <LayoutPage>
      
      <div className={index}>
        <span className={indexTitle}>DR Moe</span>
        <br /><br />
        <span className={indexSubTitle}>
          MD Physician, UK
        </span>
        <br />
        <img src="https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" className={indexImage} alt='dr moe' />
      </div>

      </LayoutPage>
    </>
  )
}

export const Head = () => <title>Index Page</title>

export default IndexPage 