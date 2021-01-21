import {useState} from "react";
import CommentLayout from "../CommentLayout/CommentLayout";
import {useDispatch, useSelector} from "react-redux";
import {addComment} from "../../../../store/postsSlice";

const CommentForm = ({user, post}) => {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const changeText = (e)=> {
        setText(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();

        const comment = {text, login: user.login};

        dispatch(addComment({id: post.id, comment}));

        setText('');
    }

    if (user) return (
        <CommentLayout>
            <form onSubmit={submit}>
                <textarea className="form-control" rows="2"
                      onChange={changeText} value={text}
                      placeholder="Add a comment here"></textarea>
                <input type="submit" className="btn btn-secondary btn-sm"
                       value="Add comment"/>
            </form>
        </CommentLayout>
    )

    return null;
}

export default CommentForm;