// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap-sprockets

/* Fonction scroll */
/*$(document).ready(function(){
    $('a[href^="#"]').on('click', function(evt){
       evt.preventDefault(); 
	var target = $(this).attr('href');
	$('html, body')  
       .stop()
       .animate({scrollTop: $(target).offset().top}, 1000 );
    });
});
*/

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery3
//= require bootstrap-sprockets

/* Fonction scroll */
$(document).ready(function(){
  $('a[href^="#"]').on('click', function(evt){
   evt.preventDefault(); 
   var target = $(this).attr('href');
   $('html, body')  
   .stop()
   .animate({scrollTop: $(target).offset().top}, 1000 );
 });
});

/* Fix Shopping cart */
/* * Fix sidebar at some point and remove
   * fixed position at content bottom
   */

   $(window).scroll(function () { 
// distance from top of footer to top of document
footertotop = ($('.footer').position().top);
// distance user has scrolled from top, adjusted to take in height of sidebar (570 pixels inc. padding)
scrolltop = $(document).scrollTop()+900;
// difference between the two
difference = scrolltop-footertotop;
// if user has scrolled further than footer,
// pull sidebar up using a negative margin
if (scrolltop > footertotop) {
  $('#cart').css('margin-top',  0-difference);
}
else  {
  $('#cart').css('margin-top', 0);
}
});



