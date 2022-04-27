import React from "react";

// Pages
import ExamplePage from "./examplePage/ExamplePage";

const pageList = {
    ExamplePage: ExamplePage
}

function generatePageList() {
    const pages = [];
    Object.keys(pageList).forEach(key => {
        pages.push({ name: key, page: pageList[key]})
    })
    return pages
}

export {
    pageList,
    generatePageList
}