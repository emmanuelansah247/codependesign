
import {gsap ,Power4,Power2 } from "gsap/gsap-core";

class MouseCursor 
{

  constructor() {

    const cursor = document.querySelector(".c-cursor__pointer");

    gsap.to(cursor, {
      autoAlpha: 0
    });
  }

  // eslint-disable-next-line class-methods-use-this
  moveMousePos(e) {
    const mousePosX = e.clientX;
    const mousePosY = e.clientY;
    const cursor = document.querySelector(".c-cursor__pointer");

    if (e.target.classList.contains("c-magnetic")) return;

    gsap.to(cursor, 0.5, {
      x: mousePosX,
      y: mousePosY,
      ease: Power4.easeOut
    });
  }

  // eslint-disable-next-line class-methods-use-this
  enterMouse() {
    const cursor = document.querySelector(".c-cursor__pointer");

    gsap.to(cursor, { duration: 1, 
      autoAlpha: 1,
      ease: Power4.easeIn
    });
  }

  handleMousePos(ell) {
    ell.addEventListener("mouseenter", this.enterMouse);
    ell.addEventListener("mousemove", this.moveMousePos, false);
  }

  // eslint-disable-next-line class-methods-use-this
  updateOnHover(e) {
    const { tagName, classList } = e.target;
    if (
      tagName === "LABEL" ||
      tagName === "A" ||
      tagName === "BUTTON" ||
      classList.contains("is-cursor-hover") ||
      (e.target.parentElement.tagName === "A" && e.target.tagName === "IMG")
    ) {
      document.querySelector("html").classList.toggle("is-hover");
    }
  }

  handleLinkHover(ell) {
    ell.addEventListener("mouseover", this.updateOnHover.bind(this));
    ell.addEventListener("mouseout", this.updateOnHover.bind(this));
  }

  render() {
    var ell = document.querySelector("#page");
    this.handleMousePos(ell);
    this.handleLinkHover(ell);
  }
}

class MagneticCursor {

  activateMagnetic() {
    let links = [...document.querySelectorAll(".c-magnetic")];
    links.map((link) => {
      const that = document;
        link.addEventListener("mousemove", function (e) {
        that.moveTarget(e, document, document.querySelector("span"), 50);
        that.moveCursor(e, document, 1.5);
      });

      link.addEventListener("mouseout", function () {
        gsap.to(document.querySelector("span"), {duration: 0.3, 
          x: 0,
          y: 0
        });
      });
    });
  }

  moveCursor(e, link, force) {
    let pos = { x: 0, y: 0 };
    var rect = link.getBoundingClientRect();
    var relX = e.pageX - rect.left;
    var relY = e.pageY - rect.top;
    pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / force;
    pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / force;

    let cursor = document.querySelector(".c-cursor__pointer");

    gsap.to(cursor,{ duration: 0.3,
      x: pos.x,
      y: pos.y
    });
  }

  moveTarget(e, link, span, force) {
    var boundingRect = link.getBoundingClientRect();
    var relX = e.pageX - boundingRect.left;
    var relY = e.pageY - boundingRect.top;

    gsap.to(span, {duration: 0.3,
      x: ((relX - boundingRect.width / 2) / boundingRect.width) * force,
      y: ((relY - boundingRect.height / 2) / boundingRect.height) * force,
      ease: Power2.easeOut
    });
  }

  render() {
    this.activateMagnetic();
  }
}

const mouseCursor = new MouseCursor();
const magneticCursor = new MagneticCursor();

mouseCursor.render();
magneticCursor.render();
