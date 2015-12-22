import React from 'react';
import ReactDOM from 'react-dom';
import CategoryComponent from 'js/ncomponents/categories';

(function() {
  
  document.addEventListener('DOMContentLoaded', onDOMLoad);

  function onDOMLoad() {
    if (window.location.pathname != "/admin/dashboard") return false;
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