import { createContext } from "react";


const FN_Context = createContext({ ad: '', email: '' })

const data = { ad: 'ali', email: 'alion@gm.com' }

const FullNameContext = ({ children }) => {
    return (
        <FN_Context.Provider value={data}>
            {children}
        </FN_Context.Provider>
    )
}

export default FullNameContext;
