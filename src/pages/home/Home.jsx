import auth from "../../firebase/firebase.init";

const Home = () => {
  console.log(auth);
  return (
    <div>
      <h2>This is home</h2>
    </div>
  );
};

export default Home;
