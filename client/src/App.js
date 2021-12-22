// import Dashboard from './components/Dashboard/Dashboard'
import UserForm from './components/Form/Form'
import {useDispatch} from 'react-redux'
import {useEffect,useState} from 'react'
import {getManagers} from './actions/managers'
import Managers from '../src/components/Managers/Managers'
function App() {
  const dispatch = useDispatch();
  const [currentId,setCurrentId] = useState(null);
  useEffect(()=>{
    dispatch(getManagers())
  },[dispatch])
  return (
    <div>
      <UserForm currentId={currentId} setCurrentId={setCurrentId}/>
      <Managers setCurrentId={setCurrentId}/>
    </div>
  );
}

export default App;
