import React, {useState}from 'react'
import axios from 'axios'
const CreateNote = () => {
    const [input, setinput] = useState({title:'',content:''})
    function handleClick(event){
        event.preventDefault();
        const newNote={
            title:input.title,
            content:input.content
        }
        axios.post('http://localhost:3001/create',newNote)


    }
    function handleChange(event){
        const {name,value}=event.target;
        setinput(prevInput=>{
            return{
                 ...prevInput,[name]:value
            }
        })
    }
    return (

        <div className="form-container" >
        <h1>Create Note page</h1>
        <form>
        <div className="form-group">
        <input onChange={handleChange} name="title"  value={input.title}autoComplete="off" className="form-control" placeholder="note title"></input>
        </div>
        <div className="form-group">
        <textarea onChange={handleChange} name="content" value= {input.content} autoComplete="off" className="form-control" placeholder="note content"></textarea>
        </div>
    <button onClick={handleClick} className="btn btn-lg btn-info">ADD NOTE</button>
    </form>
      </div>
        )
}

export default CreateNote;
