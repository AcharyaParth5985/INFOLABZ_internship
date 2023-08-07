import logo from './logo.svg';
import './App.css';
import data from "./coviddata.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Covid Api To Table </h1>
      </header>
    </div>
  );
}

let apiCovid = data;
function Covid_display() {
  return (
    <div className='App App-header'>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Confirm</th>
            <th>Death</th>
            <th>Recovered</th>
          </tr>
          {
            Object.keys(apiCovid["cases_time_series"]).map(
              (i) => {
                return (
                  <tr key={i}>
                    {
                      <>
                        <td>{apiCovid["cases_time_series"][i]["date"]} <br></br>{apiCovid["cases_time_series"][i]["dateymd"]} </td>
                        <td>{apiCovid["cases_time_series"][i]["totalconfirmed"]} <br></br>{ EffectComp(0,apiCovid["cases_time_series"][i]["dailyconfirmed"]) } </td>
                        <td>{apiCovid["cases_time_series"][i]["totaldeceased"]} <br></br>{ EffectComp(0,apiCovid["cases_time_series"][i]["dailydeceased"]) } </td>
                        <td>{apiCovid["cases_time_series"][i]["totalrecovered"]} <br></br>{ EffectComp(apiCovid["cases_time_series"][i]["dailyrecovered"]) } </td>
                      </>

                    }
                  </tr>
                );
              }
            )
          }
        </tbody>
      </table>
    </div>
  );
}


function EffectComp(item,zero=0) {
  if(zero===0){
    if(item>zero)
      return( <p className='Green'>{'(' + item + ')'} </p>  );
    else
      return( <p className='Red'  >{'(' + item + ')'} </p>  );
  }
  else{
    if(zero>item)
    return( <p className='Red'>{'(' + zero + ')'} </p>  );
  else
    return(  <p className='Green'>{'(' + zero + ')'} </p> );
  
  }

}
export default App;
export { Covid_display };
