let AFRAME = require("aframe");
AFRAME.registerComponent("color-transformer", {
  schema: {
    color: { type: "string", default: "#ffffff" }
  },

  play: function() {
    let color = this.data.color;
    this.el.addEventListener("drag-drop", function(event) {
      console.log(event.detail);
      event.detail.dropped.setAttribute("material", "color", color);
    });
  }
});
