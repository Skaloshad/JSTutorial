function addScript(src){
  var script = document.createElement('script');
  script.src = src;
  script.async = false; // чтобы гарантировать порядок
  document.head.appendChild(script);
}

addScript('../js/bigJS.js'); // загружаться эти скрипты начнут сразу
addScript('../js/averageJS.js'); // выполнятся, как только загрузятся
addScript('../js/smallJS.js'); // но, гарантированно, в порядке 1 -> 2 -> 3