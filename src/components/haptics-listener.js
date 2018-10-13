let AFRAME = require("aframe");
// Listens to grab events and enables force feedback on the grabbing component
AFRAME.registerComponent("haptics-listener", {
  init: function() {
    this.el.addEventListener("grab-start", event => {
      event.detail.hand.components.haptics.pulse(0.5, 200);
    });
  }
});
