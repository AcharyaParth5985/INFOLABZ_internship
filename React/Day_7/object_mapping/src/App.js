import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      Day_7 August 4
    </div>
  );
}
// Mapping Arrys and printing them 
let aryone = [10, 11, 12, 13, 14, 15];
function AryMap() {
  return (
    <div>
      {
        aryone.map(
          (data, i) => {
            return i + " = " + data + ", "
          }
        )
      }
    </div>
  );
}

//Mapping Object and Printing
let objone = {
  name: "Pushpendra",
  surname: "Acharya",
}

function ObjMap() {
  return (
    <div>
      <h1>
        {
          Object.keys(objone).map(
            (item) => {
              return objone[item] + "  "
            }
          )
        }
      </h1>
    </div>
  );
}


//must use key attribute with html elements that are siblings to identify them
//Printing Object Values to a table
//below is from ISRO spaceship api
let apiISRO = { "spacecrafts": [{ "id": 1, "name": "Aryabhata" }, { "id": 2, "name": "Bhaskara-I" }, { "id": 3, "name": "Rohini Technology Payload (RTP)" }, { "id": 4, "name": "Rohini Satellite RS-1" }, { "id": 5, "name": "Rohini Satellite RS-D1" }, { "id": 6, "name": "APPLE" }, { "id": 7, "name": "Bhaskara-II" }, { "id": 8, "name": "INSAT-1A" }, { "id": 9, "name": "Rohini Satellite RS-D2" }, { "id": 10, "name": "INSAT-1B" }, { "id": 11, "name": "SROSS-1" }, { "id": 12, "name": "IRS-1A" }, { "id": 13, "name": "SROSS-2" }, { "id": 14, "name": "INSAT-1C" }, { "id": 15, "name": "INSAT-1D" }, { "id": 16, "name": "IRS-1B" }, { "id": 17, "name": "SROSS-C" }, { "id": 18, "name": "INSAT-2A" }, { "id": 19, "name": "INSAT-2B" }, { "id": 20, "name": "IRS-1E" }, { "id": 21, "name": "SROSS-C2" }, { "id": 22, "name": "IRS-P2" }, { "id": 23, "name": "INSAT-2C" }, { "id": 24, "name": "IRS-1C" }, { "id": 25, "name": "IRS-P3" }, { "id": 26, "name": "INSAT-2D" }, { "id": 27, "name": "IRS-1D" }, { "id": 28, "name": "INSAT-2E" }, { "id": 29, "name": "Oceansat(IRS-P4)" }, { "id": 30, "name": "INSAT-3B" }, { "id": 31, "name": "GSAT-1" }, { "id": 32, "name": "The Technology Experiment Satellite (TES)" }, { "id": 33, "name": "INSAT-3C" }, { "id": 34, "name": "KALPANA-1" }, { "id": 35, "name": "INSAT-3A" }, { "id": 36, "name": "GSAT-2" }, { "id": 37, "name": "INSAT-3E" }, { "id": 38, "name": "IRS-P6 / RESOURCESAT-1" }, { "id": 39, "name": "EDUSAT" }, { "id": 40, "name": "HAMSAT" }, { "id": 41, "name": "CARTOSAT-1" }, { "id": 42, "name": "INSAT-4A" }, { "id": 43, "name": "INSAT-4C" }, { "id": 44, "name": "SRE-1" }, { "id": 45, "name": "CARTOSAT-2" }, { "id": 46, "name": "INSAT-4B" }, { "id": 47, "name": "INSAT-4CR" }, { "id": 48, "name": "CARTOSAT – 2A" }, { "id": 49, "name": "IMS-1" }, { "id": 50, "name": "Chandrayaan-1" }, { "id": 51, "name": "RISAT-2" }, { "id": 52, "name": "Oceansat-2" }, { "id": 53, "name": "GSAT-4" }, { "id": 54, "name": "CARTOSAT-2B" }, { "id": 55, "name": "GSAT-5P" }, { "id": 56, "name": "YOUTHSAT" }, { "id": 57, "name": "RESOURCESAT-2" }, { "id": 58, "name": "GSAT-8" }, { "id": 59, "name": "GSAT-12" }, { "id": 60, "name": "Megha-Tropiques" }, { "id": 61, "name": "RISAT-1" }, { "id": 62, "name": "GSAT-10" }, { "id": 63, "name": "SARAL" }, { "id": 64, "name": "IRNSS-1A" }, { "id": 65, "name": "INSAT-3D" }, { "id": 66, "name": "GSAT-7" }, { "id": 67, "name": "Mars Orbiter Mission Spacecraft" }, { "id": 68, "name": "GSAT-14" }, { "id": 69, "name": "IRNSS-1B" }, { "id": 70, "name": "IRNSS-1C" }, { "id": 71, "name": "GSAT-16" }, { "id": 72, "name": "Crew module Atmospheric Re-entry Experiment (CARE)" }, { "id": 73, "name": "IRNSS-1D" }, { "id": 74, "name": "GSAT-6" }, { "id": 75, "name": "Astrosat" }, { "id": 76, "name": "GSAT-15" }, { "id": 77, "name": "IRNSS-1E" }, { "id": 78, "name": "IRNSS-1F" }, { "id": 79, "name": "IRNSS-1G" }, { "id": 80, "name": "CARTOSAT-2 Series Satellite" }, { "id": 81, "name": "INSAT-3DR" }, { "id": 82, "name": "SCATSAT-1" }, { "id": 83, "name": "GSAT-18" }, { "id": 84, "name": "RESOURCESAT-2A" }, { "id": 85, "name": "INS-1B" }, { "id": 86, "name": "INS-1A" }, { "id": 87, "name": "Cartosat -2 Series Satellite" }, { "id": 88, "name": "GSAT-9" }, { "id": 89, "name": "GSAT-19" }, { "id": 90, "name": "Cartosat-2 Series Satellite" }, { "id": 91, "name": "GSAT-17" }, { "id": 92, "name": "IRNSS-1H" }, { "id": 93, "name": "INS-1C" }, { "id": 94, "name": "Cartosat-2 Series Satellite" }, { "id": 95, "name": "Microsat" }, { "id": 96, "name": "GSAT-6A" }, { "id": 97, "name": "IRNSS-1I" }, { "id": 98, "name": "GSAT-29" }, { "id": 99, "name": "HysIS" }, { "id": 100, "name": "GSAT-11 Mission" }, { "id": 101, "name": "GSAT-7A" }, { "id": 102, "name": "Microsat-R" }, { "id": 103, "name": "GSAT-31" }, { "id": 104, "name": "EMISAT" }, { "id": 105, "name": "RISAT-2B" }, { "id": 106, "name": "Chandrayaan2" }, { "id": 107, "name": "Cartosat-3" }, { "id": 108, "name": "RISAT-2BR1" }, { "id": 109, "name": "GSAT-30" }, { "id": 110, "name": "EOS-01" }, { "id": 111, "name": "CMS-01" }, { "id": 112, "name": "EOS-03" }] }

function Display_ISROSpacecrafts() {
  return (
    <div>
      <h1> All ISRO spacecraft's name </h1>
      <table>
        <tbody>
          <tr key={'header'} >
            <th>ID</th>
            <th>Name</th>
          </tr>
          {
            Object.keys(apiISRO["spacecrafts"]).map(
              (item) => {
                return (
                  <tr key={item} >
                    <td>{apiISRO["spacecrafts"][item].id}</td>
                    <td>{apiISRO["spacecrafts"][item].name}</td>
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

export default App;
export { AryMap, ObjMap, Display_ISROSpacecrafts }
