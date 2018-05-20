'use strict';
/**
 * Debug Lite v1.0.0 (UMD)
 * https://github.com/renzocastro/debug-lite
 */

(function (root, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else {
    root.debugLite = factory();
  }
}((typeof self !== 'undefined' ? self : (typeof global !== 'undefined' ? global : this)), function () {
  let define, module, exports;
  module = { exports: (exports = {}) };

  let namespaces = {};
  const storage = localstorage();

  function localstorage() {
    try {
      return window.localStorage;
    } catch (e) {}
  }

  let colors = [];
  for (let i = 0; i <= 355; i += 24) {
    colors.push(`hsl(${i % 355}, 100%, 60%)`);
  }

  const selectColor = namespace => {
    let hash = 0, i;

    for (i in namespace) {
      hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return colors[Math.abs(hash) % colors.length];
  }

  let createDebug = (namespace, color) => {
    let debug = function () {
      debug.enabled = !!debug.enabled;
      debug.color = debug.color || color || selectColor(namespace);

      if (!createDebug.enabled(namespace)) return;

      var args = Array.prototype.slice.call(arguments, 0);
      args.unshift(`%c${namespace} »`, `color: ${debug.color};`);
      console.log.apply(console, args);
    };

    namespaces[namespace] = debug;

    return debug;
  };

  let debugEnabledTimeout;
  const debugEnabledKeepTime = 500;

  createDebug.disable = namespace => {
    if (namespaces[namespace] === undefined) {
      throw new Error(`"${namespace}" don't exist`);
    }

    namespaces[namespace].enabled = false;
  }

  createDebug.enable = namespace => {
    if (namespaces[namespace] === undefined) {
      throw new Error(`"${namespace}" don't exist`);
    }

    namespaces[namespace].enabled = true;
  }

  createDebug.enabled = namespace => {
    if (namespaces[namespace] === undefined) {
      throw new Error(`"${namespace}" don't exist`);
    }

    if (namespaces[namespace].enabled) {
      return true
    }

    const sDebug = String(storage.DEBUG || storage.debug || '');
    let enabled = (sDebug === '*');

    if (!enabled) {
      const ns = namespace.split(':');
      const sDebugList = sDebug.split(',');
      let i, t = sDebugList.length;

      for (i = 0; i < t; ++i) {
        if (sDebugList[i] === namespace || sDebugList[i].indexOf(`${ns[0]}:*`) === 0) {
          enabled = true;

          // perf: keep enabled state by ${debugEnabledKeepTime}
          clearTimeout(debugEnabledTimeout);
          createDebug.enable(namespace);
          debugEnabledTimeout = setTimeout(createDebug.disable, debugEnabledKeepTime, namespace);
          break;
        }
      }
    }

    return enabled;
  };

  module.exports = {
    createDebug: createDebug,
    nothing: function () { return function () { } }
  }

  return module.exports;
}));
