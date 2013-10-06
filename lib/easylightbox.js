(function(easyLightbox, $, undefined){ 
	var elId = "#easylightbox";
	var elPanel = "#easylightbox-panel";
	var elIdAndPanel = elId + ", " + elPanel;
	var elContent = "#easylightbox-content";
	var elDataAttr = "data-easylightbox";
	var elShow = ".show-easylightbox";
	var elClose = ".close-easylightbox";

	if (!String.prototype.trim) {
	  String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};
	}

	function lightboxContent(node) {
	  var content = node.html().replace("<!--", "").replace("-->", "").trim();
	  $(elContent).html(content);
	  // Need to enable close buttons if they are commented out.  
	  $(elContent + " " + elClose).click(function(e){
	    easyLightbox.closeLightbox();
	  });
	  $(elIdAndPanel).fadeIn(300);
	}

	easyLightbox.closeLightbox = function() {
	  $(elIdAndPanel).fadeOut(300, function() { $(elContent).empty(); });
	  window.location.hash = "";
	}

	easyLightbox.showLightbox = function(lightboxId) {
	  lightboxContent($("#" + lightboxId));
	}

	$(document).ready(function(){
	  document.onkeydown = function(evt) {
	    evt = evt || window.event;
	    if (evt.keyCode == 27) {
	      $(elIdAndPanel).fadeOut(300);
	    }
	  };
	  $(elShow).click(function(e){
	    $(elContent).empty();
	    easyLightbox.showLightbox($(this).attr(elDataAttr));
	  });
	  $(elClose).click(function(e){
	    easyLightbox.closeLightbox();
	  });

	  if (window.location.hash != "" && $(window.location.hash) != undefined)
	  {
	    lightboxContent($(window.location.hash));
	  }
	})
}(window.EasyLightbox = window.EasyLightbox || {}, jQuery));