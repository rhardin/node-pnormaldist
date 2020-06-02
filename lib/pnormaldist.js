/*
 * This module is an extra from statistics2, which includes many more
 * statistical codes for you to explore.
 */
(function () {
    /* inverse of normal distribution */
    "use strict";

    var pnormaldist = function (qn) {
        var b = [1.570796288, 0.03706987906, -0.8364353589e-3,
                -0.2250947176e-3, 0.6841218299e-5, 0.5824238515e-5,
                -0.104527497e-5, 0.8360937017e-7, -0.3231081277e-8,
                0.3657763036e-10, 0.6936233982e-12],
            w1 = qn,
            w3 = -Math.log(4.0 * w1 * (1.0 - w1)),
            i = 1;

        if (qn < 0.0 || qn > 1.0) { return 0.0; }
        if (qn === 0.5) { return 0.0; }
        if (qn > 0.5) { w1 = 1.0 - w1; }

        w1 = b[0];
        for (i; i < 11; i++) {
            w1 += b[i] * Math.pow(w3, i);
        }

        if (qn > 0.5) { return Math.sqrt(w1 * w3); }

        return -Math.sqrt(w1 * w3);
    };

    module.exports = pnormaldist;
})();
