const visible = document.querySelector(".collapsible__action--visible");
const hidden = document.querySelector(".collapsible__action--hidden");
const content = document.querySelector(".collapsible__content");

window.onload = content.style.overflow = "hidden";

const anim = content.animate(
  { height: ["0px", "100px"] },
  { duration: 100, fill: "both" }
);

anim.pause();

const animV = visible.animate(
  { opacity: ["0", "1"] },
  { duration: 100, fill: "both" }
);

animV.pause();

const animH = hidden.animate(
  { opacity: ["1", "0"] },
  { duration: 100, fill: "both" }
);

animH.pause();

document.querySelector("button").addEventListener("click", () => {
  if (anim.playState === "paused") {
    anim.play();
  } else {
    anim.reverse();
  }
  if (animV.playState === "paused") {
    animV.play();
  } else {
    animV.reverse();
  }
  if (animH.playState === "paused") {
    animH.play();
  } else {
    animH.reverse();
  }
});
