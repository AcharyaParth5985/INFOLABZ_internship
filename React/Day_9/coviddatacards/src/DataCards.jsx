import { Card, Row, Col } from "react-bootstrap";

function Datacard(props) {
    return(
    <Card className="p-3">
        <Card.Header className="">
            <Row>
                <Col  md="auto"> <span className="fs-1 fw-bolder badge bg-primary text-wrap">{props.stateCode}</span></Col>
                <Col>  <Card.Title className="h6"> <p className=" m-0 p-0 fs-3 fw-bolder">  {props.state} </p><p className=" fw-light fst-italic"> {props.dateTime} </p> </Card.Title></Col> 
            </Row> 
        </Card.Header>
        <Row>
            <Col className="ps-4 pt-2 " >
              <p className=" fw-bold fs-3 m-0 p-0 text-start" > Active</p>
              <p className="fs-1 m-0 p-0 ps-4 fw-medium "> {props.active}</p>
            </Col>
            <Col className="py-3">
                <p className=" m-0 p-0 fs-5 ">
                    confirmed : <span className="fw-light"> {props.conf}</span> <br />
                    Recovered : <span className="fw-light"> {props.death}</span> <br />
                    Death     : <span className="fw-light"> {props.reco}</span> <br />
                </p>
            </Col>
        </Row>

    </Card>
    );
}

export default Datacard;