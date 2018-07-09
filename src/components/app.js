import React from 'react';
import List from './list';
import 'materialize-css/dist/css/materialize.min.css';
import AddItem from '../components/add_item';
import {Route} from 'react-router-dom';
import ViewItem from './view_item';

const App = () => (
    <div className='container'>
        <Route exact path='/' component={List} />
        <Route path='/add-item' component={AddItem} />
        <Route path='/todo/:item_id' component={ViewItem} />
    </div>
);

export default App;
