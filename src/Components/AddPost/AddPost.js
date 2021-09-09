import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { userAddPost } from "../Slices/rootSlice";
import "./AddPost.css";

const AddPost = () => {
  const dispatch = useDispatch("");
  const name = useRef("");
  const post = useRef("");
  const postTitle = useRef("");
  let [image, setImage] = useState("");
  let [pictureBool, setPictureBool] = useState(false);
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
        <div className="form-check">
          <input
            className="form-check-input"
            checked={pictureBool}
            onChange={(e) => setPictureBool(e.target.checked)}
            type="checkbox"
          />
          <label className="form-check-label" for="flexCheckDefault">
            check to add a picture
          </label>
        </div>
        {pictureBool ? (
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Image url</Form.Label>
            <Form.Control
              value={image}
              type="text"
              placeholder="Image URL"
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
          </Form.Group>
        ) : null}
        <Button
          variant="primary"
          onClick={() => {
            if (name.current.value === "") {
              alert("Please write your name!");
            } else if (postTitle.current.value === "") {
              alert("Please enter the title");
            } else if (post.current.value === "") {
              alert("You cant leave the post empty");
            } else if (image === "" && pictureBool === true) {
              alert("Please enter the image url or uncheck the bos");
            } else {
              console.log(pictureBool);
              const final = {
                postId: Date.now(),
                thumbnailUrl: "https://via.placeholder.com/150/",
                url: image,
                showComments: false,
                comments: [],
                title: postTitle.current.value,
                body: post.current.value,
                name: name.current.value,
              };
              console.log(final);

              dispatch(userAddPost(final));
              post.current.value = "";
              postTitle.current.value = "";
              name.current.value = "";
              setImage("");
              alert("Post Added");
            }
            setPictureBool(false);
          }}
        >
          Add Post
        </Button>
      </Form>
    </div>
  );
};

export default AddPost;
