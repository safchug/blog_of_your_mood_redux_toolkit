import ItemLayout from "../ComponentLayout/ItemLayout";

const Alert = ({status, error}) => {
    let content = null;

    if(status === 'success') {
        content = <div className="row justify-content-md-center">
            <div className="col-md-6">
            <div className="alert alert-primary" role="alert">
            You have been registered successfuly
        </div>
        </div>
        </div>;
    } else if (error) {
        content = <div className="row justify-content-md-center">
            <div className="col-md-6">
            <div className="alert alert-warning" role="alert">
                {error}
            </div>
        </div>
        </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Alert;