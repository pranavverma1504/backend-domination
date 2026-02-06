import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user, loading } = useAuth();

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome {user.name}</h1>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <h1>Please login</h1>
      )}
    </div>
  );
};

export default Home;
