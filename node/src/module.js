import React from 'react';
import ReactDOM from 'react-dom';
import CategoryComponent from 'js/ncomponents/categories';

(function() {

  document.addEventListener('DOMContentLoaded', onDOMLoad);

  function onDOMLoad() {
  	function MainComponent(props) {
			return (
				<div className="dashboard-container-component">
					<CategoryComponent/>
				</div>
			)
  	}

  	ReactDOM.render(<MainComponent/>, document.getElementById("containerM"));
  }

})();
