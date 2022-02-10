import React, {useState} from 'react';
import '../style.css'

export default function TextForm(props) {
    const [Text, setText] = useState('');

    const HandleOnChange = (event) => {
        setText(event.target.value)
    }

    const HandleUpcase = ()=> {
        let newText = Text.toUpperCase();
        setText(newText)
    }

    

    const HandleLocase = ()=> {
        let newText = Text.toLowerCase();
        setText(newText)
    }

    const HandleRvexsp = () => {
        let newText = Text.replace(/\s+/g, ' ').trim();
        setText(newText)
    }
    
    const Handle1stc = () => {
        
        let new2Text = Text;
        let arr = new2Text.split(" ");

        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }

        let newText = arr.join(" ");
        setText(newText)

    
    }
    


    


    
    
    

  return (

    <div >

    
        
        
        <div className="container" style={{ color: props.mode==="dark"?"white":"#2c2556" }}>
            <div className="mb-3"> 
            <label htmlFor="Text"><h1>{props.heading}</h1></label>
            
            <textarea className="form-control" value={Text} onChange={HandleOnChange} id="Text" style={{ backgroundColor: props.mode==="dark"?"grey":"white", color: props.mode==="dark"?"white":"#2c2556" }} rows="12"></textarea>

            <div className='formButton'>
                <button className="btn btn-primary mx-1" onClick={HandleUpcase}>convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={HandleLocase}>convert to lowercase</button>
                <button className="btn btn-primary mx-1" onClick={HandleRvexsp}>remove extra space</button>
                <button className="btn btn-primary mx-1" onClick={Handle1stc}>capitalize per word</button>
                

                
            </div>
            </div>
        </div>

        <div className="container my-3" style={{ color: props.mode==="dark"?"white":"#2c2556" }}>
            <h1>Your text summery</h1>
            <p>number of characters is : {Text.length} <br/>
               number of word is : {Text.split(" ").length} <br/>
               number of time to speak text : { 0.008 * Text.split(" ").length }min <br/>
               number of time to read upper text : { Math.floor(0.0041* Text.split(" ").length*100)/100 }min
            </p>

            <h1>Preview</h1>
            <p><i>{Text.length>0?Text:"Enter some Text in the textBox above to preview it"}</i></p>
        </div>

        <div>
        
        </div>
        
    </div>
  )
}
