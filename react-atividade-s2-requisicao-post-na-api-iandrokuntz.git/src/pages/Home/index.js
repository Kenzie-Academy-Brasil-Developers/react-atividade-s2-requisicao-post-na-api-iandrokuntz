import { useHistory } from "react-router"
import "./style.css"

const Home = ({isLoggedIn}) => {

    const history = useHistory()

    return(
        <div>
            {isLoggedIn && <p><strong>Status</strong>: Authorized</p>}
            <h1 className="h1Home">Welcome Home</h1>
            <button onClick={() => history.push("/")} className="buttonHome">Logout</button>
        </div>
    
    )
}

export default Home