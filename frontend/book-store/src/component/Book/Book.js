import { Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import React from 'react'


const Book = (props) => {
    const { _id, name, author, description, price, image } = props.book;
  return (
    <div className='card'>
    <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      <Button>Update</Button>
      <Button>Delete</Button>
      
    </div>
  )
}

export default Book
