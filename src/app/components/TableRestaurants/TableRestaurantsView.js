import React, { useState } from 'react';
import restaurantPreview from './restaurantsPreview/restaurantPreview'

function TableRestaurantsView(props){
    const originalRestaurantList = props.restaurantList;
    const [restaurants, setRestaurants] = useState({data:[]});
    const [filter, setFilter] = useState({
        id:"",
        rating:"", 
        name:"",
        contact:{
            site:"",
            email:"",
            phone:""
        },
        address:{
            street:"",
            city:"",
            state:""
        }
    });
    React.useEffect(() => {
        setRestaurants({data: originalRestaurantList})
    },[originalRestaurantList]);

    return(
        <table className="restaurant-table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>rating<i class="fa fa-sort"/></th>
                    <th>name<i class="fa fa-sort"/></th>
                    <th>site</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>street</th>
                    <th>city</th>
                    <th>state</th>
                </tr>
            </thead>
            <tbody>
            {
                restaurants.data.map(restaurant=>{
                    return(
                        <restaurantPreview {...restaurant} key={restaurant._id}/>
                    )
                })
            }
            </tbody>
            <tfoot>
                <tr>
                    <th>id</th>
                    <th>rating</th>
                    <th>name</th>
                    <th>site</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>street</th>
                    <th>city</th>
                    <th>state</th>
                </tr>
            </tfoot>
        </table>
    )
}
export default TableRestaurantsView;