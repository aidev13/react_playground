

const Header = ({ text, bgColor, textColor}) => {

   const headerStyles = {
      backgroundColor: bgColor,
      color: textColor,
   }


   return (
      <header style={headerStyles}>
         <div className="container p-3">
            <h1>{text}</h1>
         </div>
      </header>
   )

}

Header.defaultProps ={
   text: 'Feedback UI',
   bgColor: 'black',
   textColor: '#ff6a95'
}

export default Header
