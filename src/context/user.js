import React from 'react';

const UserContext = React.createContext();


// creating a function that checks if the user the exist in the local storage
//get uset from local storage

function getUser() {
    return localStorage.getItem("user")
    ?JSON.parse(localStorage.getItem("user"))
    :{username: null, token: null}
}


function UserProvider({children}) {

    const [user, setUser] = React.useState(getUser())

    const userLogin = user => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user))
    }

    const userLogout = () => {
    setUser({username: null, token: null})
    localStorage.removeItem("user");
    }

    //showing the success massage when u login
    const [alert, setAlert] = React.useState({
        show: false,
        msg: "",
        type: "success"
    })

    const showAlert = ({msg, type = "success",}) =>{
        setAlert({show:true, msg, type})
    }

    const hideAlert = () => {
        setAlert({...alert, show: false})
    }

    return <UserContext.Provider value={{
        user, 
        userLogin, 
        userLogout,
        alert,
        showAlert,
        hideAlert,
        }}>
        {children}
    </UserContext.Provider>
}

export {UserProvider, UserContext};