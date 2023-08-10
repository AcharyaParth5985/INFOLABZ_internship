function Def() {
    return console.log("costom.def ");
}

function CustProp(param) {
    return(
        <div> ID : {param.id} , NAME : {param.name} </div>
    );
}



export default Def;
export {CustProp}