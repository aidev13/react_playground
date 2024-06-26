import { useState } from "react";
import Header from "./components/Header";
import feedBackData from "./data/FeedBackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Form from "./components/Form";

const App = () => {

   const [feedback, setFeedback] = useState(feedBackData)

   const deleteFeedback = (id) => {
      if (window.confirm('Are you sure want to delete?')) {
         setFeedback(feedback.filter((item) => item.id !== id))
      }
   }

   return (
      <>
         <Header />
         <div className="container flex-column align-items-center">
            <Form />
            <FeedbackStats feedback={feedback} />
            <FeedbackList userFeedback={feedback} deleteItem={deleteFeedback} />
         </div>

      </>
   )
}

export default App;