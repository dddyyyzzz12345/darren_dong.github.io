
// products
const productList = Vue.createApp({
  data (){
    return {
      message : 'Hello',
      number:-1,
      shopbymenu: true,
      productItemsNumbers:19,
      men : false,
      isSelected:true,
      categories: ['ring', 'bangle','bracelet','necklace','earrings','more'],
      filtersAppied:[],
      sortingOption: [1,2],

      products:[
        { 	
          id: 1, 
        name:'和田玉黄玉平安锁16g', 
        price: 3000, 
        image: 'image/products/Picture1.jpg', 
        color:['necklace'] 
        },
        { 
        id: 2, 
        name:'和田玉青玉圆条手镯仝金霞', 
        price: 800, 
        image: 'image/products/Picture2.JPG', 
        color:['bracelet'] 
        },
        { 
        id: 3, 
        name:'金丝玉白玉刮痧板', 
        price: 300, 
        image: 'image/products/Picture3.JPG', 
        color:['more'] 
        },
        { 
        id: 4, 
        name:'金丝玉白玉平安扣玉璧把件', 
        price: 800, 
        image: 'image/products/Picture4.JPG', 
        color:['necklace'] 
        },
        { 
        id: 5, 
        name:'金丝玉白玉细圆条手镯', 
        price: 350, 
        image: 'image/products/Picture5.JPG', 
        color:['bracelet'] 
        },
        { 
        id: 6, 
        name:'金丝玉白玉圆珠手串', 
        price: 300, 
        image: 'image/products/Picture6.JPG', 
        color:['bangle'] 
        },
        { 
        id: 7, 
        name:'金丝玉薄荷绿色手链', 
        price: 300, 
        image: 'image/products/Picture7.JPG', 
        color:['bangle'] 
        },
        { 
        id: 8, 
        name:'金丝玉彩色雕花圆珠手串', 
        price:300, 
        image: 'image/products/Picture8.JPG', 
        color:['bangle'] 
        },
        { 
        id: 9, 
        name:'金丝玉彩色手镯（橙白）', 
        price: 600, 
        image: 'image/products/Picture9.JPG', 
        color:['bracelet'] 
        },
        { 
        id: 10, 
        name:'金丝玉彩色手镯（淡棕）', 
        price: 600, 
        image: 'image/products/Picture10.JPG', 
        color:['bracelet']
        },
        { 
        id: 11, 
        name:'金丝玉彩色手镯（棕色）', 
        price: 600, 
        image: 'image/products/Picture11.JPG', 
        color:['bracelet']
        },
        {
        id: 12, 
        name:'金丝玉彩色手镯（淡黄色）', 
        price: 600, 
        image: 'image/products/Picture12.JPG', 
        color:['bracelet']
        },
        {
        id: 13, 
        name:'金丝玉彩色手镯（奶白色）', 
        price: 600, 
        image: 'image/products/Picture13.JPG', 
        color:['bracelet']
        },
        {
        id: 14, 
        name:'金丝玉彩色手镯（白色）', 
        price: 600, 
        image: 'image/products/Picture14.JPG', 
        color:['bracelet']
        },
        {
        id: 15, 
        name:'金丝玉彩色手镯（绿色）', 
        price: 600, 
        image: 'image/products/Picture15.JPG', 
        color:['necklace'] 
        },
        {
        id: 16, 
        name:'金丝玉纯色黄色手链', 
        price: 450, 
        image: 'image/products/Picture16.JPG', 
        color:['bangle']
        },
        {
        id: 17, 
        name:'金丝玉纯色绿珠手链', 
        price: 450, 
        image: 'image/products/Picture17.JPG', 
        color:['bangle']
        },
        {
        id: 18, 
        name:'金丝玉方珠手串', 
        price: 450, 
        image: 'image/products/Picture18.JPG', 
        color:['bangle']
        },
        {
        id: 19, 
        name:'金丝玉福袋花生手串', 
        price: 450, 
        image: 'image/products/Picture19.JPG', 
        color:['bangle']
        },
        {
        id: 20, 
        name:'金丝玉葫芦挂件', 
        price: 450, 
        image: 'image/products/Picture20.JPG', 
        color:['bangle']
        },
        { 
        id: 21, 
        name:'金丝玉葫芦手串', 
        price: 100, 
        image: 'image/products/Picture21.jpg', 
        color:['bangle'] 
        },
        { 
        id: 22, 
        name:'金丝玉节节高吊坠', 
        price: 250, 
        image: 'image/products/Picture22.jpg', 
        color:['necklace'] 
        },
        { 
        id: 23, 
        name:'金丝玉莲蓬手链', 
        price: 100, 
        image: 'image/products/Picture23.jpg', 
        color:['bangle'] 
        },
        { 
        id: 24, 
        name:'金丝玉南瓜手串', 
        price: 100, 
        image: 'image/products/Picture24.jpg', 
        color:['bangle'] 
        },
        { 
        id: 25, 
        name:'金丝玉南瓜花吊坠', 
        price: 200, 
        image: 'image/products/Picture25.jpg', 
        color:['necklace'] 
        },
        { 
        id: 26, 
        name:'金丝玉平安牌吊坠', 
        price: 300, 
        image: 'image/products/Picture26.jpg', 
        color:['necklace'] 
        }
      ],
    }
  },

  computed: {

    sortedArray() {
      if (this.sortingOption === 1)
        return [...this.products].sort((a, b) => a.price - b.price);
      else if (this.sortingOption === 2)
        return [...this.products].sort((a, b) => b.price - a.price);
      else return this.products;
    },

    filteredItems () {
      return this.products.filter( (product) =>{
        return this.filtersAppied.every( (filterAppied) =>{

          if (product.color.includes(filterAppied)) {
            return product.color.includes(filterAppied);
          }
          /**
           * if (product.size.includes(filterAppied)) {
            return product.size.includes(filterAppied);
          }
           */
  

        });
      });

    },

    sortByLowPrice () {
      return this.products.sort((a,b) => a.price - b.price )
    },

    sortByHigherPrice () {
      return this.products.sort(function(a,b) {
         return a.price - b.price ;
      })
    }


  },

  methods: {

    change: function(index) {
      this.number = index;
    },

    removeTags (item) {
      this.filtersAppied.pop(item)
    },

    setActive (element) {
      if(this.filtersAppied.indexOf(element) > -1){
        this.filtersAppied.pop(element)
      }else{
        this.filtersAppied.push(element)
      }
    },

    isActive (menuItem) {
      return this.filtersAppied.indexOf(menuItem) > -1
    },


    clickExpand (){
      this.expand = !this.expand
    }
  }

})

