// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});
function Thanks(){
	var name = document.getElementById('name');
	var subscribe = document.getElementById('submit');
	
	subscribe.innerHTML = "Thank you for joing our comunity"  + name.value;
}
