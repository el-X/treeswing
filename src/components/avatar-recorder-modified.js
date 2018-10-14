window.UPLOADCARE_PUBLIC_KEY = "demopublickey";
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
      let url = location.protocol + "//" + location.host + location.pathname + "?spectatorMode=true" + "&avatar-recording=" + cdnUrl;
      console.log("URL to show: ", url);
      alert("Replay URL: " + url);
    })
    .fail(function(error, fileInfo) {
      console.error("Not uploaded! ", error, fileInfo);
    });
};
