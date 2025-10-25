"use strict";
/*    Project 1

      Order Form Code
      Author: Dinesh Kumar Gummadavelli
      Date:   10/24/2025

      Filename: compute.js
 */

(function () {

    function getQuery() {
      var qs = window.location.search || "";
      if (qs.charAt(0) === "?") qs = qs.substring(1);
      var pairs = qs.split("&");
      var map = {};
      for (var i = 0; i < pairs.length; i++) {
        if (!pairs[i]) continue;
        var kv = pairs[i].split("=");
        var key = decodeURIComponent(kv[0] || "");
        var val = decodeURIComponent(kv[1] || "");
        map[key] = val;
      }
      return map;
    }
  
    function makeRow(label, value) {
      var tr = document.createElement("tr");
      var tdOp = document.createElement("td");
      var tdRes = document.createElement("td");
      tdOp.textContent = label;
      tdRes.textContent = value;
      tr.appendChild(tdOp);
      tr.appendChild(tdRes);
      return tr;
    }
  
    function toNumber(v) {
      var n = parseFloat(v);
      return isNaN(n) ? null : n;
    }
  
    function init() {
      var map = getQuery();
      var n1 = toNumber(map.num1);
      var n2 = toNumber(map.num2);
      var tbody = document.getElementById("table-body");
  
      if (!tbody) return;
  
      if (n1 === null || n2 === null) {
        tbody.appendChild(makeRow("Error", "Missing or invalid numbers."));
        return;
      }
  
      var add = n1 + n2;
      var sub = n1 - n2;
      var mul = n1 * n2;
      var div;
      if (n2 === 0) {
        div = "Cannot divide by zero";
      } else {
        div = n1 / n2;
      }
  
      tbody.appendChild(makeRow(n1 + " + " + n2, add));
      tbody.appendChild(makeRow(n1 + " - " + n2, sub));
      tbody.appendChild(makeRow(n1 + " x " + n2, mul));
      tbody.appendChild(makeRow(n1 + " / " + n2, div));
    }
  

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  })();