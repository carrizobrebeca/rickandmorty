import { useState } from "react";
import style from "./form.module.css";
import validation from "./validation";

function Form({login}) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <div className={style.imputContainer}>
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div className={style.imputContainer}>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
