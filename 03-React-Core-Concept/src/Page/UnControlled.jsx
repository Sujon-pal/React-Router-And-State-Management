import { useRef } from "react";

const UnControlled = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleFormData = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-6">
            {" "}
            Form uncontrolled
          </h2>

          <form onSubmit={handleFormData} className="space-y-4">
            <div>
              <label className="label">Email</label>
              <input
                required
                type="email"
                ref={emailRef}
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Password</label>
              <input
                required
                type="password"
                ref={passwordRef}
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

export default UnControlled;
