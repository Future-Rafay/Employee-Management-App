import React from "react";

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-2xl font-medium">
        Hello , <br />{" "}
        <span className="text-3xl font-semibold">
          {props.data?.name || "Admin"}👀🙌
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium hover:bg-red-800"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
