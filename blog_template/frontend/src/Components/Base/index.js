import CustomNavbar from "../CustomNavbar"
import Footer from "../Footer"
const Base=({title="Welcome to our Website",children})=>{

    return(
        <div className="Base-container">
            <CustomNavbar/>
            {children}
           <Footer/>
        </div>
    )

}

export default Base