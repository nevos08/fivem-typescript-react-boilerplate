import React from "react"
import { post } from "jquery";

import { useCore } from "../../App"

const ExamplePage: React.FC = () => {
    const { openPage, closePage } = useCore()

    return (
        <div className="example-page">

        </div>
    )
}

export default ExamplePage