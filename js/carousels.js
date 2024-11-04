(() => {
  // <stdin>
  function pageSlider() {
    pageSlider = document.getElementById("page-slider");
    if (pageSlider != null) {
      console.log("Slider found");
    } else {
      console.log("No slider");
      return;
    }
  }
  pageSlider();
})();
