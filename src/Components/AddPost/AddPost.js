import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { userAddPost } from "../Slices/rootSlice";
import "./AddPost.css";

const AddPost = () => {
  const dispatch = useDispatch();
  const name = useRef();
  const post = useRef();
  const postTitle = useRef();
  return (
    <div className="formContainer">
      <Form className="bootForm">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control ref={name} type="email" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Title</Form.Label>
          <Form.Control ref={postTitle} type="text" placeholder="Post Title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Post</Form.Label>
          <Form.Control
            ref={post}
            as="textarea"
            placeholder="Post Body"
            rows={3}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => {
            if (name.current.value === "") {
              alert("Please write your name!");
            } else if (postTitle.current.value === "") {
              alert("Please enter the title");
            } else if (post.current.value === "") {
              alert("You cant leave the post empty");
            } else {
              const final = {
                postId: Date.now(),
                thumbnailUrl: "https://via.placeholder.com/150/",
                url: "https://via.placeholder.com/600/",
                showComments: false,
                comments: [],
                title: postTitle.current.value,
                body: post.current.value,
                name: name.current.value,
              };
              dispatch(userAddPost(final));
              post.current.value = "";
              postTitle.current.value = "";
              name.current.value = "";
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
