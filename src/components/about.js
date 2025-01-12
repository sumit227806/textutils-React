import React, { useState } from 'react'

export default function About() {
    const[Mystyle,setMystyle]=useState({
        color: 'black',
        backgroundColor:'white'
    });
    const [toggletext,settoggletext]=useState('enable dark mode');
    document.title="Textutils-About";

    const handlemode=()=>{
        if(Mystyle.color=== 'black'){
          setMystyle({
             color: 'White',
        backgroundColor:'black',
        border: '1px solid white'
          })
          settoggletext("enable light mode");
        }
        else{
            setMystyle({
                 color: 'black',
        backgroundColor:'White'
            })
            settoggletext("enable dark  mode");
        }
    }
  return (
    <div className='container border m-2 p-2' style={Mystyle}>
      <div classname="accordion" id="accordionExample">
  <div classname="accordion-item" style={Mystyle}>
    <h2 classname="accordion-header">
      <button classname="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={Mystyle}>
        Accordion1
      </button>
    </h2>
    <div id="collapseOne" classname="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div classname="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div classname="accordion-item" style={Mystyle}>
    <h2 classname="accordion-header">
      <button classname="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style={Mystyle}>
        Accordion 2
      </button>
    </h2>
    <div id="collapseTwo" classname="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div classname="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div classname="accordion-item" style={Mystyle}>
    <h2 classname="accordion-header">
      <button classname="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={Mystyle}>
        Accordion 3
      </button>
    </h2>
    <div id="collapseThree" classname="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div classname="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<div>
    <button className='btn btn-primary my-2' onClick={handlemode}>{toggletext} </button>
</div>
    </div>
  )
}
