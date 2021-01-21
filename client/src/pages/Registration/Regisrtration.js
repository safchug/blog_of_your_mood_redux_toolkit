import RegistrationForm from "../../components/RegistrationFrom/RegistrationForm";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../../store/userSlice";
import {Fragment} from "react";
import Alert from "../../components/FormComponetns/Alert/Alert";

const Registration = () => {

    const dispatch = useDispatch();
    const status = useSelector(state => state.user.status);
    const error = useSelector(state => state.user.error);

    const submit = (e) => {
        e.preventDefault();
        e.target.classList.add('was-validated');
        const registrationData = {
            name: e.target.name.value,
            login: e.target.login.value,
            email: e.target.email.value,
            password: e.target.password.value,
            birthday: e.target.birthday.value
        }

        dispatch(registerUser(registrationData));
    }

    return (
        <RegistrationForm submit={submit} status={status} error={error}/>
    )
}

export default Registration;