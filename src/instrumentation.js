const tracker = require('@middleware.io/agent-apm-nextjs');

function register() {
  
    tracker.track({
        serviceName: "wrkm-nextjs",
        accessToken: process.env.MW_ACCESS_TOKEN || '',
        enableExceptionHandling: true, // Enable advanced exception handling
        target: "vercel"
    });
}

module.exports = { register }; 