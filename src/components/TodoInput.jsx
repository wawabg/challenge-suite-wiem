import React,{ useState } from 'react'
//import { addTodo } from '../redux/actions';
//import {v1 as uuid} from 'uuid';
//import { useDispatch } from 'react-redux';
import {fetchBooks} from "../services/books.service"
function TodoInput() {
    const books=fetchBooks()
    //let [name, setName] = useState();
    //let dispatch = useDispatch();
    
    let [searchInput, setSearchInput] = useState('');

   let [filteredResults, setFilteredResults] = useState([]);
  let searchItems = (searchValue) => {
    console.log("aaa")
    console.log(searchValue)

       setSearchInput(searchValue)
     books.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        //setFilteredResults(filteredData)}
        
    }
    
    return (
        <div >          
            
             <input
             
               // value={name}
                type="text"
                onChange={(e) => searchItems((e.target.value))}
             />
                
            <button
         
            >Search</button>
           
        </div>
    )

    }
export default TodoInput
