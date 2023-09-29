import { createContext, useState} from 'react'

export const CounterContext = createContext()

const CounterProvider = ({children}) => {
    const [counter, setCounter] = useState(0)


    const addProduct = () => {
        setCounter( counter +1)
        window.scrollTo({top: 0, behavior: 'smooth'})

    }

    const subProduct = () => {
        setCounter(counter - 1)
    }

    return (
        <CounterContext.Provider value={{counter, addProduct, subProduct}}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider