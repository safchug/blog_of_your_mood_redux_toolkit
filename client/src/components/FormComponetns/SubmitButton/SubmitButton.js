import ItemLayout from "../ComponentLayout/ItemLayout";

import './style.css';

const SubmitButton = ({title, disabled}) => (
    <ItemLayout>
            <input type="submit"
                   className="btn btn-primary"
                   value={title}
                   disabled={disabled}
            />
    </ItemLayout>
)

export default SubmitButton;