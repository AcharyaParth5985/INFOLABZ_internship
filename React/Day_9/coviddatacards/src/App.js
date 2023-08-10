import './App.css';
import Datacard from './DataCards';
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function App() {

  const [mydata,setData] = useState([]);

  const getapi = () =>{
    fetch('https://data.covid19india.org/data.json')
    .then((responce)=>responce.json())
    .then((json)=>{
      setData(json.statewise)
    });
  }

  useEffect(()=>{
    getapi();
    const interval = setInterval(()=>{getapi();},5000000);
    return ()=> clearInterval(interval);
  })

  //let tt = {};
  return (
   <Container fluid>
    {/* {tt = Object.values(mydata)[0]}
    <Datacard 
            stateCode={tt.statecode} 
            state={tt.state} 
            dateTime={tt.lastupdatedtime} 
            active={tt.active} 
            conf={tt.confirmed} 
            death={tt.deaths} 
            reco={tt.recovered} /> */}

    <Row className='row-cols-2'  >
      {
        //slice to skip total values
        mydata.map(
          (values)=>{
           return(
            <Col className='container-fluid mt-4'>
            <Datacard 
            stateCode={values.statecode} 
            state={values.state} 
            dateTime={values.lastupdatedtime} 
            active={values.active} 
            conf={values.confirmed} 
            death={values.deaths} 
            reco={values.recovered} />
          </Col>
           )
          }
        )
      }
    </Row>
   </Container>
  );
}

export default App;
