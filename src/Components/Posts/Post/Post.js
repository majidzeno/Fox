import React from "react";
import "./Post.css";

const Post = ({ post }) => {
  console.log(post);
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
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
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
              <a
                href="javascript:void(0)"
                class="ui-rect ui-bg-cover"
                style={{
                  backgroundImage:
                    "url('https://bootdey.com/img/Content/avatar/avatar3.png",
                }}
              ></a>
            </div>
            <div class="card-footer">
              <a
                href="javascript:void(0)"
                class="d-inline-block footer-text text-muted"
              >
                <small>
                  <strong>123</strong> Likes
                </small>
              </a>
              <a
                href="javascript:void(0)"
                class="d-inline-block text-muted footer-text ml-3"
              >
                <small>
                  <strong>12</strong> Comments
                </small>
              </a>
              <a
                href="javascript:void(0)"
                class="d-inline-block footer-text text-muted ml-3"
              >
                <small class="align-middle">Repost</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
