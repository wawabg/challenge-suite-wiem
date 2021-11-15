export const increment =()=>{
    return{
        type:'INCREMENT'
    };
}
export const decrement =()=>{
    return{
        type:'DECREMENT'
    };
}
export const sign_in =()=>{
    return{
        type:'SING_IN'
    };
}
export function add_book(book){
    return{
        type:"ADD_BOOKS",
        payload:book
    }
}