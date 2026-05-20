document.body.classList.add("envelope-open");
function openInvitation() {
  const envelope = document.getElementById("envelopeSection");
  const inviteText = document.querySelector(".invite-text");
  const envelopeBg = document.querySelector(".envelope-bg");
  const videoSection = document.getElementById("videoSection");
  const video = document.getElementById("introVideo");

  inviteText.classList.add("hide-text");
  envelopeBg.classList.add("open-envelope");

  setTimeout(() => {
    envelope.classList.add("hide-envelope");
    videoSection.classList.add("show-video");
    video.muted = true; 
    video.play();
    video.onended = () => {
      videoSection.style.display = "none";
      document.body.classList.remove("envelope-open");
      const wrapper = document.querySelector(".jr-wrapper");
      const logoR = document.querySelector(".logo-r");
      const logoJ = document.querySelector(".logo-j");
      wrapper.classList.add("show-logo");
      setTimeout(() => {
        logoR.classList.add("show-r");
      }, 300);
      setTimeout(() => {
        logoJ.classList.add("show-j");
      }, 1500);
      document.querySelector(".story-text")
        .classList.add("show-story");
    };
  }, 700);
}
const weddingDate = new Date("2026-06-17T18:00:00").getTime();
function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;
  if (distance < 0) {
    ["days", "hours", "minutes", "seconds"].forEach((id) => {
      document.getElementById(id).innerHTML = "00";
    });
    return;
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = String(days).padStart(2, "0");
  document.getElementById("hours").innerHTML = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerHTML = String(minutes).padStart(
    2,
    "0",
  );
  document.getElementById("seconds").innerHTML = String(seconds).padStart(
    2,
    "0",
  );
}
updateCountdown();
setInterval(updateCountdown, 1000);

const groomEl = document.querySelector(".groom-name");
const brideEl = document.querySelector(".bride-name");

function splitText(element) {
  if (!element) return;
  const text = element.getAttribute("data-text");
  element.innerHTML = "";
  text.split("").forEach((char, index) => {
    const span = document.createElement("span");
    if (char === " ") {
      span.innerHTML = "&nbsp;";
    } else {
      span.textContent = char;
    }
    span.style.animationDelay = index * 0.1 + "s";
    element.appendChild(span);
  });
}

splitText(groomEl);
splitText(brideEl);

const coupleSection = document.querySelector(".couple-section");
const coupleObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        groomEl.classList.add("show-groom");
        setTimeout(() => {
          brideEl.classList.add("show-bride");
        }, 600);
      }
    });
  },
  { threshold: 0.45 },
);
if (coupleSection) {
  coupleObserver.observe(coupleSection);
}

const dateSection = document.querySelector(".date-section");
const dateObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector(".date-content").classList.add("show-date");
      }
    });
  },
  { threshold: 0.45 },
);
if (dateSection) {
  dateObserver.observe(dateSection);
}

const countdownSection = document.querySelector(".countdown-section");
const countdownObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document
          .querySelector(".countdown-content")
          .classList.add("show-countdown");
      }
    });
  },
  { threshold: 0.4 },
);
if (countdownSection) {
  countdownObserver.observe(countdownSection);
}

const venueSection = document.querySelector(".venue-section");
const venueObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector(".venue-content").classList.add("show-venue");
      }
    });
  },
  { threshold: 0.4 },
);
if (venueSection) {
  venueObserver.observe(venueSection);
}
