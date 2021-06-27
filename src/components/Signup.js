import SignupForm from "./SignupForm";
import {validateData} from '../functions/Utilities';
import { useState } from "react";

function Signup() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState(''); 
  const [email, setEmail] = useState('');
  const [pword, setPword] = useState('');
  const [pword2, setPword2] = useState('');
  const [error, setError] = useState({
    fname: '',
    lname: '',
    email: '',
    pword: '',
    pword2: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      fname,
      lname,
      email,
      pword,
      pword2
    }
    const errors = validateData(data)

    if(errors.length) {
      console.log(errors)
      return
    }

    console.log('Success!')
  }

  const props = {
    handleSubmit,
    fname,
    setFname,
    lname,
    setLname,
    email, 
    setEmail,
    pword,
    setPword,
    pword2,
    setPword2,
    error
  }

  return(
    <div className="styles_wrapper">
      <SignupForm {...props} />
    </div>
  )
}

export default Signup;