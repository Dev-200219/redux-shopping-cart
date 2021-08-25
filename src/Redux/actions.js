import{addToCart, remFromCart} from "./constants";

export const addCreator = (id)=>{
    return{
        type:addToCart,
        payload:id,
    }
}

export const remCreator = (id)=>{
    return{
        type:remFromCart,
        payload:id,
    }
}