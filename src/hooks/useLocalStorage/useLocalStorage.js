import { useEffect, useReducer } from "react";

const init_func = (param)=>{
    const {key,fallback_value} = param;
    const savedValue = JSON.parse(localStorage.getItem(key));
    if(savedValue) return savedValue;
    return fallback_value;
};

const useLocalStorage = (key,initial_value,reducer_function)=>{
    const [state,dispatch] = useReducer(reducer_function,{key,fallback_value:initial_value},init_func);
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(state));
    },[key,state]);

    return [state,dispatch];
};

export default useLocalStorage;