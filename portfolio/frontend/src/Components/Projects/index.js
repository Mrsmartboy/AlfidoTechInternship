import './index.css'

const Projects=()=>{
    return(
        <div className='projects-container'>
            <h1 className='projects-head'>My Projects</h1>
             <ul className='projects-list-container'>
                <a href="https://josephtastypizza.vercel.app/" className='project-item-link'>
                <li className='project-item-container'>
                    <img src="tasty-pizza.png" className='projects-img' alt="tastyPizza"/>
                    <h1 className='project-name'>Tasty Pizza</h1>

                </li>
                </a>
                <a href='https://josephjobbyapp.ccbp.tech/' className='project-item-link'>
                <li className='project-item-container'>
                    <img src="Jobby-app.png" className='projects-img' alt="jobby-app"/>
                    <h1 className='project-name'>Jobby App</h1>

                </li>
                </a>
                <a href='https://josephnxttrendz.ccbp.tech/login' className='project-item-link'>
                <li className='project-item-container'>
                <img src="nxttrendz.png" className='projects-img' alt="nxt-trendz"/>
                <h1 className='project-name'>Nxt Trendz</h1>
                </li>
                </a>

                
             </ul>
           
        </div>
    )

}

export default Projects