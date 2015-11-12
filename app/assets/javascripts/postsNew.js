//= require epiceditor
(function(){
	var editor = new EpicEditor({
		textarea: "markup-body-textarea",
		file: {
			name: "new_post"
		}
	});

	editor.load();
	var form = document.querySelector("#posts_form");
	
	form.addEventListener("submit", function() {
		var textarea = document.querySelector("#body-textarea");
		var markup = document.querySelector("#markup-body-textarea");
		textarea.value = editor.exportFile("new_post", "html");
		markup.value = editor.exportFile("new_post");
	});

	var desc = document.querySelector("#desc");

	desc.onkeyup = function(e) {
		var words = this.value.length;
		var data = document.querySelector("#data");
		data.setAttribute("data-after", words)
	}

})();
