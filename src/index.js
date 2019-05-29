import "./styles.css";
import { Controller, Scene } from "scrollmagic";

const controller = new Controller();

(document.querySelectorAll(".section") || []).forEach(s => {
  new Scene({
    triggerElement: s
  })
    .setClassToggle("body", `bg--${s.dataset.bgColor}`)
    .addTo(controller);
});
