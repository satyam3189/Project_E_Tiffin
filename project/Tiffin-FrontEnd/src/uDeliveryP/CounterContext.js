import {useState} from "react";

const {createContext} = require("react");
const CounterContext = createContext({})

export function CounterProvider({children}){
    const [counter, setCounter] = useState(-1);


    return(
        <CounterContext.Provider value={{counter, setCounter}}>{children}</CounterContext.Provider>
    )
}
export default CounterContext