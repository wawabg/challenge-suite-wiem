const loggedReducer = (state=false,action) =>{
    switch(action.type){
        case 'SIGN_IN':
            return state;
           
        default:
            return "a" ;
    
    };
}
    export default loggedReducer;
    
    