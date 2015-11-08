import React from 'react';
import ReactDOM from 'react-dom'
import CategoryComponent from 'ncomponents/categories';

(function() {
  document.addEventListener('DOMContentLoaded', onDOMLoad);

  function onDOMLoad() {
	class MainComponent extends React.Component {
		render() {
			return (
				<div className="dashboard-container-component">
					<CategoryComponent/>
				</div>
			)
		}
	}

	ReactDOM.render(<MainComponent/>, document.getElementById("containerM"));
  }
  
})();