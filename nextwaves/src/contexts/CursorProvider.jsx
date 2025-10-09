import { createContext, useContext } from 'react'
import CustomCursor from '../Components/CustomCursor'

const CursorContext = createContext()

export const useCursor = () => {
    const context = useContext(CursorContext)
    if (!context) {
        throw new Error('useCursor must be used within a CursorProvider')
    }
    return context
}

export const CursorProvider = ({ children }) => {
    return (
        <CursorContext.Provider value={{}}>
            {children}
            <CustomCursor />
        </CursorContext.Provider>
    )
}
