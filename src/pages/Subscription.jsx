import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheck } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

const Subscription = () => {
    return (
        <div>
            <header class="flex flex-col py-8 mt-8 mb-12 space-y-6 text-center">
                <h2 class="font-serif text-5xl font-bold">Membership</h2>
                <hr style={{ width: "50%", height: "2px", fontWeight: "bold", borderBottom: "4px solid #145369", margin: "2rem auto" }} />
            </header>
            <div className="container mt-4 d-flex justify-content-center">
                <div className="row">
                    <div className="col-sm-4">
                        <Card className="text-center">
                            <Card.Header>
                                <h3>Monthly</h3>
                            </Card.Header>
                            <Card.Body>
                                <h1>$10</h1>
                                <p>Access to the blog for 1 month</p>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <FaCheck className="text-success me-2" />
                                        Access to premium content
                                    </li>
                                    <li className="mb-2">
                                        <FaCheck className="text-success me-2" />
                                        Exclusive member events
                                    </li>
                                    <li className="mb-2">
                                        <FaTimes className="text-success me-2 text-danger" />
                                        Weekly newsletters
                                    </li>
                                    <li className="mb-2">
                                        <FaTimes className="text-success me-2 text-danger" />
                                        Discounts on events and merchandise
                                    </li>
                                </ul>
                                <Button variant="primary">Subscribe</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4">
                        <Card className="text-center">
                            <Card.Header>
                                <h3>Yearly</h3>
                            </Card.Header>
                            <Card.Body>
                                <h1>$100</h1>
                                <p>Access to the blog for 1 year</p>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <FaCheck className="text-success me-2" />
                                        Access to premium content
                                    </li>
                                    <li className="mb-2">
                                        <FaCheck className="text-success me-2" />
                                        Exclusive member events
                                    </li>
                                    <li className="mb-2">
                                        <FaCheck className="text-success me-2" />
                                        Weekly newsletters
                                    </li>
                                    <li className="mb-2">
                                        <FaTimes className="text-success me-2 text-danger" />
                                        Discounts on events and merchandise
                                    </li>
                                </ul>
                                <Button variant="primary">Subscribe</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4">
                        <Card className="text-center">
                            <Card.Header>
                                <h3>Lifetime</h3>
                            </Card.Header>
                            <Card.Body>
                                <h1>$500</h1>
                                <p>Unlimited access to the blog</p>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <FaCheck className="text-success me-2" />
                                        Access to premium content
                                    </li>
                                    <li className="mb-2">
                                        <FaCheck className="text-success me-2" />
                                        Exclusive member events
                                    </li>
                                    <li className="mb-2">
                                        <FaCheck className="text-success me-2" />
                                        Weekly newsletters
                                    </li>
                                    <li className="mb-2">
                                        <FaCheck className="text-success me-2" />
                                        Discounts on events and merchandise
                                    </li>
                                </ul>
                                <Button variant="primary">Subscribe</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;