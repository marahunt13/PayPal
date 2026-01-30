let count = 0;
const pal = document.getElementById("pal");
const poses = [
  "images/pal-jump.png",
  "images/pal-wave.png",
  "images/pal-sit.png",
  "images/pal-toy.png"
];

function addToCart() {
  count++;
  document.getElementById("count").innerText = count;

  const randomPose = poses[Math.floor(Math.random() * poses.length)];
  pal.src = randomPose;
  pal.style.transform = "scale(1.1)";

  setTimeout(() => {
    pal.style.transform = "scale(1)";
  }, 300);
}
