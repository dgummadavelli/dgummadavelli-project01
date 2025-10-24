/*    Project 1

      Order Form Code
      Author: Dinesh Kumar Gummadavelli
      Date:   10/24/2025

      Filename: createAccount.js
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
      var tdLabel = document.createElement("td");
      var tdVal = document.createElement("td");
      tdLabel.textContent = label;
      tdVal.textContent = value;
      tr.appendChild(tdLabel);
      tr.appendChild(tdVal);
      return tr;
    }
  
    function init() {
      var map = getQuery();
      var tbody = document.getElementById("table-body");
      if (!tbody) return;
  
      var email = map.email || "";
      var address = map.address || "";
      var city = map.city || "";
      var state = map.state || "";
      var zip = map.zip || "";
      var membership = map.membership || "";
      var agree = map.agree ? "Yes" : "No";
  
      var pw = map.password || "";
      var masked = pw ? Array(pw.length + 1).join("*") : "";
  
      tbody.appendChild(makeRow("Email", email));
      tbody.appendChild(makeRow("Password", masked));
      tbody.appendChild(makeRow("Address", address));
      tbody.appendChild(makeRow("City", city));
      tbody.appendChild(makeRow("State", state));
      tbody.appendChild(makeRow("Zip", zip));
      tbody.appendChild(makeRow("Membership", membership));
      tbody.appendChild(makeRow("Agreed to Terms", agree));
    }
  
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  })();