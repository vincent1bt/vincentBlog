import React, { Component, PropTypes } from 'react';

class Category extends Component {
  constructor(props){
    super(props)

    this.remove = this.remove.bind(this)
  }

  shouldComponentUpdate(nextProps) {
    return !this.props.category.equals(nextProps.category);
  }

  remove(e){
    e.preventDefault();
    
    var id = this.refs.category_id.value.trim();
    var index = this.refs.category_index.value;

    this.props.deleteCategory(index, id);
  }

  render() {
    return (
      <li className="dashboard-container-form-list-item">
        <p className="dashboard-container-form-list-item-parr"> {this.props.category.get('name')} </p>
        <form onSubmit={this.remove}>
          <input data-confirm="yes?" className="dashboard-container-list-item-link dashboard-container-list-item-link--delete" type="submit" value="Eliminar"/>
          <input type="hidden" value={this.props.category.get('id')} ref="category_id" />
          <input type="hidden" value={this.props.index} ref="category_index" />
        </form>
      </li>
    )
  }
}

Category.propTypes = {
  category: PropTypes.object.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default Category;
