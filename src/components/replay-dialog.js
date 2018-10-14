"use strict";

export default class ReplayDialog {
  constructor() {
    this.dialog = document.getElementById("myModal");
    this.qrCodeImage = document.getElementById("replay-dialog-qrcode");
    this.linkLabel = document.getElementById("replay-dialog-link");
    let closeButton = document.getElementsByClassName("close")[0];

    closeButton.addEventListener("click", () => {
      this.dialog.style.display = "none";
    });
  }

  show(qrCodeAsBase64, replayUrl) {
    this.qrCodeImage.src = qrCodeAsBase64;
    this.linkLabel.innerText = replayUrl;
    this.dialog.style.display = "block";
  }
}
