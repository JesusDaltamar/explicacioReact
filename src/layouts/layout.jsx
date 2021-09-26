import React from 'react'
import Header from "components/header"
import Footer from "components/footer"

const layout = ({children}) => {
    return (
        <div className="mainContainer">
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export default layout
