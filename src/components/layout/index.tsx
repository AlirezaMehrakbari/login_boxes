import React from "react";
import style from './layout.module.css'
const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className={style.layoutWrapper}>
            {children}
        </div>
    )
}

export default Layout
