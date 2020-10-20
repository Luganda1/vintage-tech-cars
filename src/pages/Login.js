import React from "react";
//strapi function
import loginUser from "../strapi/loginUser"
import registerUser from "../strapi/registerUser"
//handle user
import {useHistory} from "react-router-dom";
import {UserContext} from "../context/user"

export default function Login() {
  const history = useHistory();

  //set usercontext here
    const {userLogin, alert, showAlert } = React.useContext(UserContext);
    // console.log(value)
  //state Values
    const [email, setEmail] = React.useState('')
    const [username, setUsername] = React.useState('default')
    const [password, setPassword] = React.useState('')
    const [isMember, setIsMemeber] = React.useState(true)


  let isEmpty = !email || !password || !username || alert.show;

  //toggles to see wether its a member or not
  const toggleMember = () => {
    setIsMemeber(prevMember => {
      let isMember = !prevMember;
      isMember ? setUsername("default") : setUsername("");
      return isMember;
    });
  }

  const handleSubmit = async (e) => {
    //alert
    showAlert({
      msg: "Accessing data, Please wait..."
    })
    e.preventDefault();
    let response;
    if(isMember){
      response = await loginUser({email, password});
    }
    else {
        response = await registerUser({email, password, username})
    }
    if(response) {
      // //
      // console.log("success");
      // console.log(response);
      const {jwt:token, user:{username}} = response.data;
      const newUser = {token, username}
      userLogin(newUser)

      // setTimeout(() => {}, 3000);
          showAlert({
            msg: `Your logged in as: ${username}`
          });

      history.push("/products")
    }
    else {
      //show alert
      showAlert({
        msg: `Error!!! Please try again...`,
        type:"danger"
      })
    }

  }

  return (
    <section className="form-container">
    <div className="heder">
    <h2 >{isMember? "Sign in ": "Rigester"}</h2>
    </div>
    <form className="form-login">
      {/* Single Form email */}
      <div className="form-input">
        <label htmlFor="email">Email:  </label>
        <input 
        className="input"
        type="email"
        id="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
      </div>
      {/* End of Single Form email */}
      {/* Single Form password */}
      <div className="form-input">
        <label htmlFor="password">Password:  </label>
        <input 
        type="password"
        className="input"
        id="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
      </div>
      {/* End of Single Form email */}
      {/* Single Form email */}
      {!isMember && 
      (<div className="form-input">
        <label htmlFor="username">Username:  </label>
        <input 
        type="username"
        className="input"
        id="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        />
      </div>)
      }
      {/* End of Single Form email */}

      {isEmpty && (
        <p className="form-empty">Please fill out all the form fields</p>
      )}

      {!isEmpty && (
        <button
        type="submit"
        className="btn btn-block btn-primary"
        onClick={handleSubmit}
        >
        submit
        </button>
      )}
        {/* register link */}
        <p className="register-link">
          {isMember? "Need to register" : "already a member"}
          <button type="button" onClick={toggleMember}>Click here</button>
        </p>
    </form>
    </section>
  )
}
