import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const { loginWithEmailAndPassword } = useContext(AuthContext);

  const handelLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(password, email);

    loginWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result.user);
        const lastLogintime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastLogintime };
        fetch(`http://localhost:5000/user`, {
          method: 'PATCH',
          headers: {'content-type': 'application/json',},
          body: JSON.stringify(loginInfo),
        })
        .then(res => res.json())
          .then(data => {
          console.log(data)
        })
        
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handelLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
