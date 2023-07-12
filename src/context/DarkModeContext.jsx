import { createContext, useEffect, useState } from "react";



const modes = ['light', 'dark', 'green', 'purple', 'blue', 'nane']
const modeClasses = ['', 'darkContainer', 'greenContainer', 'purpleContainer', 'blueContainer', 'naneContainer']
const emojis = ['🌝', '🌞', '👽', '😁', '🪂', '🍀']

export const DarkModeContext = createContext("light")
const DarkModeContextComponent = ({ children }) => {
    const [modeIndex, setModeIndex] = useState(0)

    useEffect(() => {
        setModeIndex(+localStorage.getItem('modeIndex') ?? 0)
    }, [])
    const handleModeChange = () => {
        let newModeIndex = modeIndex + 1
        if (newModeIndex >= modes.length) {
            newModeIndex = 0
        }
        setModeIndex(newModeIndex)
        localStorage.setItem('modeIndex', newModeIndex)
    }
    const emoji = () => emojis[modeIndex]

    return (
        <div className={modeClasses[modeIndex]}>
            <DarkModeContext.Provider value={[emoji(), handleModeChange]}>
                {children}
            </DarkModeContext.Provider>
        </div>
    )
}
export default DarkModeContextComponent;
