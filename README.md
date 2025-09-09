To use press the big red button and then the page will be completly killed until you clear the cookies. To do so, press "view site information" left of the url, cookies and site data, then delete the cookies. This is the bookmarklet:

javascript:(function(){  fetch('https://raw.githubusercontent.com/Alex236508/Page-Killer/refs/heads/main/Website killer.js')    .then(r=>r.text())    .then(t=>eval(t));})();
