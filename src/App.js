import "./App.css";
import Card from "./components/Card";
import Buttons from "./components/Buttons.js";
import Intro from "./components/Intro.js";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";

/* function App() {
  const gridBox = {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
  };
  return (
    <div>
      <Buttons />
      <div style={gridBox}>
        <Card name="Mahesh Barak" email="mahesh@gmail.com" image={img1} />
        <Card name="Gourav Barak" email="gourav@gmail.com" image={img2} />
        <Card name="Mahesh Barak" email="mahesh@gmail.com" image={img1} />
        <Card name="Gourav Barak" email="gourav@gmail.com" image={img2} />
        <Card name="Mahesh Barak" email="mahesh@gmail.com" image={img1} />
        <Card name="Gourav Barak" email="gourav@gmail.com" image={img2} />
        <Card name="Mahesh Barak" email="mahesh@gmail.com" image={img1} />
        <Card name="Gourav Barak" email="gourav@gmail.com" image={img2} />
      </div>
    </div>
  );
} */

function App() {
  const cardStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "20px",
    marginInline: "25px",
  };
  return (
    <div>
      <div style={{ border: "4px solid teal", margin: "25px" }}>
        <Intro />
        <Buttons />
      </div>

      <div style={cardStyle}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
