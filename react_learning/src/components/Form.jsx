import Card from "./Card"
import { useState } from "react"

const Form = () => {
const [comment, setComment] = useState('');

const formText = (e) => {
setComment(e.target.value)
}

   return (
      <>
         <Card>
            <form className="text-center">
               <h3>How did we do?</h3>
               <div className="row mb-3">
                  <div>
                     <input type="text" onChange={formText} className="form-control" placeholder="Enter comment here" value={comment}/>
                  </div>
               </div>
              
               <button type="submit" className="btn btnColor-purple">Submit</button>
            </form>
         </Card>
      </>
   )
}

export default Form
