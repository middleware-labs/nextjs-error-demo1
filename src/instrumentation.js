const tracker = require('@middleware.io/agent-apm-nextjs');

function register() {
  
    tracker.track({
        serviceName: "wrkm-nextjs",
        // accessToken: "xusuusalpvush63ud7zcg8bi3mauuptds528",
        enableExceptionHandling: true, // Enable advanced exception handling
    });
}

module.exports = { register }; 