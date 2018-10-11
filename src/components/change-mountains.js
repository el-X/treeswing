let AFRAME = require("aframe");
AFRAME.registerComponent("change-mountains", {
  init: function() {
    let sceneEl = document.querySelector("a-scene");
    let mountainsEl = sceneEl.querySelector("#enviro");
    let mountains = true;
    this.el.addEventListener("click", function() {
      if (mountains) {
        mountainsEl.setAttribute("environment", "groundYScale", "0");
        mountains = false;
      } else if (!mountains) {
        mountainsEl.setAttribute("environment", "groundYScale", "40");
        mountains = true;
      }
    });
  }
});
