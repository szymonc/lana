import {useContext} from 'react'
import {storesContext} from "./StoreContext";



export const useStore = () => useContext(storesContext)
