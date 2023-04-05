let timer = 8000;
setInterval(function(){
  setTimeout(function(){
    $('.odometer').html(999999);
  }, timer/2);
  
  setTimeout(function(){
    $('.odometer').html(123678);
   
  }, timer/2);

},timer/2);

setInterval(function(){
  anime();
  setTimeout(function(){
   
    anime_reverse();
  }, timer/2);
},timer)

let anime = function(){
  document.querySelectorAll(`.text_right p`)[0].classList.add('anime');
  document.querySelectorAll(`.text_right p`)[0].classList.remove('anime_reverse');
  document.querySelectorAll(`.text_right p`)[1].classList.add('anime_2');
  document.querySelectorAll(`.text_right p`)[1].classList.remove('anime_reverse_2');

  document.querySelectorAll(`.text_left p`)[0].classList.add('anime_l');
  document.querySelectorAll(`.text_left p`)[0].classList.remove('anime_reverse_l');
  document.querySelectorAll(`.text_left p`)[1].classList.add('anime_2_l');
  document.querySelectorAll(`.text_left p`)[1].classList.remove('anime_reverse_2_l');
  setTimeout(function(){
    document.querySelectorAll(`.text_right p`)[0].style.opacity=0;
    document.querySelectorAll(`.text_right p`)[1].style.opacity=1;

    document.querySelectorAll(`.text_left p`)[0].style.opacity=0;
    document.querySelectorAll(`.text_left p`)[1].style.opacity=1;
   },
   300)
}

let anime_reverse = function(){
  document.querySelectorAll(`.text_right p`)[0].classList.remove('anime');
  document.querySelectorAll(`.text_right p`)[0].classList.add('anime_reverse');
  document.querySelectorAll(`.text_right p`)[0].style.opacity=1;
  document.querySelectorAll(`.text_right p`)[1].classList.remove('anime_2');
  document.querySelectorAll(`.text_right p`)[1].classList.add('anime_reverse_2');
  document.querySelectorAll(`.text_right p`)[1].style.opacity=0;

  document.querySelectorAll(`.text_left p`)[0].classList.remove('anime_l');
  document.querySelectorAll(`.text_left p`)[0].classList.add('anime_reverse_l');
  document.querySelectorAll(`.text_left p`)[0].style.opacity=1;

  document.querySelectorAll(`.text_left p`)[1].classList.remove('anime_2_l');
  document.querySelectorAll(`.text_left p`)[1].classList.add('anime_reverse_2_l');
  document.querySelectorAll(`.text_left p`)[1].style.opacity=0;
}