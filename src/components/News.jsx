import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL, FILE_URL } from '../config/apiConstants';



function News() {
    const [post, setPost] = useState([]);
    const params = useParams();

    useEffect(() => {
        axios.get(API_URL + '/categories/' + params.id + '/posts')
            .then(response => {
                setPost(response.data.posts);
            })
            .catch(error => {
                console.log(error.response);
            });
    }, []);

    return (
        <div>
            {post.length > 0 ? (
                <div>
                    <h1>News</h1>
                    {post.map((post) => (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            {post.image && <img src={`${FILE_URL}${post.image}`} className="img-fluid mb-5" alt={post.title} />}
                            <p>{post.content}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default News;