let AFRAME = require("aframe");
AFRAME.registerComponent("change-sky", {
  init: function() {
    let sceneEl = document.querySelector("a-scene");
    let enviro_light = sceneEl.querySelector("#enviro");
    let night_light = sceneEl.querySelector("#night_light");
    let day = true;
    this.el.addEventListener("click", function() {
      if (day) {
        enviro_light.setAttribute("environment", "lightPosition", " 0 .04 -1");
        night_light.setAttribute("visible", "true");
        day = false;
      } else if (!day) {
        enviro_light.setAttribute("environment", "lightPosition", "0 .8 1");
        night_light.setAttribute("visible", "false");
        day = true;
      }
    });
  }
});
