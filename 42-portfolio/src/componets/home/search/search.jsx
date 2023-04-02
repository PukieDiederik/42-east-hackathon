// import data from "../../../data/data.json";
// import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { ContextUser } from "../../../context/contextUser";

export default function AllMatchNames({ search }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`http://localhost:4000/user/${search}`, {
          method: "GET",
          withCredentials: true,
          crossorigin: true,
          mode: "cors",
        });
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        setUser(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, [search]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  return <div className="all-match-names">
    {user && <Navigate to={`/${user.user_id}`} />}
  </div>;
}
