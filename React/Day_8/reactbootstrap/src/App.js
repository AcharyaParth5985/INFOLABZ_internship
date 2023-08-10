import './App.css';
import  Card  from 'react-bootstrap/Card';
import { CustProp } from './Costom';

let students =[
  {id:12 , name:"parth"},
  { id:13, name:"Pushpendra" }
]

function App() {
  return (
    <div className='App App-header' >
        {
          Object.keys(students).map(
            (index) =>{
              return (
                <Card id={index} className='cards'>
                  <Card.Body>
                    <CustProp id={students[index]["id"]} name={students[index]["name"]} />
                  </Card.Body>
                </Card>
              );
            }
          )
        }
    </div>
  );
}

export default App;
