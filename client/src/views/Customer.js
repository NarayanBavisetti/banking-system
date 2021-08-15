import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Customer.css";

export default function Customer() {
  const { id } = useParams();

  const [data, setData] = useState("");
  useEffect(() => {
    getData(id);
  }, [id]);
  console.log(data);

  const getData = async (id) => {
    console.log(id);
    const response = await axios.get(`/customers/${id}`);
    if (response) {
      setData(response.data);
    }
  };

  return (
    <div>
      <div className="app">
        <div className="details">
          <div className="big-img">
            <img src={data.DOB} alt={data.DOB} />
          </div>
          <div className="box">
            <div className="row">
              <h4>
                {data.name}
                <h6>
                  <i class="fas fa-star" style={{ color: "yellow" }}></i>
                  {data.Amount}/10
                </h6>
              </h4>

              <span>
                {data.accountType}
                <i></i> {data.gender}
              </span>
            </div>
            {/* <p>
              <button className="cart">{data.Phone}</button>
              <Button variant="outline-primary">{Movie.Genre}</Button>
            </p>
            <p>{Movie.Plot}</p>
            <hr></hr>
            <p>
              <strong style={{ color: "#38b000" }}>
                Director&nbsp;&nbsp;{" "}
              </strong>{" "}
              {"       "}
              {Movie.Director}
            </p>
            <hr></hr>
            <p>
              <strong style={{ color: "#38b000" }}>Actors &nbsp;&nbsp; </strong>{" "}
              {"       "}
              {Movie.Actors}
            </p>
            <hr></hr>
            <p>
              <strong style={{ color: "#38b000" }}>
                Languages&nbsp;&nbsp;{" "}
              </strong>{" "}
              {"       "}
              {Movie.Language}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
