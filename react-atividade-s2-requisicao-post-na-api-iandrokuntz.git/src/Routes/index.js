import Login from "../pages/Login"
import Home from "../pages/Home"
import { Switch, Route } from "react-router-dom"
import { useState } from "react"

const Routes = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return(
        <div>
            <Switch>
                <Route exact path="/">
                    <Login setIsLoggedIn={setIsLoggedIn}/>
                </Route>
                <Route path="/home">
                    <Home isLoggedIn={isLoggedIn}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes