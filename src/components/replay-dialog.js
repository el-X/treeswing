"use strict";

export default class ReplayDialog {
  constructor() {
    this.dialog = document.getElementById("replay-dialog");
    this.qrCodeImage = document.getElementById("replay-dialog-qrcode");
    this.linkLabel = document.getElementById("replay-dialog-link");
    let closeButton = document.getElementById("replay-dialog-close-button");

    closeButton.addEventListener("click", () => {
      this.dialog.close();
    });
  }

  show(qrCodeAsBase64, replayUrl) {
    this.qrCodeImage.src = qrCodeAsBase64;
    this.linkLabel.innerText = replayUrl;
    this.dialog.showModal();
  }
}
