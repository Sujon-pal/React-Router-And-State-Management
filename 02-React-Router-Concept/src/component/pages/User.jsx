import { useLoaderData } from "react-router-dom";

const User = () => {
  const users = useLoaderData();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        User List ({users.length})
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="card bg-base-100 shadow-xl border hover:shadow-2xl transition duration-300"
          >
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>

              <p>
                <span className="font-semibold">Username:</span>{" "}
                {user.username}
              </p>

              <p>
                <span className="font-semibold">Email:</span>{" "}
                {user.email}
              </p>

              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {user.phone}
              </p>

              <p>
                <span className="font-semibold">Website:</span>{" "}
                {user.website}
              </p>

              <p>
                <span className="font-semibold">Company:</span>{" "}
                {user.company.name}
              </p>

              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;