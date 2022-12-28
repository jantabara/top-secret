function setSourceForVideos() {
  if (window.innerWidth > 1023) {
    var videos = document.getElementsByClassName("mobile-no-load");

    for (var i = 0; i < videos.length; i++) {
      var srcAttributeEmpty = !videos[i].childNodes[0].getAttribute("src");

      videos[i].childNodes[0].setAttribute(
        "src",
        videos[i].childNodes[0].getAttribute("data-src")
      );

      if (srcAttributeEmpty) {
        videos[i].load();
      }
    }
  }
}

window.addEventListener("resize", function () {
  setSourceForVideos();
});

setSourceForVideos();
