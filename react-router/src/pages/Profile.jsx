import React from "react";
import { useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export default function Profile() {
  const { profileID } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p>{`Profile ID: ${profileID ?? "guest"}`}</p>
      <p>{`Search Params: ${searchParams.get("mode") ?? "none"}`}</p>
      {user ? (
        <div className="mt-4 space-y-2">
          <p>
            <strong>Signed in as:</strong> {user.email}
          </p>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <button
            onClick={() => setSearchParams({ user: user.name })}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Set user in Search Query
          </button>
          <button
            onClick={handleLogout}
            className="ml-2 px-4 py-2 bg-gray-700 text-white rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <p className="mt-4 text-red-500">Please log in to view your profile.</p>
      )}
    </div>
  );
}
