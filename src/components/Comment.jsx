import Image from "next/image";
import { Reply } from "./Reply";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  console.log(replies);

  return (
    <div>
      <div className="d-flex gap-2 my-2">
        <img
          src={userImagePath}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <span className="fw-semibold">{username}</span>
          <br />
          <span>{commentText}</span>
          <div
            className={likeNum ? "d-flex align-items-center gap-1" : "d-none"}
          >
            <img src="/like.svg" width={20}></img>
            <span className="text-muted">{likeNum} คน</span>
          </div>
        </div>
      </div>
      <div>
        {replies &&
          replies.map((reply) => (
            <Reply
              key={reply.replyText}
              userImagePath={reply.userImagePath}
              username={reply.username}
              replyText={reply.replyText}
              likeNum={reply.likeNum}
            />
          ))}
      </div>
    </div>
  );
};
