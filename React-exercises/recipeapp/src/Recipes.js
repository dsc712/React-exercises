import React, {Component} from 'react' ;
import './Recipes.css' ;
import Recipe from './Recipe';

class Recipes extends Component{
    render(){
        return (

            <div className="Recipes">
                {/*recipes with props defined*/}
                <Recipe
                    title={ "Pasta" }
                    img={"https://content3.jdmagicbox.com/comp/ahmedabad/e3/079pxx79.xx79.180131140048.w7e3/catalogue/wtc-pasta-memnagar-ahmedabad-fast-food-xpmbj.jpg"}
                    instructions={'mix the ingredients '}
                    ingredients={
                        ['flour' , 'water' , 'oil'  , 'spices' , 'onion' ]
                    }/>

                <Recipe
                    title={ "Maggi"}
                    img={"https://images.financialexpress.com/2015/05/maggic-6.jpg"}
                    instructions={'mix the ingredients'}
                    ingredients={
                        ['flour' , 'water' , 'oil'  , 'spices' , 'onion' ]
                    }/>

                <Recipe
                    title={ "Burger" }
                    img={"https://www.redrobin.com/content/redrobin/site/en/nav/index/tavern-menu/jcr%3Acontent/centerParsys/responsivegrid/responsivegrid_826483054/responsivegrid_copy_2131621308/image_258938782.img.jpg"}
                    instructions={'mix the ingredients'}
                    ingredients={
                        ['flour' , 'water' , 'oil'  , 'spices' , 'onion' ]
                    }/>

                <Recipe
                    title={ "Chilli Potato" }
                    img={"https://i.ytimg.com/vi/HToinNNWISU/maxresdefault.jpg"}
                    instructions={'mix the ingredients'}
                    ingredients={
                        ['flour' , 'water' , 'oil'  , 'spices' , 'onion' ]
                    }/>

                <Recipe
                    title={ "Manchurian" }
                    img={"https://i0.wp.com/mypullzone.9vexd6dl53at.maxcdn-edge.com/wp-content/uploads/2017/03/veg-manchurian-dry-recipe-step-by-step-instructions-10.jpg?fit=750%2C604"}
                    instructions={'mix the ingredients'}
                    ingredients={
                        ['flour' , 'water' , 'oil'  , 'spices' , 'onion' ]
                    }/>

                <Recipe
                    title={ "Chilli Paneer" }
                    img={"https://www.yummytummyaarthi.com/wp-content/uploads/2014/09/1-27.jpg"}
                    instructions={'mix the ingredients'}
                    ingredients={
                        ['flour' , 'water' , 'oil'  , 'spices' , 'onion' ]
                    }/>

                <Recipe
                    title={ "Sandwich" }
                    img={"https://media.istockphoto.com/photos/turkey-sandwich-picture-id157431311?k=6&m=157431311&s=612x612&w=0&h=AHxozU3EVhaym-0rJhg00sY4_L2UQl8MNUalaQjfIGY="}
                    instructions={'mix the ingredients'}
                    ingredients={
                        ['flour' , 'water' , 'oil'  , 'spices' , 'onion' ]
                    }/>

                {/* recipes with default props */}
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>

            </div>

        ) ;
    }

}

export default Recipes ;