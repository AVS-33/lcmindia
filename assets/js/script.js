
var thankam = angular.module('thankam',['ui.router']);
var url = 'http://localhost/learning/le-admin/';
thankam.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home',{
            url:'/',
            templateUrl: 'template/home.php'

        })
     $stateProvider
        .state('about',{
            url:'/about',
            templateUrl: 'template/about.php'

        })
      $stateProvider
        .state('support',{
            url:'/support',
            templateUrl: 'template/support.php'

        })
       $stateProvider
        .state('gallery',{
            url:'/gallery',
            templateUrl: 'template/gallery.php'

        })
       $stateProvider
        .state('testimony',{
            url:'/testimony',
            templateUrl: 'template/testimony.php'

        })
       $stateProvider
        .state('contact',{
            url:'/contact',
            templateUrl: 'template/contact.php'

        })
       
       $stateProvider
        .state('news',{
            url:'/news',
            templateUrl: 'template/news.php'

        })
       $stateProvider
        .state('payment',{
            url:'/payment',
            templateUrl: 'template/payment.php'

        })
}])



thankam.controller('homeCtrl', function($scope, $http){
	
})


$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});



function changeSelect(i){
  $(".mom").removeClass('sel'+i);
  $("#mm"+i).addClass('sel'+i);
}
  function showSM(){
    $("#sm-menu").show(500);
  }


  function hideSM(){
    $("#sm-menu").hide();
  }