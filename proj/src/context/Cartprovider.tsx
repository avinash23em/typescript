export type cartitemtype={
    snu:string,
    name:string,
    price:number,
    qty:number,
}

type cartstatetype={cart:cartitemtype[]}

const initstate:cartstatetype={cart:[]};
