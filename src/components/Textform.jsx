import  react from 'react';
import { useState } from 'react';

export default function Texform(props){

    const [text,setText] = useState('');
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Text converted Uppercase",'success');
    }
    const handleLwClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Text converted LowerCase",'success');
    }

    // const handleRevsClick = () => {
    //     const reverseText = text.split('').reverse().join('');
    //     setText(reverseText);
    //     props.showAlert("Text Reversed",'success');
    // }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copy text",'success');
    }
    const handleSpaceRemove = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
        props.showAlert("Done Spaceremove",'success');
    }
    const handleChange = (value) => {
        const msg = value+' Text';
        var txt_val = '';
        if(value == 'clear'){
            txt_val ='';
        }

        if(value == 'reverse'){
            txt_val = text.split('').reverse().join('');
        }
        setText(txt_val);
        props.showAlert(msg,'success');
            
    }

    const handleOnchange = (e) => {
        setText(e.target.value);
    };


    return(
        <>
        <div className="container" style={{color: props.mode!=='light'?'white':'black'}}>
            <h2>Try, Textutils Counter of Word & Character, Remove extra space</h2>
            <div className="my-3">
            <textarea id="myBox" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode
            !=='light'?'white':'lightgrey', color: props.mode !=='light'?'black':'grey'}} className="form-control" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleLwClick}>Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleSpaceRemove}>Extra Space Remove</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={() => handleChange('clear')}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={() => handleChange('reverse')}>Reverse Text</button>
            {/* <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleClrClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleRevsClick}>Reverse Text</button> */}
        </div>
        <div className="container my-3" style={{color: props.mode!=='light'?'white':'black'}}>
            <h3>Your Text Summary</h3>
            <p><b>{text.split(" ").filter((element)=>{ return element.length!=0 }).length}</b> Words and <b>{text.length}</b> Character</p>
            <p><b>{0.08 * text.split(" ").filter((element)=>{ return element.length!=0 }).length}</b> Reads</p>
            </div>
            <div className="container my-3" style={{color: props.mode!=='light'?'white':'black'}}>
            <h3>Preview Text</h3>
            <p>{text.length>0?text:'Nothing to preview'}</p>
        </div>
        </>
    );
}

