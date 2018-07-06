import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {sendToDoItem} from '../actions';


class AddItem extends Component {

    async handleAddItem(values){
        console.log('form values', values);
        await this.props.sendToDoItem(values);
        this.props.history.push('/');
    }
    renderInput({label, input, meta:{touched, error}}){
        return (
            <div className="col s8 offset-2">
                <label>{label}</label>
                <input {...input} type="text" autoComplete='off' />
                <p className="red-text">{touched && error}</p>
            </div>
        )
    }

    render() {
        
        const {handleSubmit} = this.props;
        return(
            <div>
                <h1 className='center'>Add Item</h1>
                <div className="row right-align">
                    <Link to='/' className='btn blue darken-2' >View To Do List</Link>
                </div>

                <form onSubmit={handleSubmit(this.handleAddItem.bind(this))}>
                    <div className="row">
                        <Field name='title' component={this.renderInput} label='Title' />
                    </div>
                    <div className="row">
                        <Field name='details' component={this.renderInput} label='Details' />
                    </div>
                    <div className="row right-align">
                        <button className="btn blue">Add Item</button>
                    </div>
                </form>
            </div>
        );
    }
}

function validate(values){
    const {title, details} = values;
    const errors = {};

    if(!title) {
        errors.title = 'Please add a title';
    }
    if(!details) {
        errors.details = 'Please add details about your to do item.';
    }
    return errors;
}
AddItem = reduxForm({
    form: 'add-item',
    validate: validate
})(AddItem);

// function mapStateToProps(state){
//     return {
//         list: state.list.all
//     }
export default connect(null, {sendToDoItem})(AddItem);