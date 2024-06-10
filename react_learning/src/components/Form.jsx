import Card from "./Card"
import { useState } from "react"
import Button from "./Button";

const Form = () => {
   const [comment, setComment] = useState('');
   const [btnDisabled, setBtnDisabled] = useState(true);
   const [message, setMessage] = useState('');


   const formText = (e) => {

      if (e.target.value === '') {
         setBtnDisabled(true)
         setMessage(null)
      } else if (e.target.value.length <= 10) {
         setBtnDisabled(true)
         setMessage("Comments must be at least 10 charachters")
      }
      else {
         setBtnDisabled(false)
         setMessage(null)
      }

      setComment(e.target.value)
   }

   return (
      <>
         <Card>
            <form className="text-center">
               <h3>How did we do?</h3>
               <div className="row mb-3">
                  <div>
                     <input type="text" onChange={formText} className="form-control" placeholder="Enter comment here" value={comment} />
                  </div>
               </div>

               <Button type="submit" isDisabled={btnDisabled}>Submit</Button>
               <br />
               <br />
               {message && <div className="bg-light ">{message}</div>}
            </form>
         </Card>
      </>
   )
}

export default Form
