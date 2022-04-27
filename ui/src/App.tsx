import React, { createContext, useContext, useEffect, useState, FC } from "react"
import "react-toastify/dist/ReactToastify.css"

// Interfaces
import IContext from "./interfaces/IContext"

// Pages
import { pageList } from "./pages/pages"

const CoreContext = createContext({})
export const useCore = () => useContext(CoreContext) as IContext

const App: FC = () => {
    const [visible, setVisible] = useState(false)
    const [pages, setPages] = useState([])
    const devMode = process.env.NODE_ENV === "development" ? true : false

    const openPage = (pageName: string) => {
        if (!pageName || !pageList[pageName]) return;
        if (pages.find(page => page.name === pageName)) return;

        const newPages = pages.concat({ name: pageName, component: pageList[pageName] })
        setPages(newPages)
    }

    const closePage = (pageName: string) => {
        const newPages = pages.filter(page => page.name !== pageName);
        setPages(newPages)
    }

    const handleMessage = ( event: { data: any } ) => {
        const data = event.data;

        if (data.action == "openPage") {
            openPage(data.pageName)
        } else if (data.action == "closePage") {
            closePage(data.pageName)
        } else if (data.action == "setVisible") {
            setVisible(data.state)
        }
    }

    useEffect(() => {
        window.addEventListener("message", handleMessage)
        return () => {
            window.removeEventListener("message", handleMessage)
        }
    }, [])


    return (
        <CoreContext.Provider value={{ openPage, closePage }}>
            { visible && pages.map(page => {
                const Page = page.page
                return ( <Page key={page.name} />)
            }) }
        </CoreContext.Provider>
    )
}

export default App