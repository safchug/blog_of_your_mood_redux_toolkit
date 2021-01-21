import SubmitButton from "../FormComponetns/SubmitButton/SubmitButton";
import FormItem from "../FormComponetns/FormItem/FromItem";

import './style.css';
import {Fragment} from "react";
import Alert from "../FormComponetns/Alert/Alert";

const RegistrationForm = ({submit, status, error, passwordFeadback = "Enter your pasword please"}) => {
    return (
        <Fragment>
            <Alert  status={status} error={error}/>
            {status !== 'success' &&
            <form className="row g-3 needs-validation reistration-form" noValidate onSubmit={submit}>
                <FormItem id = "name" type="text" label="Name" feedback="Enter your name please" />
                <FormItem id = "login" type="text" label="Login" feedback="Enter your login please" />
                <FormItem id = "email" type="text" label="Email" feedback="Enter your email please" />
                <FormItem id = "birthday" type="text" label="Birthday" feedback="Enter your birthday please" />
                <FormItem id = "password" type="pasword" label="Password" feedback={passwordFeadback} />
                <FormItem id = "repeatPassword" type="pasword" label="Repeat password" feedback={passwordFeadback}/>
                <SubmitButton title="Register" />
            </form>
            }
        </Fragment>
    )
}

export default RegistrationForm;