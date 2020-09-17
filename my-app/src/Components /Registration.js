import React, { useState } from "react";

const RegistrationForm = () => {
  const [userData, setUserData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
  };

  changeHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="username" name="username" />
        <input type="password " name="password" />
      </form>
    </div>
  );
};

export default RegistrationForm;
