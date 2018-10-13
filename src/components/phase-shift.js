let AFRAME = require("aframe");
// turn controller's physics presence on only while button held down
AFRAME.registerComponent("phase-shift", {
  init: function() {
    this.el.addEventListener("gripdown", () => {
      this.el.setAttribute("collision-filter", { collisionForces: true });
    });
    this.el.addEventListener("gripup", () => {
      this.el.setAttribute("collision-filter", { collisionForces: false });
    });
  }
});
