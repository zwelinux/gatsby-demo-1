import * as React from 'react'
import { Link } from 'gatsby'
import { 
    header, 
    logo, 
    headerTitle,
    main,
    
} from './layout.module.css'

const LayoutPage = ({ pageTitle, children }) => {
    return(
        <>
            <header className={header}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwN18HT0LewTN9RhvDEBkNVS06jaRLHeoN3E9JVspYGj2gHl_sPbB-VCD4oXByJF4qN4&usqp=CAU" width="40px" height="40px"  className={logo} alt="logo" />
                <span className={headerTitle}> DR.MOE</span>
                <ul>
                    <li class="stay"><Link to="/">HOME</Link></li>
                    <li class="hide"><Link to="/doc">DOC</Link></li>
                    <li class="hide"><Link to="/blog">BLOG</Link></li>
                </ul>
            </header>

            <main className={main}>
                {children}
            </main>

        </>
    )
}

export default LayoutPage 