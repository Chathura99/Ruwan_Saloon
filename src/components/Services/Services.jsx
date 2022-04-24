import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./Services.css";
const Services = () => {
  return (
    <div className="Services">
      <h1>Services</h1>
      <Cards/>
      <Table type={"services"} />
    </div>
  );
};

export default Services;
