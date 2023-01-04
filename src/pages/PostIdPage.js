import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const params = useParams();
    const [fetchPostByID, isLoading, error] = useFetching(
        async () => {
            const response = await PostService.getById(params.id)
            setPost(response.data)
        }
    )
    const [fetchComments, isCommentsLoading, commentsError] = useFetching(
        async () => {
            const response = await PostService.getCommentsById(params.id)
            setComments(response.data)
        }
    )

    useEffect(() => {
        fetchPostByID()
        fetchComments()
    }, [])

    return (
        <div>
            {
                isLoading
                    ? <Loader/>
                    : <h1>Страница поста {post.id} {post.title}</h1>
            }
            <h1>Комментарии</h1>
            {
                isCommentsLoading
                    ? <Loader/>
                    : <div>
                        {comments.map(
                            comment => <div key={comment.id}  style={{marginBottom: 20}}>
                                <strong>{comment.email}</strong>
                                <p>{comment.body}</p>
                            </div>
                        )}
                    </div>
            }
        </div>
    )
};

export default PostIdPage;
