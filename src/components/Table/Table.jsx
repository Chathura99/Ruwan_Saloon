import * as React from "react";
import "./Table.css";
import SaloonService from "../../services/SaloonService";
import { useState, useEffect } from "react";

const Table = (props) => {
  const [services, setService] = useState([]);
  const [table, setTable] = useState("");

  useEffect(() => {
    getServices();
  }, []);

  const getServices = () => {
    SaloonService.getServices().then((res) => {
      // set variable list(json object)
      setService(res.data);
    });
  };

  //change style by using status
  const makeStyle = (status) => {
    if (status === "Approved") {
      return {
        background: "rgb(145 254 159 / 47%)",
        color: "green",
      };
    } else if (status === "Pending") {
      return {
        background: "#ffadad8f",
        color: "red",
      };
    } else {
      return {
        background: "#59bfff",
        color: "white",
      };
    }
  };

  //reusable col names
  const service = [
    {
      Header: "Service ID",
      accessor: "col1",
    },
    {
      Header: "Service Name",
      accessor: "col2",
    },
    {
      Header: "Fee",
      accessor: "col3",
    },
    {
      Header: "Details",
      accessor: "col4",
    },
  ];
  const employee = [
    {
      Header: "Employee ID",
      accessor: "col1",
    },
    {
      Header: "Name",
      accessor: "col2",
    },
    {
      Header: "Status",
      accessor: "col3",
    },
    {
      Header: "Contact No",
      accessor: "col4",
    },
  ];

  return (
    <div>
      {(() => {
        if (props.type === "services") {
          // setTable("service");
          return (
          <h3 style={{ paddingTop: "2rem" }}>Available Services</h3>
          )
        } else if (props.type === "employees") {
          // setTable("employee");
          return (
          <h3 style={{ paddingTop: "2rem" }}>Employees</h3>
          )
        }
      })()}
      
      <table className="Table">
        <thead>
          <tr>
            {/* get data from this */}
            {service.map((info) => {
              return (
                <th
                  style={{
                    borderBottom: "solid 3px red",
                    color: "black",
                    fontWeight: "bold",
                    background: "white",
                    padding: "10px",
                  }}
                >
                  {info.Header}
                </th>
              );
            })}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* get data from data.js */}
          {services.map((info) => {
            return (
              <tr>
                <td>{info.product}</td>
                <td>{info.trackingId}</td>
                <td>{info.date}</td>
                {/* chnage style by using status */}
                <td>
                  <span className="status" style={makeStyle(info.status)}>
                    {info.status}
                  </span>
                </td>
                <td className="Details">{info.details}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
