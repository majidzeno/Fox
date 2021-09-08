import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./AddPost.css";

const AddPost = () => {
  const name = useRef();
  const post = useRef();
  return (
    <div className="formContainer">
      <Form className="bootForm">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            ref={name}
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Post</Form.Label>
          <Form.Control ref={post} as="textarea" rows={3} />
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => {
            if (name.current.value === "") {
              alert("Please write your name!");
            } else if (post.current.value === "") {
              alert("You cant leave the post empty");
            } else {
              console.log(name.current.value);
              console.log(post.current.value);
              alert("Post Added");
            }
          }}
        >
          Add Post
        </Button>
      </Form>
    </div>
  );
};

export default AddPost;
