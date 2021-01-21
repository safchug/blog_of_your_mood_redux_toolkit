const Alert = ({addingError}) => {
    let content = null;

    if (addingError) {
        content = <div className="alert alert-warning" role="alert">
                    {addingError}
                </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Alert;