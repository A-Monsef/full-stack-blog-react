
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { API_URL, FILE_URL } from '../config/apiConstants';
import axios from 'axios';

const Home = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(API_URL + '/posts')
      .then(response => {
        setPosts(response.data.posts);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
 // divide the content to make a summary to home page
  function createSummary(content) {
    // Split the content into an array of characters
    const characters = content.split('');

    // If there are fewer than 250 characters, return the entire content
    if (characters.length <= 250) {
      return content;
    }

    // Extract the first 250 characters and join them together
    const summary = characters.slice(0, 250).join('');

    // Add an ellipsis (...) to the end of the summary
    return summary + '...';
  }


  return (
    <div className="text-center">
      <div class="custom-shape-divider text-light p-5" style={{ backgroundColor: '#145369' }}>
        <h1>¡ Membership </h1>
        <h2>Blog !</h2>
        <p>Welcome to my blog!</p>
        <div class="custom-shape-divider-bottom-1678717925">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="shape-fill"></path>
          </svg>
        </div>
      </div>
      <header className="d-flex flex-column p-5 justify-content-center align-items-center">
        <h2 className="font-serif text-5xl font-bold">Latest Post</h2>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, nesciunt?</p>
        <hr style={{ width: "25%", height: "4px", fontWeight: "bold", borderBottom: "4px solid #145369", margin: "2rem auto" }} />
      </header>
      <Container className='home'>
        <Row className='articles gy-5 '>
          {posts.map((post) => (
            <Col className='d-flex justify-content-center align-items-center' xs={12} md={6} sm={4} lg={4} xl={4} key={post.id}>
              <div className='article w-75 d-flex flex-column  align-items-center'>
                <div className='img mb-3'>
                  <img className='img-fluid' style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 5px 10px 30px 5px' }} src={`${FILE_URL}${post.image}`} alt='' />
                </div>
                <div className='content'>
                  <Link className='link' to={`/single/${post.id}`}>
                    <h1 className="mb-3 fs-2" >{post.title}</h1>
                    <div className="" dangerouslySetInnerHTML={{ __html: createSummary(post.content) }}></div>
                    <Link to={`/single/${post.id}`}>
                      <button className="btn btn-primary " type="submit">Read More</button>
                    </Link>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>

  )
}

export default Home