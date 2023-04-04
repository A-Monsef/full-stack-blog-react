import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { API_URL } from '../config/apiConstants';


const WritePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const user_id = JSON.parse(localStorage.getItem('user')).id
        if (!user_id) {
            console.error('User ID not found in local storage');
            return;
        }
        const data = new FormData();
        data.append('title', title);
        data.append('content', content);
        data.append('image', image);
        data.append('category_id', category === 'news' ? 1 : category === 'opinion' ? 2 : category === 'how-to' ? 3 : category === 'review' ? 4 : null);
        data.append('user_id', user_id);
        try {
            await axios.post(`${API_URL}/posts`, data);
            setMessage('Post successfully created!');
            window.scrollTo(0, 0);
            setError('');
            setTitle('');
            setContent('');
            setImage(null);
            setCategory('');
        } catch (err) {
            console.error(err);
            setMessage('');
            setError('Error creating post. Please try again.');
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };
    

    return (
        <Row>
            <Col md={10}>
                <Container className='d-block'>
                    <h1 className="text-center my-5">Write a Post</h1>
                    {message && <div className="alert alert-success">{message}</div>}
                    {error && <div className="alert alert-danger">{error}</div>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='my-4' controlId="title">
                            <Form.Label>Title:</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='my-4' controlId="content">
                            <Form.Label>Content:</Form.Label>
                            <div style={{ height: '300px', overflow: 'scroll' }}>
                                <ReactQuill style={{ height: '100%', border: 'none' }} value={content} onChange={setContent} />
                            </div>
                        </Form.Group>
                        <Form.Group className='my-4' controlId="image">
                            <Form.Label>Image:</Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={handleImageChange} placeholder="Select an image" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
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

export default WritePost;