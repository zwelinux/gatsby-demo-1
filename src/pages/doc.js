import * as React from 'react'
import LayoutPage from './components/layout'

const DocPage = () => {
    return(
        <LayoutPage pageTitle="myDocPage">
            Documentation Text Will Appear Here.
        </LayoutPage>
    )
}

export const Head = () => <title>Documentation</title>

export default DocPage