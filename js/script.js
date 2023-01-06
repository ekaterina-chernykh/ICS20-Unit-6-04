// Copyright (c) 2022 Ekaterina All rights reserved
//
// Created by: Ekaterina
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-6-04/sw.js", {
    scope: "/ICS20-Unit-6-04/",
  })
}

/**
 * This function displays an alert.
 */
window.onload = function () {
  const params = new URLSearchParams(document.location.search)

  const radius = params.get("radius")
  console.log(radius)

  const volume = (4.0 / 3.0) * Math.PI * Math.pow(radius, 3)
  const dimensions = "<ul>\n<li>radius=" + radius + "</li>\n</ul>"

  document.getElementById("dimension").innerHTML = dimensions
  document.getElementById("volume").innerHTML =
    "Volume is: " + volume.toFixed(2) + " units³"
}
