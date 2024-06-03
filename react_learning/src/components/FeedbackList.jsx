
import Feedbackitem from "./Feedbackitem"

const FeedbackList = props => {
   if(!props.userFeedback) {
    return  <p>No feedback yet...</p>
   }

  return (
    <div>
      {
         props.userFeedback.map((item) => (
            <Feedbackitem 
            key={item.id} 
            item={item}
            deleteItem={props.deleteItem}
            />
         ))
      }
    </div>
  )
}

export default FeedbackList
