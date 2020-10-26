var url = 'https://api.early-birds.fr/widget/5cc84c0c15bf4915509ae263/recommendations/684ff828-461d-491a-bd0d-74cd4c7847cb'

$(document).ready(function() {
  fetch(url)
    .then (
      function(response) {
        response.json().then(function(data) { 
          for (let i = 0; i < data.recommendations.length; i++) {
              var one_product = " <div class='xo-recommendation slick-slide xo-recommendation-" + i + "'> <a href=" + data.recommendations[i].product.url  + "> <div class='xo-product-image-wrapper'><img class='xo-product-image' src='" + data.recommendations[i].product.photo + "'></div><div class='xo-product-infos'><p class='xo-product-title'>" + data.recommendations[i].product.title + "</p><p class='xo-product-price'>" + data.recommendations[i].product.price + "€</p></div></a></div>"
              document.getElementsByClassName("autoplay")[0].innerHTML += one_product;
          } 
        })
      }
      ).catch(err => console.log(err))
  
    var checkXO = setInterval(function() {
        if ($('.xo-recommendation').length) {
            $('.autoplay').slick({
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
                variableWidth: true
            }); 
            clearInterval(checkXO);
        }
    }, 100);
});
