import {Fragment, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deletePost, editPost} from "../../store/postsSlice";
import EditForm from "./EditForm/EditForm";
import CommentList from "./CommentList/CommentList";

const PostItem = ({post}) => {

    const [edit, setEdit] = useState(false);

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user) || {};

    const onEditClicked = (e) => {
        e.preventDefault();
        setEdit(true);
    }

    const onDeleteClicked = (e) => {
        e.preventDefault();
        dispatch(deletePost({id: post.id, page: 1}));
    }

    const buttons = (user.id === post.userId) ?
        <Fragment>
            <a href="#" onClick={onEditClicked} className="btn btn-primary">edit</a>
            <a href="#" onClick={onDeleteClicked} className="btn btn-primary">delete</a>
        </Fragment> : null;

        const content = (edit)?
            <EditForm post={post} edit={edit} setEdit={setEdit}/>
            :
            <Fragment>
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.text}</p>
                {buttons}
            </Fragment>

    return (
        <div className="card">
            <div className="card-body">
                {content}
                <CommentList post={post} user={user}/>
            </div>
        </div>
    )
}

export default PostItem;