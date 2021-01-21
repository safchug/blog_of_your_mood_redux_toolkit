import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addPost} from "../../../store/postsSlice";
import Alert from "./Alert/Alert";

const NewPostForm = () => {
    const [disabled, setDisabled] = useState(true);
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const addingStatus = useSelector(state => state.posts.addingStatus);
    const addingError = useSelector(state => state.posts.addingError);

    const changeText = (e)=> {
        setText(e.target.value);

        if(text.length === 0) {
            setDisabled(true);
        }

        if(text.length !== 0 && title.length !== 0) {
            setDisabled(false);
        }
    }

    const changeTitle = (e)=> {
        setTitle(e.target.value);

        if(title.length === 0) {
            setDisabled(true);
        }

        if(text.length !== 0 && title.length !== 0) {
            setDisabled(false);
        }
    }

    const submit = (e) => {
        e.preventDefault();
        dispatch(addPost({title, text}));
        setTitle('');
        setText('');
    }

    if(!user) return null;

    return(
        <form onSubmit={submit}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Add new post</h5>
                    <Alert addingError={addingError}/>
                    <input type="text" className="form-control"
                           onChange={changeTitle} value={title}
                           placeholder="title"/>
                    <textarea className="form-control" rows="5"
                              onChange={changeText} value={text}
                              placeholder="text of your post"></textarea>
                    <input type="submit" className="btn btn-primary"
                           disabled={disabled}
                           value="Add new post"/>
                </div>
            </div>
        </form>
    )
}

export default NewPostForm;