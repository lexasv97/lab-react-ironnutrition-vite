import "./App.css";
import { Row, Divider } from "antd";

import FoodList from "./components/FoodList";

function App() {
  return (
    <div className="App">
      <Divider>Food List</Divider>
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <FoodList />
      </Row>
    </div>
  );
}

export default App;