

function SignupForm (props) {
  const {
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
  } = props


  return(
    <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label>
            First Name:
            <input 
              type='text'
              name='fname'
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </label>
          <span className="styles_error">{error.fname}</span>
        </div>
        <div className="form-item">
          <label>
            Last Name:
            <input 
              type='text'
              name='lname'
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </label>
          <span className="styles_error">{error.lname}</span>
        </div>
        <div className="form-item">
          <label>
            Email:
            <input 
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <span className="styles_error">{error.email}</span>
        </div>
        <div className="form-item">
          <label>
            Password:
            <input type='password'
              name='pword'
              value={pword}
              onChange={(e) => setPword(e.target.value)}
            />
          </label>
          <span className="styles_error">{error.pword}</span>
        </div>
        <div className="form-item">
          <label>
            Confirm Password:
            <input 
              type='password'
              name='pword2'
              value={pword2}
              onChange={(e) => setPword2(e.target.value)}
            />
          </label>
          <span className="styles_error">{error.pword2}</span>
        </div>
        <div className="form-item">
          <button type="submit">Submit</button>
        </div>
      </form>

  )
}

export default SignupForm;