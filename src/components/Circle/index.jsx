import { useEffect, useState } from "react"

const Circle = () => {
    const [color, setColor] = useState("error")
    useEffect(() => {
        setColor(localStorage.getItem('color_circle'))
    }, [])
    useEffect(() => {
        localStorage.setItem('color_circle', color)
    }, [color])

    return (
        <>
            <button
                onClick={() => setColor(color === 'error' ? 'success' : 'error')}
            >toggle</button>
            <div style={{
                border: '1px solid',
                width: 50,
                height: 50,
                borderRadius: '50%',
                backgroundColor: color === 'error' ? 'red' : 'green'
            }}>

            </div>
        </>
    )
}
export default Circle
