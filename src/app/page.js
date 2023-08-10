"use client";

import { PostOwner } from "@/components/PostOwner";
import { Reply } from "@/components/Reply";
import { comments } from "@/libs/comments";
import { Comment } from "@/components/Comment";
import Image from "next/image";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwner
          picSrc="/profileImages/pin2 .jpg"
          username="Pinnaree Prommitr 650610785"
          postText="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          likeNum={100}
        />

        {/* Comment Example */}

        {/* Reply Example */}
        {comments.map((comment) => (
          <Comment
            key={comment.commentText}
            userImagePath={comment.userImagePath}
            username={comment.username}
            commentText={comment.commentText}
            likeNum={comment.likeNum}
            replies={comment.replies}
          />
        ))}
      </div>
    </div>
  );
}
