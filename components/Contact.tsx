import React, { useState } from "react";
import { ContactFormResponse, ContactFromData } from "../pages/api/contact";

const Contact = () => {
  const [values, setValues] = useState<ContactFromData>({
    email: "",
    message: "",
    name: "",
  });

  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const { email, message, name } = values;

    if (!!email && !!message && !!name) {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const responseBody: ContactFormResponse = await response.json();

      if (responseBody.success) {
        console.log("clearing form");
        setValues({ email: "", message: "", name: "" });
      } else {
        setError("Formulář se nepodařilo odeslat.");
      }
    }
  };

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="max-w-[1240px] pt-20 mb-16 mx-auto p-4" id="contact">
      <h1 className="text-2xl font-bold text-center p-4">
        Let's combine forces
      </h1>
      <form className="max-w-[600px] m-auto" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3 my-3"
            type="text"
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={onChange}
          />
          <input
            className="border shadow-lg p-3 my-3"
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={onChange}
          />
        </div>
        <textarea
          className="border shadow-lg p-3 w-full"
          cols={30}
          rows={7}
          placeholder="Message"
          name="message"
          value={values.message}
          onChange={onChange}
        ></textarea>
        <button className="button__primary border shadow-lg p-3 w-50 mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
