import React from "react";

const Table = ({ dataFile }) => {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Mobile Number</th>
          <th>Language</th>
          <th>Id</th>
        </tr>
      </thead>
      <tbody>
        {dataFile?.map((item) => (
          <tr>
            {/* <tr className="active-row"> */}
            <td>{item?.phoneNumber}</td>
            <td>{item?.selectedLanguage}</td>
            <td>{item?.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
