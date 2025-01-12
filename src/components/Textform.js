import { useState } from "react";

function Textform(props) {
    const [Text, setText] = useState('');
    document.title="Textutils-Home";

    function oneventhandler(event) {
        setText(event.target.value)
    }
    const Handlerupcase = () => {
        let newtext = Text.toUpperCase();
        setText(newtext);
        props.showAlert('enable upper case!', "success");
    }
    const Handlerclearcase = () => {
        let newtext = '';
        setText(newtext);
        props.showAlert('Text Cleared!', "success");
    }

    const Handlerlocase = () => {
        let Newtext = Text.toLowerCase();
        setText(Newtext);
        props.showAlert('enable Lower case!', "success");
    }
    const Handlercopycase = () => {

        var text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('text copied!', "success");
    }
    const Handlerrspccase = () => {
        let newText = Text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert('Extra space have been removed!', "success");
    }
    const Handledownload = () => {
        let text = document.getElementById('mybox');
        let valueinput = text.value;

        let blobdtMIME =
            new Blob([valueinput], { type: "text/plain" })
        let url = URL.createObjectURL(blobdtMIME)
        let anele = document.createElement("a")
        anele.setAttribute("download", "Downloaded Successfully");
        anele.href = url;
        anele.click();
        props.showAlert('downloded!', "success");

    }

    return (
        <div className="container ">
            <div className="form-group my-3">
                <label htmlFor="mybox" className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}><h3>Enter the text below</h3></label>
                <textarea className="form-control" id="mybox" rows="8" value={Text} onChange={oneventhandler} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === "light" ? 'black' : 'white' }}></textarea>
            </div>
            <button className={`btn btn-${props.mode === 'light' ? 'primary' : props.mode} m-1`} onClick={Handlerupcase}>Convert To Uppercase</button>
            <button className={`btn btn-${props.mode === 'light' ? 'primary' : props.mode} m-1`} onClick={Handlerclearcase}>Clear Text</button>
            <button className={`btn btn-${props.mode === 'light' ? 'primary' : props.mode} m-1`} onClick={Handlerlocase}>Convert To Lowercase</button>
            <button className={`btn btn-${props.mode === 'light' ? 'primary' : props.mode} m-1`} onClick={Handlercopycase}>Copy Text</button>
            <button className={`btn btn-${props.mode === 'light' ? 'primary' : props.mode} m-1`} onClick={Handlerrspccase}>Remove Extra Space</button>
            <button className={`btn btn-${props.mode === 'light' ? 'primary' : props.mode} m-1`} onClick={Handledownload}>Download Text</button>
            <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>your text Summary</h2>

            <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{ Text.length=== 0 ? "0 words":Text.trim().split(/\s+/).length + " words"}{    " "+Text.length + "  characters"}</p>

            <h3 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview</h3>

            <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{Text === '' ? "enter the text in above box to see the Preview" : Text}</p>

        </div>

    );
}
export default Textform;