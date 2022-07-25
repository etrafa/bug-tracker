import React from "react";
import { useState } from "react";
import { useGetNestedSingleDoc } from "../../customHooks/useGetNestedSingleDoc";
import { addTicket, useAuth } from "../../firebase/firebaseConfig";

const TicketComments = ({ ticketId }) => {
  //save comment input
  const [commentInput, setCommentInput] = useState("");
  const [isFormValidated, setIsFormValidated] = useState(false);

  //get current user
  const currentUser = useAuth();

  //add ticket to database on submit
  const submitHandler = (e) => {
    e.preventDefault();
    addTicket("users", currentUser, "tickets", ticketId, commentInput);
  };

  console.log(currentUser?.uid);

  console.log(ticketId);

  //save user's comment input to send database
  const changeHandler = (e) => {
    setCommentInput(e.target.value);
    setIsFormValidated(true);
  };

  //show comments
  const { dbData } = useGetNestedSingleDoc(
    "users",
    currentUser,
    "tickets",
    ticketId
  );

  return (
    <div className="w-full lg:w-6/12 max-w-2xl text-center overflow-auto mt-12 mx-auto lg:border-l-2">
      <h2 className="font-bold text-lg">Comments</h2>

      {/* //* SHOW COMMENTS */}
      {dbData &&
        dbData?.comments?.map((singleComment) => {
          const { comment, commentOwner, createdAt } = singleComment;

          return (
            <section className="w-full lg:w-11/12 min-h-[5rem] bg-gray-50 mx-auto my-4">
              <header className="flex justify-end">
                <p className="mx-6 mt-2 text-gray-400 text-sm">
                  {commentOwner}
                </p>
                <p className="mx-6 mt-2 text-gray-400 text-sm">{createdAt}</p>
              </header>
              <article className="text-left m-4">{comment}</article>
            </section>
          );
        })}

      {/* //*CREATE A NEW COMMENT */}
      <textarea
        className="border w-11/12 h-12 pl-2 pt-2 text-sm mt-6"
        type="text"
        placeholder="Write a comment."
        onChange={(e) => changeHandler(e)} // save user's comment to state to send database
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
