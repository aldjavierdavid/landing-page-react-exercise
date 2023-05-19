function Card(props) {
    return <div id="card" className="card" style={{width: "18rem"}}>
    <img src= {props.srcImage} width={"100%"} height={325} alt={props.alt}></img>
    <h2>{props.title}</h2>
    <p>{props.desc}</p>
    <button className="btn btn-primary">Find Out More!</button>
    </div>
  
    
  }

export default Card