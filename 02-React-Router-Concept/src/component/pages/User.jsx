import { Link, useLoaderData, useNavigate } from "react-router-dom";

const User = () => {
  const users = useLoaderData();
  const navegate = useNavigate();

  const handleChange = (id) =>{
    navegate(`/user/${id}`)

  }

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="card bg-base-100 shadow-xl border">
            <div className="card-body">
              <h2>
                <samp className="font-semibold ">Name : </samp>
                {user.name}
              </h2>
              <p>
                <span className="font-semibold">Email : </span>
                {user.email}
              </p>

              <div className="card-actions justify-end">
                <Link
                  to={`/user/${user.id}`}
                  className="btn btn-soft btn-info btn-sm"
                >
                  View Details
                </Link>
                <button onClick={() => handleChange(user.id)} className="btn btn-soft btn-info btn-sm">User Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
