$(document).ready(function() {

	//搜尋 顯示隱藏控制
	$(".search-icon").on('click', function() {
		$(".header-bottom-search").slideToggle(300);
	});
  
  //電子報訂閱 文字未輸入提示
  $("#search-letter-btn").click(function(){
      console.log("ok");
      if($("#search-letter").val().length === 0){
         $("#myAlert").show();
      }
      setTimeout(function(){$('.alert').fadeOut(1000)},3000);
  })

  //go top 返回頂端圖示
  $(document).scroll(function(){
    if($(this).scrollTop()){
      $('#gotop').fadeIn();
    }else{
      $('#gotop').fadeOut();
      }
  })

  $('#gotop').click(function(){
    $('html,body').animate({scrollTop:0},600);
  })

});
  
//google map
var place={};
var str={};
  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
     center: {lat: 23.902249,lng: 121.101026},
      zoom: 7.5
    });
    $.getJSON('https://jsnw.github.io/shop.json',{},function(res){
      for (var i = 0; i < res.shop.length; i++) {
       
        place.lat = parseFloat(res.shop[i]['lat']);
        place.lng = parseFloat(res.shop[i]['lng']);
            
        str.map = map;
        str.title= res.shop[i]['title']
        str.position = place;
        console.log(str);
        console.log(place);
        new google.maps.Marker(str);
      }
    });
  }

