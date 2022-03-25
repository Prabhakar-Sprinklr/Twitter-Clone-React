import { useEffect, useReducer } from "react";

type InitParam = {
    key:string,
    fallback_value:object[] | object,
};

type ReducerType = (state:object[] | object ,action:object)=>object[] | object;

const init_func = (param:InitParam)=>{
    const {key,fallback_value} = param;
    const locallySavedValue = localStorage.getItem(key);
    if(!locallySavedValue) return fallback_value;
    return JSON.parse(localStorage.getItem(key) as string);
};

const useLocalStorage = (key:string,initial_value:object[] | object,reducer_function:ReducerType)=>{
    const [state,dispatch] = useReducer(reducer_function,{key,fallback_value:initial_value},init_func);
    
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(state));
    },[key,state]);

    return [state,dispatch];
};

export default useLocalStorage;