productList.mount('#product-list');
console.log(productList.filteredItems);

$( document ).ready(function() {
  

  // Product grid
  const gridItem= $('.grid-item-wrapper');

  gridItem.on('mouseenter', function(){
    $(this).addClass('active');
  })
 //  console.log('rererer');

  gridItem.on('mouseleave', function(){
    $(this).removeClass('active');
  })

})


// Slider
$(document).ready(function(){
  $('#menu-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
    dots: false,
    pauseOnHover: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 4
        }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 3
        }
    }]
  });
});

/* slider popular items
$(function() {
  var w=$(window);
     var sliderContainer = $("#menu-slider-container");
     var sliderUl = $("#menu-slider");
     var sliderLi = sliderUl.children("li");
     var sliderNext = $("#menu-slider-next");
     var sliderPrev = $("#menu-slider-prev");
  var sliderLiWidth = sliderLi.eq(0).width();
     sliderUl.width(sliderLi.length * sliderLiWidth);
     
     if (sliderUl.width() > sliderContainer.width()) {
         sliderNext.fadeIn();
     }
   
  sliderNext.on("click", function() {
         var x = parseInt(sliderUl.css("marginLeft"));
         var ulWidth = sliderUl.width();
      if (ulWidth + x >= sliderContainer.width()) {
             x -= sliderLiWidth * 4;
             if (ulWidth + x < sliderContainer.width()) { x = sliderContainer.width() - ulWidth - 10; }
             sliderUl.stop().animate({ marginLeft: x }, 800);
        sliderPrev.fadeIn();
        console.log(parseInt(sliderUl.css("marginLeft"))*-1, ulWidth - sliderContainer.width());
         }
    if (parseInt(sliderUl.css("marginLeft"))*-1 >= ulWidth - sliderContainer.width()*2) {
          sliderNext.fadeOut();
        }
     });
      
     sliderPrev.on("click", function() {
         var x = parseInt(sliderUl.css("marginLeft"));
         var ulWidth = sliderUl.width();
      if (x <= 0) { 
             x += sliderLiWidth * 4;
             if (x > 0) { x = 0; }
             sliderUl.stop().animate({ marginLeft: x }, 800);
        sliderNext.fadeIn();
        if (x == 0) {
          sliderPrev.fadeOut();
        }
         }
     });
 });

 */