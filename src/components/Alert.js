import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase(); 
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div key={props.key}>
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
            style={{ transition: "all 2s" }}
          >
            <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
          </div>
        </div>
      )}
    </div>
  );
}
