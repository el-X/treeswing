let AFRAME = require("aframe");
AFRAME.registerComponent("change-fog", {
  init: function() {
    let sceneEl = document.querySelector("a-scene");
    let fogEl = sceneEl.querySelector("#enviro");
    let fog = true;
    this.el.addEventListener("click", function() {
      if (fog) {
        fogEl.setAttribute("environment", "fog", "0");
        fog = false;
      } else if (!fog) {
        fogEl.setAttribute("environment", "fog", ".75");
        fog = true;
      }
    });
  }
});
