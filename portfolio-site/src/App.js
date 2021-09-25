import './App.css';
// import Header from './Component/Header'
import NewHeader from './Component/NewHeader'
import Project from './Component/Project'
import HeaderNew from './Component/HeaderNew'
import CreateNote from './Component/CreateNote'
import Showthequery from './Component/showthequery'
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
var onclicked=false;

function App() {
  const [clicked, setclicked] = useState(false);
  function onclick(){
    console.log("running onclick functions");
     setclicked(true)
     console.log("onclicked",onclicked)
  }
  return (<>
    
    {/* <NewHeader/> */}
    {/* <Header onclick={onclick}/>
    {console.log(onclicked)}
    {clicked===true? <Header onclick={onclick}/> : ('nothing')} */}
 <Router>
 <HeaderNew />
 <Switch>
    <Route exact path='/' component={NewHeader}></Route>
    <Route exact path='/Project' component={Project}></Route>
    <Route exact path='/CreateNote' component={CreateNote}></Route>

    <Route exact path='/showthequery' component={Showthequery}></Route>
    {/* <Route exact path='/contact' component={Contact}></Route> */}
</Switch>
    </Router>
  </>
  );
}

export default App;
