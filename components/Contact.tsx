import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1240px] pt-20 mb-16 mx-auto p-4" id="contact">
      <h1 className="text-2xl font-bold text-center p-4">
        Let's combine forces
      </h1>
      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3 my-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="border shadow-lg p-3 my-3"
            type="email"
            placeholder="Email"
          />
        </div>
        <textarea
          className="border shadow-lg p-3 w-full"
          cols={30}
          rows={7}
          placeholder="Message"
        ></textarea>
        <button className="button__primary border shadow-lg p-3 w-50 mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