/* Algo */
$(document).ready(function() {

  // Product data to be used in shop and in cart
  var products = {
    'Chemise' : ['Chemise', " ", 18, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad,e_improve/dpr_auto/chemisebleu_a2y721.jpg', 1],
    'Polo' : ['Polo', " ", 14, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad,e_improve/dpr_auto/polooo_qm4ap7.jpg', 2],  
    'T-shirt' : ['T-shirt', " ", 16, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad/dpr_auto/tshirtt_lajoqg.png', 3],
    'Pull' : ['Pull', " ",  25, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad/dpr_auto/pull-homme-amundsen-peak_h7hefc.png', 4],
    'Costume' : ['Costume', " ", 2, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad/dpr_auto/costume_zeiypw.jpg', 5],
    'Gilet Costume' : ['Gilet Costume', " ", 2, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad/dpr_auto/gilet6_ehulat.png', 6],
    'Veste' : ['Veste', " ", 2, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad/dpr_auto/blazer_hqcmes.png', 7],
    'Pantalon' : ['Pantalon', " ", 2, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad/dpr_auto/trousers_a5pvgw.jpg', 8],
    'Cravatte / Noeud pap' : ['Cravatte / Noeud pap', " ", 2, 'https://res.cloudinary.com/zipjet/image/upload/w_639,h_806,c_pad/dpr_auto/Tie_BowTie_movqg7.jpg', 9],
    'Short' : ['Short', " ", 2, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad,e_improve/dpr_auto/short2_jlrqth.png', 10],
    'Robe' : ['Robe', " ", 2, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad,e_improve/dpr_auto/robe_3_kgh0kq.jpg', 11],
    'Jupe' : ['Jupe', " ", 2, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad,e_improve/dpr_auto/jupe_4_jzjhuq.jpg', 12],
    'Manteau' : ['Manteau', " ", 2, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad,e_improve/dpr_auto/manteau_hwfxm9.jpg', 13],
    'Blouson' : ['Blouson', " ", 2, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad,e_improve/dpr_auto/blouson_2_zjaroy.png', 14],
    'Doudoune' : ['Doudoune', " ", 2, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad,e_improve/dpr_auto/doudoune_jp8y8u.jpg', 15],
    'Imperméable' : ['Imperméable', " ", 2, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad,e_improve/dpr_auto/imperme%CC%81able_m7lmdr.jpg', 16],
    'Echarpe / Foulard' : ['Echarpe / Foulard', " ", 2, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad,e_improve/dpr_auto/charpe_sakocu.png', 17],
    'Bonnet' : ['Bonnet', " ", 2, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad,e_improve/dpr_auto/bonnet_senqyz.jpg', 18],
    'Chapeau' : ['Chapeau', " ", 2, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad,e_improve/dpr_auto/chapeau_nwnn2n.jpg', 19],
    'Oreiller' : ['Oreiller', " ", 2, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad/dpr_auto/oreiller_dojgnj.png', 20],
    'Taie oreiller' : ['Taie oreiller', " ", 2, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad/dpr_auto/taie_d_oreiller_t1od9o.png', 21],
    'Drap' : ['Drap', " ", 2, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad/dpr_auto/drap4_xkylam.jpg', 22],
    'Alèse' : ['Alèse', " ", 2, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad,e_improve/dpr_auto/alese_2_zly9qd.jpg', 23],
    'Plaid' : ['Plaid', " ", 2, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad,e_improve/dpr_auto/plaid_s9q8fp.jpg', 24],
    'Couverture' : ['Couverture', " ", 2, 'https://res.cloudinary.com/zipjet/image/upload/w_639,h_806,c_pad,e_improve/dpr_auto/Couverture_ki1irs.jpg', 25],
    'Housse de couette' : ['Housse de couette', " ", 2, 'https://res.cloudinary.com/zipjet/image/upload/w_639,h_806,c_pad,e_improve/dpr_auto/Duvetcover_nc8ekd.jpg', 26],
    'Petite serviette' : ['Petite serviette', " ", 2, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad,e_improve/dpr_auto/petit_serviette_ohpuri.jpg', 27],
    'Grande serviette' : ['Grande serviette', " ", 2, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad/dpr_auto/serviette_2_w5uwvl.jpg', 28],
    'Couette' : ['Couette', " ", 2, 'http://res.cloudinary.com/dhxmygcde/image/upload/w_639,h_806,c_pad,e_improve/dpr_auto/couette_vftqmj.jpg', 29]
  };  
  
  // Populates shop with items based on template and data in var products
  
  var $shop = $('.shop');
  var $cart = $('.cart-items');
  
  for(var item in products) {
    var itemName = products[item][0],
    itemDescription = products[item][1],
    itemPrice = products[item][2],
    itemImg = products[item][3],
    itemId = products[item][4],
    $template = $($('#productTemplate').html());
    
    $template.find('h1').text(itemName);
    $template.find('p').text(itemDescription);
    //$template.find('.price').text('$' + itemPrice);
    $template.css('background-image', 'url(' + itemImg + ')');
    
    $template.data('id', itemId);
    $template.data('name', itemName);
    //$template.data('price', itemPrice);
    $template.data('image', itemImg);
    
    $shop.append($template);
  }
  
  // Checks quantity of a cart item on input blur and updates total
  // If quantity is zero, item is removed
  
  $('body').on('blur', '.cart-items input', function() {
    var $this = $(this),
    $item = $this.parents('li');
    if (+$this.val() === 0) {
      $item.remove();
    } else {
    }
    updateCartQuantity();
    //calculateAndUpdate();
  });
  
  // Add item from the shop to the cart
  // If item is already in the cart, +1 to quantity
  // If not, creates the cart item based on template
  
  $('body').on('click', '.product .add', function() {
    var items = $cart.children(),
    $item = $(this).parents('.product'),
    $template = $($('#cartItem').html()),
    $matched = null,
    quantity = 0;
    
    $matched = items.filter(function(index) {
      var $this = $(this);
      return $this.data('id') === $item.data('id');
    });

    if ($matched.length) {
      quantity = +$matched.find('.quantity').val() + 1;
      $matched.find('.quantity').val(quantity);
      //calculateSubtotal($matched);
    } else {
      $template.find('.cart-product').css('background-image', 'url(' + $item.data('image') + ')');
      $template.find('h3').text($item.data('name'));
      //$template.find('.subtotal').text('$' + $item.data('price'));

      $template.data('id', $item.data('id'));
     // $template.data('price', $item.data('price'));
      //$template.data('subtotal', $item.data('price'));
      
      $cart.append($template);
    }
    
    updateCartQuantity();
    //calculateAndUpdate();
  });

  // Calculates subtotal for an item
  
  /*function calculateSubtotal($item) {
    var quantity = $item.find('.quantity').val(),
        price = $item.data('price'),
        subtotal = quantity * price;
    $item.find('.subtotal').text('$' + subtotal);
    $item.data('subtotal', subtotal);
  } */

  // Clicking on the cart link opens up the shopping cart
  
  var $cartlink = $('.cart-link'), $wrap = $('#wrap');
  
  $cartlink.on('click', function() {
    $cartlink.toggleClass('active');
    $wrap.toggleClass('active');
    return false;    
  });
  
  // Clicking outside the cart closes the cart, unless target is the "Add to Cart" button 

  $wrap.on('click', function(e){
    if (!$(e.target).is('.add')) {
      $wrap.removeClass('active');
      $cartlink.removeClass('active');
    }
  });

  // Calculates and updates totals, taxes, shipping
  /*
  function calculateAndUpdate() {
    var subtotal = 0,
        items = $cart.children(),
        // shipping not applied if there are no items
        shipping = items.length > 0 ? 5 : 0,
        tax = 0;
    items.each(function(index, item) {
      var $item = $(item),
          numero = $item.find('id');
      subtotal += price;
    });
    $('.subtotalTotal span').text(formatDollar(subtotal));
    tax = subtotal * .05;
    $('.taxes span').text(formatDollar(tax));
    $('.shipping span').text(formatDollar(shipping));
    $('.finalTotal span').text(formatDollar(subtotal + tax + shipping));
  }
  */

// send arrays to the Controller

function sendArraysToController() {
  var quantity = [],
  idarray = [],
  a = [],
  items = $cart.children();
  items.each(function(index, item) {
    var $item = $(item),
    unit = 0,
    idsolo = 0;
    unit = +$item.find('.quantity').val();
    idsolo = $item.data('id');
    quantity.push(unit);
    idarray.push(idsolo);
  }); 

  a.push(quantity);
  a.push(idarray);

  $.ajax({
    url : "/calculate",
    type : "post",
    beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
    data : { data_infos: JSON.stringify(a) }
  });

}

  //  Update the total quantity of items in notification, hides if zero
  
  function updateCartQuantity() {
    var quantities = 0,
    $cartQuantity = $('span.cart-quantity'),
    items = $cart.children();
    items.each(function(index, item) {
      var $item = $(item),
      quantity = +$item.find('.quantity').val();
      quantities += quantity;
    });

    if(quantities > 0){
      $cartQuantity.removeClass('empty');
    } else {
      $cartQuantity.addClass('empty');
    }
    $cartQuantity.text(quantities);
  }
  
 /*
  //  Formats number into dollar format
     
  function formatDollar(amount) {
    return '$' + parseFloat(Math.round(amount * 100) / 100).toFixed(2);
  }
  */
  // Restrict the quantity input field to numbers only

  $('body').on('keypress', '.cart-items input', function (ev) {
    var keyCode = window.event ? ev.keyCode : ev.which;
    if (keyCode < 48 || keyCode > 57) {
      if (keyCode != 0 && keyCode != 8 && keyCode != 13 && !ev.ctrlKey) {
        ev.preventDefault();
      }
    }
  });
  
  // Trigger animation on Add to Cart button click
  
  $('.addtocart').on('click', function () {
    $(this).addClass('active');
    setTimeout(function () {
      $('.addtocart').removeClass('active');    
    }, 1000);
  });
  
  // Trigger error animation on Checkout button

  $('.checkout').on('click', function () {
    $(this).addClass('active');
    $('.error').css('display', 'block');
    setTimeout(function () {
      $('.checkout').removeClass('active');    
      $('.error').css('display', 'none');      
    }, 2000);

    sendArraysToController();
  }); 

  // pass the array to the controller
  /*
  $('.checkout').on('click', function () {
    var quantity = [],
        idarray = [],
        items = $cart.children();
    items.each(function(index, item) {
      var $item = $(item),
          quantity.push($item.find('.quantity').val());
          idarray.push($item.data('id'));
    });

    $.ajax({
        url : "/HomeController/index",
        type : "post",
        data : { data_value: JSON.stringify(quantity) }
    });
  });    
  */
});

