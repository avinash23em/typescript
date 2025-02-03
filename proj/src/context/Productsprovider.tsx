import { useState,createContext, ReactElement, useEffect } from "react";

export type Producttype=[
sku:string,
name:string,
price:number,
]
const intistate:Producttype[]=[];


export type useproductcontext={products:Producttype[]}

const initcontextstate:useproductcontext={ products:[]}

const productscontext=createContext<useproductcontext>(initcontextstate)

type ChildrenType={children?: ReactElement | ReactElement[]}

export const productsprovider=({children}:ChildrenType):ReactElement=>{
    const[products,setproducts]=useState<Producttype[]>(intistate);

    useEffect(()=>{
   const fetchProducts=async():Promise<Producttype[]>=>{
    const data=fetch('http://localhost/5100/products').then(res=>{
        return res.json();
    }).catch(err=>{
        console.log(err)
    })
    return data;
   }
   fetchProducts().then(products=>setproducts(products))
    },[])


    return (
        <productscontext.Provider value={{products}}> {children} </productscontext.Provider>
    )


}