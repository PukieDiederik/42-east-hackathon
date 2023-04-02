// import data from "../../../data/data.json";
// import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import ContextUser from "../../../context/contextUser";

export default function AllMatchNames({ search }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const { setUser } = useContext(ContextUser);
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
        setUserData(data);
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

  if (loading) return <div className="loading"></div>;
  if (error) return <div className="error">Error: {error.message}</div>;
  if (!userData) return <div className="no-user">No user found</div>;
  return <div className="all-match-names">
    {userData && <Navigate to={`/${userData.user_id}`} />}
  </div>;
}
