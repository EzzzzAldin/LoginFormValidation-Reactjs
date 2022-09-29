import Welcome from "./Welcome";
import Card from "./UI/Card";
import classes from "./Login.module.css";
import useInput from "../hooks/use-input";

const Login = () => {
  const {
    value: enterdEmail,
    valueIsValid: emailIsValid,
    hasError: emailInvalid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset,
  } = useInput((value) => value.includes("@"));

  const {
    value: enterdPassword,
    valueIsValid: passwordIsValid,
    hasError: passwordInvalid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.length >= 6);

  let formIsvalid = false;

  if (emailIsValid && passwordIsValid) formIsvalid = true;

  const loginHandler = (event) => {
    event.preventDefault();

    if (!formIsvalid) return;

    // Empty value Of Input
    reset();
    resetPassword();
  };

  let emailClassInvalid = emailInvalid ? "error" : "form-input";

  let passwordClassInvalid = passwordInvalid ? "error" : "form-input";

  return (
    <>
      <Welcome />
      <Card>
        <form className={classes.login} onSubmit={loginHandler}>
          <div className={classes.inputs}>
            <div className={classes[emailClassInvalid]}>
              <input
                type="text"
                placeholder="phone number or username, email"
                value={enterdEmail}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
              {emailInvalid && (
                <p className={classes["text-error"]}>Must Be Valid Email.</p>
              )}
            </div>
            <div className={classes[passwordClassInvalid]}>
              <input
                type="password"
                placeholder="Password"
                value={enterdPassword}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
              />
              {passwordInvalid && (
                <p className={classes["text-error"]}>
                  Must be Bigger Than 5 words.
                </p>
              )}
            </div>
          </div>
          <div className={classes.check}>
            <input
              type="checkbox"
              name="remember"
              value="Remember for 30 days"
            />
            <p>Forget Password</p>
          </div>
          <button>Sign in</button>
          <button className={classes.create}>Create Account</button>
        </form>
      </Card>
    </>
  );
};

export default Login;
