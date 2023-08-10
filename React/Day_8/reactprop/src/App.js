import './App.css';
import CustomComponent ,{NameDiaplay} from "./CustomComponent";


let students =
  [
    {Id:12 , Name:"Parth"},
    {Id:13 , Name:"Acharya"}
  ]



function App() {
  return (
    <div>
        <CustomComponent />
        {
          Object.keys(students).map(
            (index) => {
              return <NameDiaplay Id={students[index]["Id"]} Name={students[index]["Name"]} />
            }
          )
        }
    </div>
  );
}

export default App;
