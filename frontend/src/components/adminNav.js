import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/'
import useLogout from '../hooks/useLogout'
// import useAuthContext  from '../hooks/useAuthContext'

const AdminNav =()=>{
    
    const {logout} = useLogout()
    
    const user = JSON.parse(localStorage.getItem('user'))
    console.log("Yhan pe")
    console.log(user)

    const clickHandler = () =>{
        logout()
    }
    return (
        <>
                
            <nav class="navbar navbar-dark bg-dark" aria-label="First navbar example" style={{position:"fixed",width:"100%",zIndex:"1",top:"0"}}>
                <div class="container-fluid">
                <a class="navbar-brand" href="/admin">Sai Electronics</a>
                <a class="navbar-brand" href="/admin"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
</svg>     Add Item</a>

<span>{user.email}</span>
                            <button onClick={clickHandler}>Log out</button>
                </div>
             </nav>

        
        </>
    )
}

export default AdminNav