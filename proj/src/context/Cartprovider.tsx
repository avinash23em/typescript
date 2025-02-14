export type cartitemtype={
    snu:string,
    name:string,
    price:number,
    qty:number,
}

type cartstatetype={cart:cartitemtype[]}

const initstate:cartstatetype={cart:[]};

const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT",
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
    type: string,
    payload?: cartitemtype,
}
