import { useState } from "react"
import "./index.css"

const Window = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scale, setScale] = useState(1)
    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
            >open window</button>
            {
                isOpen && <div style={{
                    transform: `scale(${scale})`
                }} className="window">
                    <div className="window_btn_container">
                        <button
                            onClick={() => setScale(scale === 1 ? 0.5 : 1)}
                        >{scale === 1 ? "minimize" : "maximize"}</button>
                        <button
                            onClick={() => setIsOpen(false)}
                        >X</button>
                    </div>
                    <h1>VsCode</h1>
                </div>
            }
        </>
    )
}
export default Window
