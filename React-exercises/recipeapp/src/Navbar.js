import React,{Component} from 'react' ;
import './Navbar.css'
class Navbar extends Component{

    render(){
        return(
            <div className="Navbar-Component">

               <h3>Recipe App</h3>
                <ol>
                    <li>New Recipe</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ol>

            </div>
        )
    }
}

export default Navbar ;