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