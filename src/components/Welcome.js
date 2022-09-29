import classes from "./Welcome.module.css";
import pic from "../assets/37bf45f6-ca87-45df-91ee-7dbbb7c5532a.jpg";

const Welcome = () => {
  return (
    <div className={classes["welcom-form"]}>
      <h1>Welcome back</h1>
      <p>Join the world's largist community</p>
      <div className={classes.recent}>
        <h3>Recent logins</h3>
        <div className={classes.cards}>
          <div className={classes.card}>
            <img src={pic} alt="" />
            <p>Ezz Aldin</p>
            <span className={classes.point}>.</span>
            <span className={classes["point-two"]}>.</span>
            <span className={classes["point-three"]}>.</span>
          </div>
          <div className={classes.card}>
            <img src={pic} alt="" />
            <p>Ezz Aldin</p>
            <span className={classes.point}>.</span>
            <span className={classes["point-two"]}>.</span>
            <span className={classes["point-three"]}>.</span>
          </div>
          <div className={classes.card}>
            <img src={pic} alt="" />
            <p>Ezz Aldin</p>
            <span className={classes.point}>.</span>
            <span className={classes["point-two"]}>.</span>
            <span className={classes["point-three"]}>.</span>
          </div>
          <div className={classes.add}>
            <div>+</div>
            <p>Add Account</p>
          </div>
          <div className={classes.sign}>Sign Up Help.</div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Welcome;
