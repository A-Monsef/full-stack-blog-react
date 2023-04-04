import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { BsFillHandThumbsUpFill, BsFillHandThumbsDownFill, BsPencilSquare, BsTrash } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import Aside from '../components/Aside';
import axios from 'axios';
import { API_URL, FILE_URL } from '../config/apiConstants';
import { AuthContext } from '../App';
import DeleteButton from '../components/DeleteButton';


const Single = () => {
  const { user } = useContext(AuthContext);

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [post, setPost] = useState(null);
  const params = useParams();
  const [commentContent, setCommentContent] = useState('');


  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  //post comment

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    axios.post(API_URL + '/comments/' + params.id, {
      content: commentContent,
      post_id: post.id,
      user_id: user.id,
    })
      .then(response => {
        setPost({
          ...post,
          comments: [...post.comments, response.data.comment]
        });
        setCommentContent('');
        event.target.reset(); // <-- this line empties the form
      })
      .catch(error => {
        console.log(error);
      });
  };
  //post fetch
  useEffect(() => {
    axios.get(API_URL + '/posts/' + params.id)
      .then(response => {
        setPost(response.data.post);
      })
      .catch(error => {
        console.log(error.response);
      });
  }, []);

  return (
    <>
      {post &&
        <main className="py-5">
          <Container>
            <Row>
              <Col md={9}>
                <article>
                  <h1 className="fw-bold mb-4">{post.title}</h1>
                  <p className="lead mb-4 fs-6 fw-bold"><small>Posted by {post.user.username} on {post.created_at}</small></p>
                  <p className="fw-bold mb-4">Category: {post.category.title}.</p>
                  {post.image && <img src={`${FILE_URL}${post.image}`} className="img-fluid mb-5" alt={post.title} />}
                  <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                  <div className='d-flex justify-content-end'>
                    {user && post.user.id === user.id && (
                      <>
                        <Button className='me-2' variant="primary">
                          <Link style={{ color: 'white', textDecoration: 'none' }} to={`/editpost/${post.id}`}><BsPencilSquare /> Edit</Link>
                        </Button>
                        <DeleteButton postId={post.id} />
                      </>
                    )}
                  </div>
                  <div>
                    <button className="btn btn-primary me-2" onClick={handleLike}><BsFillHandThumbsUpFill /> {likes}</button>
                    <button className="btn btn-danger" onClick={handleDislike}><BsFillHandThumbsDownFill /> {dislikes}</button>
                  </div>
                  <div className="border-top border-secondary my-5"></div>
                  <h3 className="fw-bold mb-3">Comments</h3>
                  {post.comments.length === 0 && <p> Be the first to comment on this article.</p>}
                  {post.comments.length > 0 && (
                    <ul className="list-unstyled">
                      {post.comments.map((comment) => (
                        <li key={comment.id} className="mb-3">
                          <p className="fw-bold mb-0">{comment.user.username}</p>
                          <p className="mb-0">{comment.content}</p>
                          <small>Posted on {comment.created_at}</small>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Form onSubmit={handleCommentSubmit}>
                    <Form.Group className="mb-3" controlId="comment">
                      <Form.Label>Comment</Form.Label>
                      <Form.Control as="textarea" rows={3} placeholder="Add your comment"
                        value={commentContent} onChange={(event) => setCommentContent(event.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Send comment</Button>
                  </Form>
                </article>
              </Col>
              <Col md={3}>
                <Aside />
              </Col>
            </Row>
          </Container>
        </main>
      }
    </>
  );
};
export default Single;
