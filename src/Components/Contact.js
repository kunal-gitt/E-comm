import React, { useRef } from "react";
import classes from "./Contact.module.css";

const Contact = (props) => {
  const NameRef = useRef("");
  const EmailRef = useRef("");
  const PhoneRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();

    const details = {
      name: NameRef.current.value,
      email: EmailRef.current.value,
      phone: PhoneRef.current.value,
    };

    props.onAddDetails(details);
  };

  return (
    <form onSubmit={submitHandler} className={classes.control}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={NameRef} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={EmailRef}></input>
      </div>
      <div>
        <label htmlFor="phoneno">Phone no. </label>
        <input type="number" id="phoneno" ref={PhoneRef} />
      </div>
      <button className={classes.button}>Submit</button>
    </form>
  );
};

export default Contact;
