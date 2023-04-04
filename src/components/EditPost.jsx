import React, { useState, useEffect, useContext } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_URL } from '../config/apiConstants';
import AuthContext from '../context/AuthContext';



const EditPost = () => {
    const [id, setId] = useState("");
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState("");
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const { user } = useContext(AuthContext);
    const params = useParams();
    

    useEffect(() => {
        axios.get(API_URL + "/posts/" + params.id)
            .then(response => {
                setId(response.data.post.id)
                setTitle(response.data.post.title);
                setContent(response.data.post.content);
                setCategory(response?.data?.post?.category?.title?.toLowerCase() || '');
            })

    }, []);

    const handleSubmit = (event) => {
        
        event.preventDefault();
        const formData = new FormData();
        const user = JSON.parse(localStorage.getItem('user'));
    
        formData.append('title', title);
        formData.append('content', content);
        formData.append('category_id', category === 'news' ? 1 : category === 'opinion' ? 2 : category === 'how-to' ? 3 : category === 'review' ? 4 : null);
        formData.append('user_id', String(user.id));


        if (image) {
            formData.append('image', image);
        }

        axios.post(API_URL + `/posts/` + params.id, formData)
            .then(response => {
                setMessage(response.data.message);
                window.scrollTo(0, 0);
            })
            .catch(error => {
                setError(error.response.data.message);
            });
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    return (
        <Row>
            <Col md={10}>
                <Container className='d-block'>
                    <h1 className="text-center my-5">Edit Post</h1>
                    {message && <div className="alert alert-success">{message}</div>}
                    {error && <div className="alert alert-danger">{error}</div>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='my-4' controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='my-4' controlId="content">
                            <Form.Label>Content</Form.Label>
                            <div style={{ height: '300px', overflow: 'scroll' }}>
                                <ReactQuill style={{ height: '100%', border: 'none' }} value={content} onChange={setContent} />
                            </div>
                        </Form.Group>
                        <Form.Group className='my-4' controlId="image">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Update</Button>
                    </Form>
                </Container>
            </Col>
            <Col md={2}>
                <Container className=' d-block'>
                    <div className="  mb-4 my-5" >
                        <h2 className='text-center my-5 p-3'>Category</h2>
                        <Form.Group className='m-5'>
                            {['News', 'Opinion', 'How-to', 'Review'].map((categoryOption) => (
                                <Form.Check
                                    key={categoryOption}
                                    type="radio"
                                    name="category"
                                    label={categoryOption}
                                    value={categoryOption.toLowerCase()}
                                    checked={category === categoryOption.toLowerCase()}
                                    onChange={() => setCategory(categoryOption.toLowerCase())}
                                />
                            ))}
                        </Form.Group>
                    </div>
                </Container>
            </Col>
        </Row>
    );
};

export default EditPost;
