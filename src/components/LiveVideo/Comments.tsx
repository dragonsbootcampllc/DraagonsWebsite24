import React, { useState } from "react";
import { FaComments, FaPaperPlane } from "react-icons/fa";

interface Comment {
  id: number;
  name: string;
  img: string;
  comment: string;
}

interface CommentsProps {
  comments: Comment[];
  socket: WebSocket;
}

const Comments: React.FC<CommentsProps> = ({ comments, socket }) => {
  const [commentList, setCommentList] = useState(comments);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const newCommentObj = {
      id: commentList.length + 1,
      name: "New User",
      img: "https://via.placeholder.com/50",
      comment: newComment,
    };

    setCommentList([...commentList, newCommentObj]);
    setNewComment("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddComment();
    }
  };

  return (
    <div className="w-full h-screen py-5 px-4">
      <div className="bg-purple-800/20 p-4 rounded-3xl">
        <div className="flex items-center mb-4">
          <FaComments className="text-xl text-white mr-2" />
          <h2 className="text-xl font-bold text-white">Comments</h2>
        </div>
        <div className="h-96 overflow-y-auto mb-2">
          {commentList.map(({ id, name, img, comment }) => (
            <div key={id} className="flex mb-4">
              <img src={img} alt={name} className="w-12 h-12 rounded-full mr-4" />
              <div className="flex-1 mr-2 p-2 bg-white rounded-lg shadow-md">
                <h4 className="font-semibold text-black">{name}</h4>
                <p className="text-gray-700 break-words w-[229px]">{comment}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center p-2">
          <input
            type="text"
            className="flex-1 p-2 rounded-l-md border text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="p-2.5 bg-purple-500 text-xl text-white rounded-r-md"
            onClick={handleAddComment}
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
