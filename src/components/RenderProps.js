import {useState,useEffect} from "react";

const DataFetcher = ({render,url})=>{
    const [data,setData] = useState([]);
    useEffect(()=>{
        if(url.includes("items")){
            setData(['cake','ice cream','pie']);
        }
        else{
            setData(['water','soda','coke','wine']);
        }
    },[]);
    return render(data);
}
const DessertCount = ()=>{
    return(
    <DataFetcher
        url="sample.com/items"
        render = {(data)=> <p>{data.length} Desserts </p>}
    />);
}
const DrinksCount = ()=>{
    return(<DataFetcher
        url="sample.com/drinks"
        render = {(data)=> <h3>{data.length} Drinks </h3>}
    />);
}

const RenderProps = ()=>{
    return (
        <>
        <h1>Menu Lengths</h1>
        <DessertCount/>
        <DrinksCount/>
        </>
    );
}
export default RenderProps;