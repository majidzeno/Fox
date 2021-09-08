import React from "react";
import Comment from "../../Comment/Comment";
import { useSelector, useDispatch } from "react-redux";
import { tooglePostComments } from "../../Slices/rootSlice";
import "./Post.css";

const Post = ({ post }) => {
  let showComments = useSelector((state) => {
    return state.posts.find((cuurentPost) => {
      return cuurentPost.postId === post.postId;
    }).showComments;
  });
  const dispatch = useDispatch();

  return (
    <div class="container posts-content custContainer">
      <div class="row">
        <div class="col-lg-12">
          <div class="card mb-4">
            <div class="card-body">
              <div class="media mb-3">
                <div className="stats">
                  <div>
                    <img
                      src={post.thumbnailUrl}
                      class="d-block ui-w-40 rounded-circle"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <div class="media-body ml-3">
                      {post.name}
                      <div class="text-muted small">3 days ago</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post">
                <p>{post.body}</p>
              </div>
              <p
                class="ui-rect ui-bg-cover"
                style={{
                  backgroundImage: `url('${post.url}')`,
                }}
              ></p>
            </div>
            <div class="card-footer">
              <div className="stats">
                <p
                  class="d-inline-block footer-text text-muted"
                  style={{ textDecoration: "underline" }}
                >
                  <small>
                    <strong>123</strong> Likes
                  </small>
                </p>
                <button
                  onClick={() => {
                    dispatch(tooglePostComments(post.postId));
                  }}
                  class="d-inline-block text-muted footer-text ml-3"
                  style={{ textDecoration: "underline" }}
                >
                  <small>
                    <strong>{post.comments.length}</strong> Comments
                  </small>
                </button>
                <p
                  class="d-inline-block footer-text text-muted ml-3"
                  style={{ textDecoration: "underline" }}
                >
                  <small class="align-middle">Repost</small>
                </p>
              </div>
              {showComments
                ? post.comments.map((comment) => {
                    return <Comment comment={comment} />;
                  })
                : null}
              <div className="addCommentbtn">
                <div>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo"
                    >
                      Add Movie
                    </button>
                  </div>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            New Movie
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="mb-3">
                              <label
                                htmlFor="user-email"
                                className="col-form-label"
                              >
                                email
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="user-email"
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="comment-body"
                                className="col-form-label"
                              >
                                comment
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="comment-body"
                              />
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            data-bs-dismiss="modal"
                            className="btn btn-primary"
                          >
                            Add Comment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
