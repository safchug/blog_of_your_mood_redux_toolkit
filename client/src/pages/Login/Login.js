import LoginForm from "../../components/LoginForm/LoginFrom";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../store/userSlice";
import { useHistory } from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch();
    const loginStatus = useSelector(state => state.user.loginStatus);
    const loginError = useSelector(state => state.user.loginError);
    let history = useHistory();

    const submit = (e) => {
        e.preventDefault();
        e.target.classList.add('was-validated');

        const loginData = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        dispatch(loginUser(loginData));
    }

    if (loginStatus === 'authenticated') history.push('/');

    return (
        <LoginForm submit={submit} loginStatus={loginStatus} loginError={loginError}/>
    )
}

export default Login;