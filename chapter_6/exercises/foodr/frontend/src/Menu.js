import React from 'react';

import Drinks from './Drinks';
import Desserts from './Desserts';
import {Route, Switch, Link} from 'react-router-dom';

class Menu extends React.Component {
    render(){
        return(
            <div>
                <h2> Our Lovely Menu </h2>
                <div>
                    <h3>{this.props.deal.title}</h3>
                    <h4>{this.props.deal.price}</h4>
                    <h5>{this.props.deal.description}</h5>
                </div>
            
                <nav>
                    <Link to="/menu/drinks"> Drinks </Link>
                    <Link to="/menu/desserts"> Desserts </Link>
                </nav>
                <Switch>
                    <Route path='/menu/drinks' component={Drinks} />
                    <Route path='/menu/desserts' component={Desserts} />
                </Switch>
            </div>
        )
    }
}

export default Menu; 