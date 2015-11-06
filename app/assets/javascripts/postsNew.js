//= require epiceditor
(function(){
	var editor = new EpicEditor({
		textarea: "markup-body-textarea",
		file: {
			name: "new_post"
		}
	});

	editor.load();
	$("#posts_form").on("submit", function(){
		$("#body-textarea").val(editor.exportFile("new_post", "html"));
		$("#markup-body-textarea").val(editor.exportFile("new_post"));
	});
})();
