let uploadcare = require("uploadcare-widget");

let AFRAME = require("aframe");

let avatarRecorder = AFRAME.components["avatar-recorder"],
  avatarRecorderComponent = avatarRecorder.Component;

avatarRecorderComponent.prototype.storeRecording = function(recordingData) {
  // thx to https://github.com/aframevr/a-saturday-night
  let jsonData = JSON.stringify(recordingData);
  let type = "application/json";
  let blob = new Blob([jsonData], { type: type });

  let file = uploadcare.fileFrom("object", blob);
  file
    .done(function(fileInfo) {
      let cdnUrl = fileInfo.cdnUrl;
      let url = location.protocol + "//" + location.host + location.pathname + "?url=" + cdnUrl;
      console.log("URL to show: ", url);
      // TODO call component for url popup
    })
    .fail(function(error, fileInfo) {
      console.error("Not uploaded! ", error, fileInfo);
    });
};
