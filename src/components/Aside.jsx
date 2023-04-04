import React from 'react'
import { Form, Button, Card } from 'react-bootstrap';
const Aside = () => {
    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus elementum sagittis vitae et leo duis ut. Sit amet purus gravida quis blandit turpis. Consequat semper viverra nam libero justo laoreet sit amet. Interdum consectetur libero id faucibus nisl tincidunt eget.",
            img: "https://images.pexels.com/photos/9507099/pexels-photo-9507099.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

        },
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus elementum sagittis vitae et leo duis ut. Sit amet purus gravida quis blandit turpis. Consequat semper viverra nam libero justo laoreet sit amet. Interdum consectetur libero id faucibus nisl tincidunt eget.",
            img: "https://images.pexels.com/photos/9892446/pexels-photo-9892446.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

        },
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus elementum sagittis vitae et leo duis ut. Sit amet purus gravida quis blandit turpis. Consequat semper viverra nam libero justo laoreet sit amet. Interdum consectetur libero id faucibus nisl tincidunt eget.",
            img: "https://images.pexels.com/photos/4993253/pexels-photo-4993253.jpeg?auto=compress&cs=tinysrgb&w=600",

        },
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus elementum sagittis vitae et leo duis ut. Sit amet purus gravida quis blandit turpis. Consequat semper viverra nam libero justo laoreet sit amet. Interdum consectetur libero id faucibus nisl tincidunt eget.",
            img: "https://images.pexels.com/photos/5855160/pexels-photo-5855160.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
    ]
  return (
      <aside>
          <h3 className="fw-bold mb-3">Popular Articles</h3>
          {posts.slice(0, 3).map((post) => (
              <Card key={post.id}>
                  <Card.Body>
                      <Card.Img
                          variant="top"
                          src={post.img}
                          style={{ maxWidth: "250px", maxHeight: "220px" }}
                      />
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text>{post.desc.substring(0, 100)}</Card.Text>
                  </Card.Body>
              </Card>
          ))}
          <h3 className="fw-bold mb-3 mt-3">Suscription to the blog</h3>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                      type="email"
                      placeholder="email to subscribe !"
                      required
                  />
              </Form.Group>
              <Button variant="primary" type="submit">
                  Subscribe
              </Button>
          </Form>
      </aside>

  )
}

export default Aside