import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <br />
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        textComment="Awesome blog post!"
        imgAvatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00AM"
        textComment="This is so good."
        imgAvatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 5:00PM"
        textComment="So inspiring 😄"
        imgAvatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
