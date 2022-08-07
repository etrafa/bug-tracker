import { useState, useEffect } from "react";
import { addTicketComment, useAuth } from "../../firebase/firebaseConfig";
import { useGetSingleDoc } from "../../customHooks/useGetSingleDoc";
import TicketPagination from "./TicketPagination";

const TicketComments = ({ ticketId, singleTicket }) => {
  //save comment input
  const [commentInput, setCommentInput] = useState("");
  const [isFormValidated, setIsFormValidated] = useState(false);

  //get current user
  const currentUser = useAuth();

  //add ticket to database on submit
  const submitHandler = (e) => {
    e.preventDefault();
    addTicketComment("users", currentUser, "tickets", ticketId, commentInput);
    setCommentInput("");
  };

  //get comments from db
  const { dbData } = useGetSingleDoc(
    `users/${currentUser?.uid}/tickets`,
    ticketId
  );

  //check validation
  useEffect(() => {
    commentInput.length === 0
      ? setIsFormValidated(false)
      : setIsFormValidated(true);
  }, [commentInput.length]);

  return (
    <div className="w-full lg:w-6/12 max-w-2xl text-center overflow-auto mt-12 mx-auto lg:border-l-2">
      <h2 className="font-bold text-lg">Comments</h2>
      {dbData?.comments === undefined ||
        (dbData?.comments?.lenght === 0 ? null : (
          <TicketPagination dbData={dbData} />
        ))}
      {/* //*CREATE A NEW COMMENT */}
      <textarea
        className="border w-11/12 h-12 pl-2 pt-2 text-sm mt-6"
        type="text"
        value={commentInput}
        placeholder="Write a comment."
        onChange={(e) => setCommentInput(e.target.value)} // save user's comment to state to send database
      />
      <button
        onClick={(e) => submitHandler(e)}
        type="submit"
        className={
          isFormValidated
            ? "bg-fbFillColor text-white font-bold w-28 h-8 mx-auto hover:bg-blue-400"
            : "bg-gray-700 pointer-events-none text-white font-bold w-28 h-8 mx-auto hover:bg-blue-400"
        }
      >
        Submit
      </button>
    </div>
  );
};

export default TicketComments;
