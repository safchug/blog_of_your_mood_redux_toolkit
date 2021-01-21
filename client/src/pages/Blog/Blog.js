import { useSelector, useDispatch } from 'react-redux';
import {Fragment, useEffect} from 'react';
import api from "../../services/api";
import PostItem from "../../components/PostItem/PostItem";
import BlogLayout from "../../components/BlogLayout/BlogLayout";
import Menu from "../../components/Menu/Menu";
import {fetchPosts} from '../../store/postsSlice';
import Spiner from "../../components/Spiner/Spiner";
import NewPostForm from "../../components/NewPost/NewPostForm/NewPostForm";

const Blog = () => {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.postsList) || [];
    const status = useSelector(state => state.posts.status);
    const error = useSelector(state => state.posts.error);

    useEffect(()=> {
        if (status === 'idle') {
            dispatch(fetchPosts());
        }
    }, [dispatch]);

    return (
        <BlogLayout>
            { status === 'loading' ?
                <Spiner/>
                :
                <Fragment>
                    <NewPostForm />
                    {posts.map(post => (
                    <PostItem post={post} key={post.id} />
                    ))}
                </Fragment>

            }
        </BlogLayout>
    )
}

export default Blog;