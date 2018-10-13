let AFRAME = require("aframe");

var avatarRecorder = AFRAME.components["avatar-recorder"],
  avatarRecorderComponent = avatarRecorder.Component;

avatarRecorderComponent.prototype.storeRecording = function(recordingData) {
  // thx to https://github.com/aframevr/a-saturday-night
  var jsonData = JSON.stringify(recordingData);
  var type = "application/json";
  var blob = new Blob([jsonData], { type: type });
  var url = URL.createObjectURL(blob);
  var fileName = "player-recording-" + document.title + "-" + Date.now() + ".json";
  var aEl = document.createElement("a");
  aEl.href = url;
  aEl.setAttribute("download", fileName);
  aEl.innerHTML = "downloading...";
  aEl.style.display = "none";
  document.body.appendChild(aEl);
  setTimeout(function() {
    aEl.click();
    document.body.removeChild(aEl);
  }, 1);
};
