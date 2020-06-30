// buttonSet1
$( function() {

  $( '#buttonHeader' ).click( function() {
    $( 'h1' ).text( 'Hello World!!' );
  });

  $( '#buttonArticle' ).click( function() {
    $( 'article' ).css({
      'color': 'white',
      'background-color': '#B384FF'
    });
  });

  $( '#buttonFooter' ).click( function() {
    $( 'footer' ).html('<p><a href="https://www.kyusan-u.ac.jp">Kyushu Sangyo University Molding</a></p>' );
    $( 'footer a' ).css( 'color','#c299ff' );
  });

  $( '#buttonAside' ).click( function() {
    $( 'aside' ).css({
      'color': 'white',
      'background-color': '#9057ff'
    });
  });

});

// buttonSet2
$( function() {

  $( '#buttonNormal' ).click( function() {
    $('main').css( 'flex-direction','row' );
  });

  $( '#buttonReverse' ).click( function() {
    $('main').css( 'flex-direction','row-reverse' );
  });


  });



// buttonSet3
$( function() {
  $( '#buttonVertical' ).click( function() {
    $('main').css( 'flex-direction','column' );
  });

  $( '#buttonInversion' ).click( function() {
    $('main').css( 'flex-direction','column-reverse' );
  });



});
