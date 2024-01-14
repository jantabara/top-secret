// (function () {
//   const firstLineWords = ['Eight', 'Digitální'];
//   const secondLineWords = ['Digit', 'Vývojové'];
//   const thirdLineWords = ['Club', 'Studio'];

//   const firstWord = document.querySelector('#hero-text .hero-content-first')
//   const secondWord = document.querySelector('#hero-text .hero-content-second')
//   const thirdWord = document.querySelector('#hero-text .hero-content-third')
//   const rate = 6500

//   if (!firstWord || !secondWord || !thirdWord) { return; }

//   let firstIndex = 0;
//   let secondIndex = 0
//   let thirdIndex = 0

//   if (document?.startViewTransition) {
//     setInterval(() => {
//       document.startViewTransition(() => {
//         // this is the DOM mutation!
//         firstWord.textContent = firstLineWords[firstIndex++]

//         if (firstIndex >= firstLineWords.length)
//           firstIndex = 0
//       })
//     }, rate)

//     setTimeout(() => {
//       setInterval(() => {
//         document.startViewTransition(() => {
//           // this is the DOM mutation!
//           secondWord.textContent = secondLineWords[secondIndex++]

//           if (secondIndex >= secondLineWords.length)
//             secondIndex = 0
//         })
//       }, rate)
//     }, 750)

//     setTimeout(() => {
//       setInterval(() => {
//         document.startViewTransition(() => {
//           // this is the DOM mutation!
//           thirdWord.textContent = thirdLineWords[thirdIndex++]

//           if (thirdIndex >= thirdLineWords.length)
//             thirdIndex = 0
//         })
//       }, rate)
//     }, 1500)
//   }
//   else {
//     document.querySelector('.no-support').style.display = 'block'
//   }
// })();

(function () {
  const firstWord = document.querySelector('#hero-text .hero-content-first')
  const secondWord = document.querySelector('#hero-text .hero-content-second')
  const thirdWord = document.querySelector('#hero-text .hero-content-third')
  const rate = 4500

  if (!firstWord || !secondWord || !thirdWord) { return; }

  setInterval(() => {
    const firstContent = firstWord.textContent === "Digitální" ? "Eight" : "Digitální";
    const secondContent = secondWord.textContent === "vývojové" ? "Digit" : "vývojové";
    const thirdContent = thirdWord.textContent === "studio" ? "Club" : "studio";

    firstWord.classList.remove("fade-hero");

    setTimeout(() => {
      requestAnimationFrame(() => {
        firstWord.innerHTML = firstContent;
        firstWord.classList.add("fade-hero");
      });
    }, 225);

    setTimeout(() => {
      secondWord.classList.remove("fade-hero");
      setTimeout(() => {
        requestAnimationFrame(() => {
          secondWord.innerHTML = secondContent;
          secondWord.classList.add("fade-hero");
        });
      }, 225);
    }, 250);

    setTimeout(() => {
      thirdWord.classList.remove("fade-hero");
      setTimeout(() => {
        requestAnimationFrame(() => {
          thirdWord.innerHTML = thirdContent;
          thirdWord.classList.add("fade-hero");
        });
      }, 225);
    }, 500);
    
  }, rate);

  // hide hero text
  document.onscroll = function() {
    const currentScroll = document.documentElement.scrollTop;
    const aboutSection = document.getElementById("about");
    const heroText = document.getElementById("hero-text");

    if (!aboutSection || !heroText) return

    if (aboutSection.getBoundingClientRect().bottom < (currentScroll + 40)) {
      heroText.style.visibility = 'hidden';
    }
    else {
      heroText.style.visibility = 'visible';
    }
  }
})();