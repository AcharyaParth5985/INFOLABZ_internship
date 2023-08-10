function CustomName() {
    return(
        <div>
            <h1> Custome Component Display </h1>
        </div>
    );
    
}

function NameDiaplay(props) {
    return(
        <div>
            <h2> Id :{props.Id}, Name : {props.Name}   </h2>
        </div>
    );    
}


export default CustomName;
export {NameDiaplay};