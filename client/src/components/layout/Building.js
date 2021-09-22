import React,{useState} from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Row,Col,FloatingLabel,Form} from 'react-bootstrap'
import testData from '../../Data/testData';
import FloorData from "../../Data/Floor"
import _ from 'lodash'
function Building() {
  const [filteredData,setfilteredData]=useState([])
  const [filteroption,setfilteredOption]=useState(false)
  const filterOption=(e,type)=>{
    if(type=="price"){
      var arrayPrice=e.target.value.split('-')
        var array=[]
          testData.map((item,i)=>{
            if(item.price>=arrayPrice[0]&& item.price<=arrayPrice[1]){
             array.push(i)
          
            }
            setfilteredOption(true)
            setfilteredData(testData.slice(array[0],array[array.length-1]))
          })
       
                }
       else if(type=="floor"){
         let floorArray=[]
        testData.map((item,i)=>{
          if(item.floor===e.target.value+".KAT"){
            floorArray.push(i)
          }
          setfilteredOption(true)
          setfilteredData(testData.slice(floorArray[0],floorArray[floorArray.length-1]))
        })
       }
       else if(type=="bedroom"){
        let bedroomArray=[]
       testData.map((item,i)=>{
         if(item.bedroom>=e.target.value&& item.bedroom<=e.target.value){
          bedroomArray.push(i)
         }
         setfilteredOption(true)
         setfilteredData(testData.slice(bedroomArray[0],bedroomArray[bedroomArray.length-1]))
       })
      }
      else if(type=="grossm2"){
        let grocerArray=[]
        var grocerPrice=e.target.value.split('-')
       testData.map((item,i)=>{
        if(item.grossm2>=parseFloat(grocerPrice[0])&& item.grossm2<=parseFloat(grocerPrice[1])){
          grocerArray.push(i)
         }
         setfilteredOption(true)
         setfilteredData(testData.slice(grocerArray[0],grocerArray[grocerArray.length-1]))
       })
      }
      }

  return (
    <>
    <Row className="g-2">
    <Col>
      <FloatingLabel controlId="floatingSelectGrid" label="Select Price">
        <Form.Select aria-label="Floating label select example" onChange={(e)=>filterOption(e,"price")}>
          <option className="d-none">Select</option>
          {FloorData.prices.map((item)=>(
                     <option value={item}>{item}</option>
          ))}
        </Form.Select>
      </FloatingLabel>
    </Col>
    <Col >
      <FloatingLabel controlId="floatingSelectGrid" label="Select floor">
        <Form.Select aria-label="Floating label select example" onChange={(e)=>filterOption(e,"floor")}>
          <option className="d-none">Select</option>
          {FloorData.floor.map((item)=>(
                     <option value={item}>{item}</option>
          ))}
        </Form.Select>
      </FloatingLabel>
      </Col>
      <Col>
      <FloatingLabel controlId="floatingSelectGrid" label="Select Bedroom">
        <Form.Select aria-label="Floating label select example" onChange={(e)=>filterOption(e,"bedroom")}>
          <option className="d-none">Select</option>
          {FloorData.bedroom.map((item)=>(
                     <option value={item}>{item}</option>
          ))}
        </Form.Select>
      </FloatingLabel>
    </Col>
    <Col>
      <FloatingLabel controlId="floatingSelectGrid" label="Select Grossm2">
        <Form.Select aria-label="Floating label select example"onChange={(e)=>filterOption(e,"grossm2")}>
          <option className="d-none">Select</option>
          <option className="d-none">Select</option>
          {FloorData.grossm2.map((item)=>(
                     <option value={item}>{item}</option>
          ))}
        </Form.Select>
      </FloatingLabel>
    </Col>
  </Row>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>UniqueID</th>
          <th>Floor</th>
          <th>AptNo</th>
          <th>Bedroom</th>
          <th>Grossm2</th>
          <th>NetAream2</th>
          <th>Direction</th>
          <th>BlockNew</th>
          <th>Price</th>
          <th>BlockMap</th>
          <th>Apartment_id</th>
          <th>Action</th>
        </tr>
      </thead>
      {filteroption==false?testData.map((item) => (
        <tbody>
          <tr>
            <td>{item.ID}</td>
            <td>{item.uniqueID}</td>
            <td>{item.floor}</td>
            <td>{item.aptNo}</td>
            <td>{item.bedroom}</td>
            <td>{item.grossm2}</td>
            <td>{item.netAream2}</td>
            <td>{item.direction}</td>
            <td>{item.blockNew}</td>
            <td>{item.price}</td>
            <td>{item.blockMap}</td>
            <td>{item.apartment_id}</td>
            <td>
              <Link to={`/floor/${item.floor}`}>View Floor</Link>
            </td>
            <td>
              <Link to={`/floor/${item.floor}/${item.apartment_id}`}>
                View AppartMent
              </Link>
            </td>
          </tr>
        </tbody>
      )):(
        filteredData.map((item) => (
        <tbody>
          <tr>
            <td>{item.ID}</td>
            <td>{item.uniqueID}</td>
            <td>{item.floor}</td>
            <td>{item.aptNo}</td>
            <td>{item.grossm2}</td>
            <td>{item.netAream2}</td>
            <td>{item.direction}</td>
            <td>{item.blockNew}</td>
            <td>{item.price}</td>
            <td>{item.blockMap}</td>
            <td>{item.apartment_id}</td>
            <td>
              <Link to={`/floor/${item.floor}`}>View Floor</Link>
            </td>
            <td>
              <Link to={`/floor/${item.floor}/${item.apartment_id}`}>
                View AppartMent
              </Link>
            </td>
          </tr>
        </tbody>
      )))}
    </Table>
    </>
  );
}

export default Building;
