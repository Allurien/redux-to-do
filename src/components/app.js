import React from 'react';
import List from './list';
import 'materialize-css/dist/css/materialize.min.css';
import AddItem from '../components/add_item';
import {Route} from 'react-router-dom';

const App = () => (
    <div className='container'>
        <Route exact path='/' component={List} />
        <Route path='/add-item' component={AddItem} />
    </div>
);

export default App;
