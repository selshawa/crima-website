/**
 * File: script.js
 * Description:
 * This script enables responsive navigation on mobile devices and small screens for the project website.
 * It adds a click event listener to the menu toggle button to show or hide the navigation links.
 * This functionality is only visible on screens smaller than 768px, as defined in the CSS.
 *
 * Author: Sahba El-Shawa
 * Organization: Eurac Research
 * Last updated: July 2025
 */

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-list");

  if (burger && nav) {
    burger.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  }
});
