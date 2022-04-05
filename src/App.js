import React from "react";
import { Row } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import Table from "./components/index";

function App() {
  return (
    <div className="admin-wrp">
      <Row justify="center" align="middle">
        <Table />
      </Row>
    </div>
  );
}

export default App;
