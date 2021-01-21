import SubmitButton from "../FormComponetns/SubmitButton/SubmitButton";
import FormItem from "../FormComponetns/FormItem/FromItem";
import {Fragment} from "react";
import Alert from "../FormComponetns/Alert/Alert";


const LoginForm = ({submit, loginStatus, loginError}) => {
    let isSuspended;

    isSuspended = loginStatus === 'processing'? true: false;

    return (
        <Fragment>
            <Alert status={loginStatus} error={loginError} />
            <form className="row g-3 needs-validation reistration-form" noValidate onSubmit={submit}>
                <FormItem id="email" type="text" label="Email" feedback="Enter your email please" />
                <FormItem id="password" type="pasword" label="Password" feedback="enter your password please" />
                <SubmitButton title="Log in" disabled={isSuspended}/>
            </form>
        </Fragment>
    )
}

export default LoginForm;