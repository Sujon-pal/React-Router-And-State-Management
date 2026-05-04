import React from 'react';

const ControlledField = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-base-200">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-6">Register Form</h2>

          <form onSubmit={''} className="space-y-4">
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Email</label>
              <input
                type="email"
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

export default ControlledField;