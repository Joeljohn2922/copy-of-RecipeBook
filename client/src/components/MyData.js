import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import Navbar from "../navbar" 

function MyData ({ setIsLoggedIn, userId, setUserId }) {

    const [userData, setUserData] = useState("")
   
   

    const navigate = useNavigate()

    useEffect(() => {
       
        fetch('/users')
            .then(r => r.json())
            .then(users => {
                // filtering out the current user & setting user data
                const filteredUsers = users.filter(user => user.id !== userId)
                const currentUser = users.filter(user => user.id === userId)
                // setting user data & other users
                currentUser.map(user => {
                    setUserData(user)
                })
                setOtherUser(filteredUsers)
            })
    }, [userId])

    function handleLogOut() {
        setIsLoggedIn(false)
        setUserId(0)
        fetch(`/login`, {
            method: "DELETE"
        })
        navigate('/login')
    }

    

    return (
        <>
            <div className="">
                <Navbar />
                <h1 className="">RecipeBook</h1>
                
                <button className="" onClick={() => handleLogOut()}>Logout</button>
            </div>
         
            <div className="">
                <div className="">
                    <h2 className="">{userData.username}</h2>
                    
                </div>
            </div>
          
        </>
    )
}

export default MyData;
