function startCountdown() {
  let now = new Date();
  let target = new Date();
  target.setHours(8, 0, 0, 0); // today at 8:00 AM

  // If it's already past 8:00 AM, show 00:00:00
  if (now > target) {
    document.getElementById("timer").textContent = "00:00:00";
    return;
  }

  let countdown = setInterval(function() {
    let current = new Date();
    let diff = target - current;

    if (diff <= 0) {
      clearInterval(countdown);
      document.getElementById("timer").textContent = "00:00:00";
      return;
    }

    let hours = Math.floor(diff / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("timer").textContent =
      String(hours).padStart(2, "0") + ":" +
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0");
  }, 1000);
}

startCountdown();
