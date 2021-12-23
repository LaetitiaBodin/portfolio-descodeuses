import React from 'react'

import { Header } from './Header'
import { Cards } from './Cards'

export const Page = (props) => {

    const {img, title, desc, page, smallScreen, pagename, folder, listname} = props

    React.useEffect(() => {
        document.querySelector("link[rel='icon']")
                .setAttribute("href", `${process.env.PUBLIC_URL}/favicons/${img}`)
        document.querySelector("meta[name='description']").setAttribute("content", desc)
        document.querySelector("title").textContent = title
    }, []) // eslint-disable-line

    return (
        <>
            <Header {...{page, smallScreen}}/>
            <Cards {...{pagename, folder, listname, smallScreen}}/>
        </>
    )
}