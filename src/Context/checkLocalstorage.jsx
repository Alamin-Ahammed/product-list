// checkLocakstorage.jsx
import { createContext, useContext, useState } from "react";

const CheckLocalstorage = createContext({})

const MyProvider = ({children}) => {
    const [isLocalstorageUpdated,setIsLocalstorageUpdated] = useState({islocal:false,isdelete:false});
    const updateLocalstorage = (newValue) => {
        return setIsLocalstorageUpdated(newValue);
    }
    return (<CheckLocalstorage.Provider value={{isLocalstorageUpdated,updateLocalstorage}}>
        {children}
    </CheckLocalstorage.Provider>)
}

const useCheckLocalstorage = () => {
    return useContext(CheckLocalstorage);
}

export {MyProvider, useCheckLocalstorage}


