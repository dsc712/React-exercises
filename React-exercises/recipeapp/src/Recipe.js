import React,{Component} from 'react' ;
import PropTypes from 'prop-types' ;
import './Recipe.css' ;
class Recipe extends Component{

    static defaultProps = {
        title :  "Macroni"  ,
        img  : "https://www.gimmesomeoven.com/wp-content/uploads/2012/08/Roasted-Vegetable-Mac-and-Cheese-Recipe-1.jpg" ,
        instructions : 'mix the ingredients' ,
        ingredients : ['flour' , 'water' , 'oil'  , 'spices' , 'onion' ]
     };

     static propTypes =  {
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
     };


    render(){

        // destructuring values passed to props
        const {title , img , instructions } = this.props ;
        const ingredient =  this.props.ingredients.map( (ing , i ) => {
            return <li key={i} >{ing}</li>
            // while returning an array you should provide an unique key to each element of that array
        });


      return(

        <div className="Recipe">

            <div className="imageContainer">
                <img src={img} alt={title} />
            </div>
            <h1>{title}</h1>
            <h3>Ingredients </h3>
            <ul>
                {ingredient}
            </ul>
            <h3>Instructions</h3>
            <p>{instructions}</p>

        </div>

      );
    }
}

export default Recipe ;