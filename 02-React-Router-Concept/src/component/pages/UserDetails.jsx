import { useLoaderData, Link } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
      <div className="card w-full max-w-2xl bg-base-100 shadow-2xl border">
        <div className="card-body">
          <div className="flex items-center gap-4 mb-6">
            <div className="avatar placeholder">
              <div className="bg-primary text-primary-content rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-2xl font-bold">
                  {user.name.charAt(0)}
                </span>
              </div>
            </div>

            <div>
              <h2 className="card-title text-3xl">{user.name}</h2>
              <p className="text-gray-500">@{user.username}</p>
            </div>
          </div>

          <div className="space-y-3">
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Website:</strong> {user.website}
            </p>
            <p>
              <strong>Company:</strong> {user.company.name}
            </p>
            <p>
              <strong>City:</strong> {user.address.city}
            </p>
            <p>
              <strong>Street:</strong> {user.address.street}
            </p>
          </div>

          <div className="card-actions justify-end mt-6">
            <Link to="/user" className="btn btn-outline">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
