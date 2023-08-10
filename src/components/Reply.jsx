import Image from "next/image";

export const Reply = ({ userImagePath, username, replyText, likeNum }) => {
  console.log(likeNum);
  return (
    <div>
      <div className="d-flex gap-2 my-2 ps-5">
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
          <span>{replyText}</span>
          <div
            className={likeNum ? "d-flex align-items-center gap-1" : "d-none"}
          >
            <img src="/like.svg" width={20}></img>
            <span className="text-muted">{likeNum} คน</span>
          </div>
        </div>
      </div>
    </div>
  );
};
