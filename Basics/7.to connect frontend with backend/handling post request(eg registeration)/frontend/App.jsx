import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {  //onshubmit m call hoga ye function
    e.preventDefault();

    const response = await axios.post("http://localhost:3000/submit", {   //URL k side m object k andr data bhejte h server ko 
      name,
      age,
      city
    });

    console.log(response.data);
    alert(response.data.message);
  };

  return (
    <div>
      <h2>Frontend → Backend Connection</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
