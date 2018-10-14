"use strict";

export default class ReplayDialog {
  constructor() {
    this.dialog = document.getElementById("replay-dialog");
    let closeButton = document.getElementById("replay-dialog-close-button");

    closeButton.addEventListener("click", () => {
      this.dialog.close();
    });
  }

  show(qrCodeAsBase64, replayUrl) {
    console.log(qrCodeAsBase64);
    console.log(replayUrl);
    this.dialog.showModal();
  }
}
