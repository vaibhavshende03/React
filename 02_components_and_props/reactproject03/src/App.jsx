import "./App.css";
import UserCard from "./components/UserCard";
import Alexpic from "./assets/alexpic.png";
import Sophiapic from "./assets/Sophia.png";
import Ethanpic from "./assets/Ethan.png";
import Emmapic from "./assets/Emma.png";

const userDetails = {
  user1: { name: "Alex", pic: Alexpic, desc: "Back-End Developer" },

  user2: { name: "Sophia", pic: Sophiapic, desc: "Front-End Developer" },
  user3: { name: "Ethan", pic: Ethanpic, desc: "Software Enginner" },
  user4: { name: "Emma", pic: Emmapic, desc: "Software Developer" },
};
function App() {
  return (
    <div className="container">
      <UserCard
        name={userDetails.user3.name}
        pic={userDetails.user3.pic}
        desc={userDetails.user3.desc}
        style={{
          "border-radius": "10px",
          "box-shadow": "1px 5px 5px #8f8d8dff",
        }}
      />
      <UserCard
        name={userDetails.user4.name}
        pic={userDetails.user4.pic}
        desc={userDetails.user4.desc}
        style={{
          "border-radius": "10px",
          "box-shadow": "1px 5px 5px #8f8d8dff",
        }}
      />
      <UserCard
        name={userDetails.user1.name}
        pic={userDetails.user1.pic}
        desc={userDetails.user1.desc}
        style={{
          "border-radius": "10px",
          "box-shadow": "1px 5px 5px #8f8d8dff",
        }}
      />
      <UserCard
        name={userDetails.user2.name}
        pic={userDetails.user2.pic}
        desc={userDetails.user2.desc}
        style={{
          "border-radius": "10px",
          "box-shadow": "1px 5px 5px #8f8d8dff",
        }}
      />
    </div>
  );
}

export default App;
