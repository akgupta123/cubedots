import React, { useState } from 'react';
import { useParams } from 'react-router';
import TestData from '../../Data/testData';
import { Table } from 'react-bootstrap';
function Floor() {
  const { floorId } = useParams();
  const [floor, setFloor] = useState({});
  React.useEffect(() => {
    TestData.forEach((item) => {
      if (item.floor == floorId) {
        setFloor(item);
      }
    });
  });
  return (
    <>
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
      {Object.values(floor).length ? (
        <>
          <tbody>
            <tr>
              <td>{floor.ID}</td>
              <td>{floor.uniqueID}</td>
              <td>{floor.floor}</td>
              <td>{floor.aptNo}</td>
              <td>{floor.grossm2}</td>
              <td>{floor.netAream2}</td>
              <td>{floor.direction}</td>
              <td>{floor.blockNew}</td>
              <td>{floor.price}</td>
              <td>{floor.blockMap}</td>
              <td>{floor.apartment_id}</td>
            </tr>
          </tbody>
        </>
      ) : (
        'No Record Found'
      )}
    </Table>
    </>
  );
}

export default Floor;
