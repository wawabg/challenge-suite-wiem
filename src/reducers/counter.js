import { fetchBooks } from "../services/books.service";
import { addBook } from "../services/books.service";

const books=fetchBooks();
const counterReducer = (state=books,action) => {
    switch(action.type){
        case 'ADD_BOOKS':
           return addBook();
    
        case 'DECREMENT':
            return state - 1 
            
        default:
            return state ;
    
    }
    
    }
    export default counterReducer ;