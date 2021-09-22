import React, { useState } from 'react';
import { useParams } from 'react-router';
import testData from '../../Data/testData';
import { Table } from 'react-bootstrap';
function AppartMent() {
  const { floor, apartment_id } = useParams();
  const [appartment, setAppartment] = useState({});
  React.useEffect(() => {
    console.log("item",testData)
    testData.forEach((item) => {
      if (item.floor == floor && item.apartment_id==apartment_id) {
        setAppartment(item);
      }
    });
  });
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>UniqueID</th>
          <th>Floor</th>
          <th>AptNo</th>
          <th>Grossm2</th>
          <th>NetAream2</th>
          <th>Direction</th>
          <th>BlockNew</th>
          <th>Price</th>
          <th>BlockMap</th>
          <th>Apartment_id</th>
        </tr>
      </thead>
      {Object.values(appartment).length ? (
        <>
          <tbody>
            <tr>
              <td>{appartment.ID}</td>
              <td>{appartment.uniqueID}</td>
              <td>{appartment.floor}</td>
              <td>{appartment.aptNo}</td>
              <td>{appartment.grossm2}</td>
              <td>{appartment.netAream2}</td>
              <td>{appartment.direction}</td>
              <td>{appartment.blockNew}</td>
              <td>{appartment.price}</td>
              <td>{appartment.blockMap}</td>
              <td>{appartment.apartment_id}</td>
            </tr>
          </tbody>
        </>
      ) : (
        'No Record Found'
      )}
    </Table>
  );
}

export default AppartMent;
