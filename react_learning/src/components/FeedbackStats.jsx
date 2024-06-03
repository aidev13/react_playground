

const FeedbackStats = ({feedback}) => {
let avgRating = feedback.reduce((acc, cv) => {
   return acc + cv.rating
}, 0) / feedback.length

avgRating = avgRating.toFixed(1)

if(isNaN(avgRating)) {
   avgRating = 0
}

return (
    <>
    <div className="fbStats">
      <h5>{feedback.length} Reviews</h5>
      <h5>Average rating: {avgRating}</h5>
    </div>
      
    </>
  )
}

export default FeedbackStats
