// current page URL
var currentUrl = window.location.pathname.split("/").pop();

// URl of active page
$("nav a").each(function()
{
  var linkUrl = $(this).attr("href");
  
  // adding Active function 
  if (linkUrl === currentUrl)
  {
    $(this).addClass("active");
  }
});
