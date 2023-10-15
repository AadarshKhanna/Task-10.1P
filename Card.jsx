import './Card.css'
function Card(props)
{
   return(
    <div className="column">
    <img src= {props.avatar} alt ='Staff' width ={200} height ={200}/>
    <h3>{props.name} </h3>
    <p> {props. position}</p>
    <p>{props.author}</p>

    </div>
   )

}

export default Card