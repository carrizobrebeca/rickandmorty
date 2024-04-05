import style from "./form.module.css";

function Form() {
  return (
    <div className={style.container}>
      <form>
        <div className={style.imputContainer}>
          <label htmlFor="">Email</label>
          <input type="text" name="email" placeholder="Email" id="" />
        </div>

        <div className={style.imputContainer}>
          <label htmlFor="">Password</label>
          <input type="password" name="password" placeholder="Password" id="" />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
