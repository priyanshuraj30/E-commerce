import React from 'react';
import useLogout from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Profile = () =>{
    
    const {logout} = useLogout()
    const user = JSON.parse(localStorage.getItem('user'))

    const clickHandler = () =>{
        logout()
    }

    return (
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
                <h4 style={{textShadow:"none",fontFamily:"sans-serif"}} >Profile</h4>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{fontSize:"60%"}}></button>
            </div>
            <div className="offcanvas-body" >
                <span style={{textShadow:"none",fontSize:"70%",justifyContent:"center",fontFamily:"monospace"}}><strong>email:</strong>{user.email}</span>
                <hr />
                <button class="btn btn-dark" onClick={clickHandler}>Log out</button>
            </div>
        </div>
    )
}

export default Profile