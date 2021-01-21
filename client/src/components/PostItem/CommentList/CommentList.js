import {Fragment} from "react";
import CommentForm from "./CommentForm/CommentForm";
import CommentLayout from "./CommentLayout/CommentLayout";

const CommentList = ({post, user}) => {

    const {comments = []} = post;

    return (
        <Fragment>
            <CommentForm post={post} user={user}/>
            {comments.length !== 0 && comments.map(comment => (
                <CommentLayout>
                    <span className="badge rounded-pill bg-danger">{comment.login}</span>
                    {comment.text}
                </CommentLayout>
            ))}
        </Fragment>
    )
}

export default CommentList;