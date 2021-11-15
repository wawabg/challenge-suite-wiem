import React,{ useState } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import {add_book, increment} from './actions'
import {decrement} from './actions'
import {sign_in} from './actions'

function App() {
  let [name, setName] = useState();
  const counter=useSelector(state => state.counterReducer);
  const logi=useSelector(state => state.loggedReducer);
  const dispatch=useDispatch();
  
  return (
    <div className="App">
              {counter.map(function(item, i){
  return <li key={i}>{item.id} {item.title} </li>})}
     <button onClick={()=> dispatch(increment()) }>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      <input
             
             value={name}
             onChange={(e)=>setName(e.target.value)}
             type="text" />
              <button onClick={()=> dispatch(add_book(name))}>Add</button>

    {logi? <h2>Welcome Sir</h2> : <h2>Please Login in!</h2>}
    </div>
  );
}

export default App;