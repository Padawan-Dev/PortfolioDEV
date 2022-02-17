// const typedTextSpan = document.querySelector(".typed-text");
// const cursorSpan = document.querySelector(".cursor");

// //const textArray = ["hard", "fun", "a journey", "LIFE"];
// const textArray = ["Software Developer", "Java Developer", "Android Developer", "Padawan-Dev"];
// const typingDelay = 100;
// const erasingDelay = 100;
// const newTextDelay = 2000; // Delay between current and next text
// let textArrayIndex = 0;
// let charIndex = 0;

// function type() {
//   if (charIndex < textArray[textArrayIndex].length) {
//     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//     typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//     charIndex++;
//     setTimeout(type, typingDelay);
//   } 
//   else {
//     cursorSpan.classList.remove("typing");
//     setTimeout(erase, newTextDelay);
//   }
// }

// function erase() {
//   if (charIndex > 0) {
//     if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
//     typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
//     charIndex--;
//     setTimeout(erase, erasingDelay);
//   } 
//   else {
//     cursorSpan.classList.remove("typing");
//     textArrayIndex++;
//     if(textArrayIndex>=textArray.length) textArrayIndex=0;
//     setTimeout(type, typingDelay + 1100);
//   }
// }

// document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
//   if(textArray.length) setTimeout(type, newTextDelay + 250);
// });

//monitora o scroll da tela em qq movimento

function subirTela(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'

  }); //Joga o scroll la pra cima
}



function decidirBotaoScroll(){
  if(window.scrollY === 0){
    //ocutar o botão
    document.querySelector('.scrollbutton').style.display = 'none';
    document.querySelector('.logo-name').style.display = 'none';
    document.querySelector('header').style.backgroundColor = '';
  }else {
    //mostrar o botão
    document.querySelector('.scrollbutton').style.display = 'block';
    document.querySelector('.logo-name').style.display = 'block';
    document.querySelector('header').style.backgroundColor = 'rgba(0,0,0,0.6)';
  }
}


window.addEventListener('scroll', decidirBotaoScroll);
