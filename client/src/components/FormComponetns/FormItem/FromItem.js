import ItemLayout from "../ComponentLayout/ItemLayout";

const FormItem = ({id, type, label, feedback}) => (
    <ItemLayout>
            <label htmlFor={id} className="form-label">{label}</label>
            <input type={type} className="form-control" id={id} required />
            <div className="invalid-feedback">
                {feedback}
            </div>
    </ItemLayout>
)

export default FormItem;