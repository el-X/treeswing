let AFRAME = require("aframe");
AFRAME.registerComponent("head-swapper", {
  init: () => {
    let head = document.getElementById("head");
    console.log("head", head.components.camera.el.components);
  }
});
