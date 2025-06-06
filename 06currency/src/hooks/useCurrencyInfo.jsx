import { use, useEffect,useState } from "react";

function useCurrencyInfo(currency) {
    const [data,setData]=useState({});
    useEffect(()=> {

        fetch(`https://v6.exchangerate-api.com/v6/ec6d9b2f9b287023bc92676e/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=> setData(res.conversion_rates))
    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;