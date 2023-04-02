import React from 'react'
import styles from './SignIn.module.css'
import Signup from 'next/image'
const SignIn = () => {
  return (
    <div className={styles.container}>
      <p className={styles.register}>Don't have an account? Register now</p>
      <div className={styles.innercontainer}>
        <div className={styles.leftmain}>
          <div className={styles.leftbox}>
            <h2>Hey, hello</h2>
            <p>Enter your information while registering.</p>
            <div className="form">
              <input
                type="text"
                name=""
                id=""
                className={styles.username}
                placeholder="Enter username"
              />
              <input
                type="password"
                name=""
                id=""
                className={styles.password}
                placeholder="Password"
              />
              <div className={styles.flexmain}>
                <div className={styles.flex}>
                  <input type="checkbox" name="" id="" className={styles.checkbox} />
                  <p>Remember me</p>
                </div>
                <div>
                  <p>Forgot password?</p>
                </div>
              </div>
              <button type="submit" className={styles.signin}>
                Sign in
              </button>
              <button type="submit" className={styles.google}>
                Sign in with google
              </button>
            </div>
          </div>
        </div>
        <div className={styles.rightmain}>
          <img
            src="/images/signup.png"
            className={styles.signupimg}
            // width={250} height={200}
            alt="signup"
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn