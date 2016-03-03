import React, { PropTypes } from 'react';
import FormCategories from 'js/ncomponents/formCategories';
import Category from 'js/ncomponents/category';

function CategoriesList(props) {
  return (
    <div>
      <FormCategories addCategory={props.addCategory} />
      <ul className="dashboard-container-form-list">
        {
          props.categories.map((category, i) => {
            return (
              <Category
                key={category.get('id')}
                deleteCategory={props.deleteCategory}
                category={category}
                index={i}
              />
            )
          })
        }
      </ul>
    </div>
  )
}

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  addCategory: PropTypes.func.isRequired
};

export default CategoriesList;
