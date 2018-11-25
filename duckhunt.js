$(document).ready(function() {
 
  var $body = $('body');


  // 5. ——— Part 2: Here we go! —— 
  // 6. Things are getting a bit messy. Put everything from problems 1-4 in a new function 
  // called createDuck that "returns" the duck object
  function createDuck(){

  var $duck = $('<div/>').addClass('duck');
  console.log($duck);
  $body.append($duck);
  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  
   setInterval(function()
    {
      $duck.toggleClass('flap').css(' image-rendering','-moz-crisp-edges');


    },250);

  // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"
  // var $positionTop = $duck.css.top + Math.floor( Math.random() * 100 );
  // var $positionLeft = $duck.css.left + Math.floor( Math.random() * 100 );



  $duck.css({
    'left':Math.random() * window.innerWidth +'px',
    'top':Math.random() * window.innerWidth +'px',
   
    },1000);

  // 4. Try making the duck move to a different location after 1 second

  
    $duck.animate({
      'left': Math.random() * window.innerWidth +'px',
      'top':  Math.random() * window.innerHeight+'px',
     
      },1000);

     
      function moving(){
        $duck.css({
          'left':Math.random() * window.innerWidth +'px',
          'top':Math.random() * window.innerWidth +'px',
         
          },1000);
      }
     setInterval(moving,1000);

// 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!
  
  
  
  
  $duck.click(function(){
    $duck.addClass('shot');
    var $shotImg = $('<img/>').attr('src','shot.png');
    $duck.append($shotImg);

    setInterval(function(){

      if($('.shot')){
        $duck.remove();
  
      }
    },1000);

    checkForWinner();
    
  })
  
   function checkForWinner(){

console.log($( "div" ).length );

if ( $( "div" ).length == 1) {
  alert('you win!');
}
   
   }

      
  }

  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  
    for( var i=0 ; i < 5 ; i++ ){
  
      createDuck();

    }

  //    using our fancy new createDuck() function


  // 8a. If you go to the dev tools you’ll see that we made 5 ducks, but they are all in the same place! Modify createDuck so 
  // each time it creates a duck, it appears in a random location. 

  // 8b. The ducks should also move to a random location after 1 second
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"

  // 9. Our ducks are going to be easy targets if they only move once.
  //    Modify createDuck() so the ducks keep moving around!


  // 10. Well Done!  

  //——— Part 3:  We're almost there! —— 

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!


  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second)

  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. If not, alert "YOU WIN!"
})
