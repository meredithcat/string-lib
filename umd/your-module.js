(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}(function () { 'use strict';

    // Assign a new method to String.prototype
    String.prototype.allCaps = function () {
        return this.toUpperCase();
    };

}));
