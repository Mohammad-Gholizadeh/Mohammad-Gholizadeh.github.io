// ############################################################################################

const bottomDiff = 100;
const skillbars = document.querySelectorAll(".skillbar");

window.addEventListener("scroll", () => {
  skillbars.forEach((skillbar) => {
    const status = checkIfIsInView(skillbar);
    manageClass(skillbar, status, "show");
    setWidth(skillbar, status, ".skillbar-bg");
  });
});

function manageClass(element, status, classname) {
  status
    ? element.classList.add(classname)
    : element.classList.remove(classname);
}

function setWidth(element, status, classname) {
  const child = element.querySelector(classname);
  child.style.width = status ? `${child.dataset.width}%` : `0%`;
}

function checkIfIsInView(element) {
  const bordersElements = element.getBoundingClientRect();
  return (
    bordersElements.top >= 0 &&
    bordersElements.left >= 0 &&
    bordersElements.right <=
      (window.innerWidth || document.documentElement.clientWidth) &&
    bordersElements.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) - bottomDiff
  );
}

// #########################################################################################

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

/**
 * index.js
 * - All our useful JS goes here, awesome!
 Maruf-Al Bashir Reza
 */

$(document).ready(function ($) {
  function animateElements() {
    $(".progressbar").each(function () {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var percent = $(this).find(".circle").attr("data-percent");
      var percentage = parseInt(percent, 10) / parseInt(100, 10);
      var animate = $(this).data("animate");
      if (
        (elementPos < topOfWindow + $(window).height() - 30 && !animate) ||
        elementPos > topOfWindow + $(window).height() + 30
      ) {
        $(this).data("animate", true);
        $(this)
          .find(".circle")
          .circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            thickness: 14,
            fill: {
              color: "#2962ff",
            },
          })
          .on(
            "circle-animation-progress",
            function (event, progress, stepValue) {
              $(this)
                .find("")
                .text((stepValue * 100).toFixed(1) + "%");
            }
          )
          .stop();
      }
    });
  }

  // Show animated elements
  animateElements();
  $(window).scroll(animateElements);
});
// ####################################################################################
$(window).on("load", function () {
  setTimeout(function () {
    // allowing 3 secs to fade out loader
    $(".page-loader").fadeOut("slow");
  }, 1000);
});
// ####################################################################################
var cdButtons = [].slice.call(document.getElementsByClassName("cd-button"));
if (cdButtons.length > 0) {
  cdButtons.forEach(function (button) {
    button.addEventListener(
      "click",
      function (e) {
        e.preventDefault();
        button.disabled = true;
        var bspinner = document.getElementById(button.id + "-spinner");
        bspinner.classList.add("btspinner");

        setTimeout(function () {
          bspinner.classList.remove("btspinner");
          button.disabled = false;
        }, 2000);
      },
      false
    );
  }); // end foreach
}

// ####################################################################################

