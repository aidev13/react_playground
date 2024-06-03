import Card from "./Card"
import { FaTimes} from 'react-icons/fa'
import propTypes from 'prop-types'

const Feedbackitem = props => {

   

  return (
    <Card >
      <div className="num-display">{props.item.rating}</div>
      <button onClick={() => props.deleteItem(props.item.id)} className="close"><FaTimes color="purple"/></button>
      <div className="text-display m-3">{props.item.text}</div>
    </Card>
  )
}

Feedbackitem.propTypes = {
   item: propTypes.object.isRequired,
}


export default Feedbackitem
