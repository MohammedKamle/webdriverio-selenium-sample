exports.config = {
    services: [
      [
        "lambdatest",
        {
          tunnel: false,
          lambdatestOpts: {
            logFile: "tunnel.log"
          }
        }
      ]
    ],
    user: "YOUR_USERNAME",
    key: "YOUR_ACCESS_KEY",
    specs: [
      '../tests/specs/allegiant_test.js'
    ],
    exclude: [],
  
    maxInstances: 10,
    commonCapabilities: {
      name: 'Parallel Sample Test',
      build: 'allegiant-debug'
    },
  
    capabilities: [
      {
        platfrom: "Windows 10",
        browserName: "Chrome",
        version: "latest"
      },
      {
        platform: "Windows 10",
        browserName: "Firefox",
        version: "latest"
      },
      {
        platform: "Windows 10",
        browserName: "Internet Explorer",
        version: "latest"
      },
      {
        platform: "Windows 10",
        browserName: "MicrosoftEdge",
        version: "latest"
      }
    ],
  
    logLevel: "info",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    path: "/wd/hub",
    hostname: "hub.lambdatest.com",
    port: 80,
    framework: "mocha",
    mochaOpts: {
      ui: "bdd",
      timeout: 500000,
    }
  };
  
  // Code to support common capabilities
  exports.config.capabilities.forEach(function(caps) {
    for (var i in exports.config.commonCapabilities)
      caps[i] = caps[i] || exports.config.commonCapabilities[i];
  });
  