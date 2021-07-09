// Wait for the document to load before running the script
(function($) {
  // We use some Javascript and the URL #fragment to hide/show different parts of the page
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Linking_to_an_element_on_the_same_page
  $(window).on("load hashchange", function() {
    // First hide all content regions, then show the content-region specified in the URL hash
    // (or if no hash URL is found, default to first menu item)
    $(".content-region").hide();

    // Remove any active classes on the main-menu
    $(".main-menu a").removeClass("active");
    var region =
      location.hash.toString() || $(".main-menu a:first").attr("href");

    // Now show the region specified in the URL hash
    $(region).show();

    // Highlight the menu link associated with this region by adding the .active CSS class
    $('.main-menu a[href="' + region + '"]').addClass("active");

    // Alternate method: Use AJAX to load the contents of an external file into a div based on URL fragment
    // This will extract the region name from URL hash, and then load [region].html into the main #content div
    // var region = location.hash.toString() || '#first';
    // $('#content').load(region.slice(1) + '.html')
  });
})(jQuery);

function show(btn) {
  /*console.log('Button id:',btn.id);*/
  var newSelect = btn.id + "text";
  /*console.log('newSelect:',newSelect);*/
  showHideFunction(newSelect);
}

function showHideFunction(btn) {
  var x = document.getElementById(btn);
  /* console.log('var x:',x);*/
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
    /*console.log('ran the else');*/
  }
}

/*
What I need
1. function to retrieve button ID
2. add "text" to the button ID = var newSelect
3. run function (newSelect) that canshow and hide
*/

/*
function showHideFunction() {
  var x = document.getElementById("button1text");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} */
