import { useState } from 'react';
import Navbar from './components/navbar';
import Alert from './components/alert';
import Textform from './components/Textform';

function Myapp() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);


  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = "#0b1e39";
      showAlert("dark mode have been enable!", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      showAlert("light mode have been enable!", "success");
    }
  }
  const Greentogglemode = () => {
    if (mode === 'light') {
      setmode('success')
      document.body.style.backgroundColor = "#0b3817";
      showAlert(" Green dark mode have been enable!", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      showAlert("light mode have been enable!", "success");
    }
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
      <Navbar title="Textutils" mode={mode} togglemode={togglemode} Greentogglemode={Greentogglemode} />
      <Alert Alert={alert} />
      <Textform mode={mode} showAlert={showAlert} />

    </>

  );
}

export default Myapp;