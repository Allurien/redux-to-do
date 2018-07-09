import React, {Component} from 'react';
import Route from 'react-router-dom';
import {connect} from 'react-redux';
import {getSingleItem} from '../actions'

class ViewItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            error: ''
        }
    }
    async componentDidMount(){
        const newState = {
            loading: false,
            error: ''
        }
        const {item_id} = this.props.match.params;
        try {const resp = await this.props.getSingleItem(item_id);
        
        } catch(err){
            newState.error = 'Unable to load to do item'
        }
        this.setState(newState);
    }

    render(){
        
        const {item} = this.props;
        const {loading, error} = this.state;
        console.log('item', item)
        if (!item && loading){
            return <h1>Loading...</h1>;
        }
        if (!loading && error) {
            return <h1>{error}</h1>;
        }
        return(
            <div>
                <h1>{item.title}</h1>
                <p>{item.details}</p>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        item: state.list.single
    }
}
export default connect(mapStateToProps, {getSingleItem})(ViewItem);