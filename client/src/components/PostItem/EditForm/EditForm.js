import {useDispatch, useSelector} from "react-redux";
import {editPost} from "../../../store/postsSlice";
import {useState} from "react";

const EditForm = ({post, edit, setEdit}) => {

    const [text, setText] = useState(post.text);
    const [title, setTitle] = useState(post.title);

    const dispatch = useDispatch();

    const onCanselClicked = (e) => {
        e.preventDefault();
        setEdit(!edit);
    }

    const changeText = (e)=> {
        setText(e.target.value);
    }

    const changeTitle = (e)=> {
        setTitle(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();

        const  postData = {text, title};
        console.log('post.id', post.id);
        const payload = {id: post.id, post: postData};

        dispatch(editPost(payload));

        setEdit(false);
    }

    return (
        <form onSubmit={submit}>
            <input type="text" className="form-control"
                   onChange={changeTitle} value={title}
                   placeholder="title"/>
            <textarea className="form-control" rows="5"
                      onChange={changeText} value={text}
                      placeholder="text of your post"></textarea>
            <input type="submit" className="btn btn-primary"
                   value="Save"/>
            <a href="#" onClick={onCanselClicked} className="btn btn-primary">Cansel</a>
        </form>
    )
}

export default EditForm;