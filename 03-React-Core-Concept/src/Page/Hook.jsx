import React from "react";
import useHook from "../Custom-hook/useHook";

const Hook = () => {

    const [name,nameOnChange] = useHook('')
    const [email,emailOnChange] = useHook('')
    const [pass,passOnChange] = useHook('')
    
  const formHandle = (e) => {
    e.preventDefault();
    console.log("Clicked",name,email,pass);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-6">
            Custom hook Form
          </h2>

          <form onSubmit={formHandle} className="space-y-4">
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                onChange={nameOnChange}
                defaultValue={name}
                placeholder="Enter your name"
                name="name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Email</label>
              <input
                type="email"
                onChange={emailOnChange}
                defaultValue={email}
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                onChange={passOnChange}
                placeholder="Enter password"
                className="input input-bordered w-full"
              />
            </div>

            <button className="btn btn-primary w-full mt-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hook;
