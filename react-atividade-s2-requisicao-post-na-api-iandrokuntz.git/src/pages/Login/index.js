import { useHistory } from "react-router"
import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css"
import toast from "react-hot-toast"

const Login = ({setIsLoggedIn}) => {

    const history = useHistory()

    const formSchema = yup.object().shape({
        username: yup.string().required("User required"),
        password: yup.string().required("Inform your password"),
      })

    const {register, handleSubmit, formState: { errors }} = useForm({ resolver: yupResolver(formSchema) })

    const login = (data) => {

        axios.post("https://kenzieshop.herokuapp.com/sessions/", data)
            .then((response) => {console.log(response);
             window.localStorage.clear();
             window.localStorage.setItem("authToken", response.data.access);
                setIsLoggedIn(true);
                history.push("/home")
                toast.success("Login Success")
      }).catch((err) => toast.error("You don't have an access"));

    }

    return(
        <div>
            
            <h1>Login</h1>
            <form onSubmit={handleSubmit(login)}>
                <input placeholder="Username" {...register("username")}/>
                    <span>{errors.username?.message}</span>
                <input placeholder="password" type="password" {...register("password")}/>
                    <span>{errors.password?.message}</span>
                <button type="submit">Login</button>
            </form>
        </div>

    )
}

export default Login