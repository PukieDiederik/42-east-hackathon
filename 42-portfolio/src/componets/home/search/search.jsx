// import data from "../../../data/data.json";
// import { Link } from "react-router-dom";
// import { useEffect, useState, useContext } from "react";
// import { ContextUser } from "../../../context/contextUser";

export default function AllMatchNames({ search }) {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const { setUser } = useContext(ContextUser);

  // const putNameOnContext = (el) => {
  //   setUser(el.target);
  // };
  // useEffect(() => {
  //   const filteredUsers = data.filter((user) => {
  //     return user.login.toLowerCase().includes(search.toLowerCase());
  //   });
  //   if (filteredUsers.length === 0) {
  //     setError({ message: "No user found" });
  //   } else {
  //     setUsers(filteredUsers);
  //   }
  //   setLoading(false);
  // }, [search]);

  // if (loading) return <div className="loading">Loading...</div>;
  // if (error) return <div className="error">Error: {error.message}</div>;

  // return (
  //   <div className="all-match-names">
  //     {users.map((user) => (
  //       <div
  //         key={user.id}
  //         className="match-name"
  //         onClick={(el) => putNameOnContext(el)}
  //       >
  //         <Link to={`/${user.login}`}>
  //           <img src={user.image_url} alt={user.login} className="match-img" />
  //           <h2 className="match-login">{user.login}</h2>
  //         </Link>
  //       </div>
  //     ))}
  //   </div>
  // );
  return <div>AllMatchNames {search}</div>;
}
