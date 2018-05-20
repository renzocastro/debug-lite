// Module 1
(function (){
  // const log = debugLite.createDebug('Module 1', '#ff3860');
  const log = debugLite.createDebug('App', 'red');
  const logInit = debugLite.createDebug('App:init');
  const logBuild = debugLite.createDebug('App:build');
  
  function init() {
    logInit('Initializing...');
  }
  
  function build() {
    logBuild('Building...');
  }
  
  function main () {
    log('App.js file is loaded');
  
    init();
    build();
  }

  main();
}());

// Module 2
(function (){
  const log = debugLite.createDebug('Module 2');
  const logInit = debugLite.createDebug('Module 2:init');
  const logBuild = debugLite.createDebug('Module 2:build');
  
  function init() {
    logInit('Initializing...');
  }
  
  function build() {
    logBuild('Building...');
  }
  
  function main () {
    log('Module 2.js file is loaded');
  
    init();
    build();
  }

  main();
}());

// Module 3
(function (){
  const log = debugLite.createDebug('Module 3');
  const logInit = debugLite.createDebug('Module 3:init');
  const logBuild = debugLite.createDebug('Module 3:build');
  
  function init() {
    logInit('Initializing...');
  }
  
  function build() {
    logBuild('Building...');
  }
  
  function main () {
    log('Module 3.js file is loaded');
  
    init();
    build();
  }

  main();
}());