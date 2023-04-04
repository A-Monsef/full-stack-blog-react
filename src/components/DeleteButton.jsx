import axios from 'axios';
import { Button } from 'react-bootstrap';
import { BsTrash } from 'react-icons/bs';
import React from 'react';
import { API_URL } from '../config/apiConstants';

const DeleteButton = ({ postId }) => {

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete(API_URL + '/posts/' + postId)
            .then(response => {
                console.log(response.data.message);
            })
            .catch(error => {
                console.log(error.response.data.message);
            });
    }

    return (
        <Button variant="danger" onClick={handleDelete}>
            <BsTrash /> Delete
        </Button>
    );
}

export default DeleteButton;