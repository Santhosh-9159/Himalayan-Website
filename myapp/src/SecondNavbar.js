import React from "react";
import { AboutBike } from "./components/Array";

function SecondNavbar() {
  return (
    <>
      <div>
        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              backgroundColor: "#111108",
              color: "#fff",
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              padding: "20px 0",
              fontSize: "20px",
              fontWeight: "2px",
              paddingLeft: "15px",
            }}
          >
            Himalayan
            {AboutBike.map((item, id) => {
              return (
                <div
                  key={id}
                  style={{
                    color: "#fff",
                    display: "flex",
                    flexDirection: "row",
                    width: "30%",
                    alignItems: "center",
                    justifyContent: "space-around",
                    padding: "10px 0",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondNavbar;
