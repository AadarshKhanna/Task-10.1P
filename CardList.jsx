import Card from './Card'
import './Card.css'
import staffList from './staffList.js'

 function cardComponent(staff,  i)
 {
    return <Card
    key={staff.key}
    avatar={staff.avatar}
    name={staff.name}
    position={staff.position}
    rating={staff.rating}
    author={staff.author}
/>
 }
function CardList() {
    return (
        <div className= 'upper'>
        <h1 className='center'>Featured Articles</h1>
        <div className='row center'>
           { staffList.slice(3,6).map(cardComponent)}
        </div>
        </div>
    )

}

export default CardList