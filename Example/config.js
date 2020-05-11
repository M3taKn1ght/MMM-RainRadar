{
    disabled: false,
    module: 'MMM-RainRadar',
    position: 'bottom_right',
    config: {
        useHeader: true, // true if you want a header
        lat: "40.796850", // Latitude
        lon: "-89.675960", // Longitude
        area: 'IL', // US State
        zoomLevel: 6,
        mapType: 3, //0-Road Map 1-Satellite 2-Dark Map 3-OpenStreetMaps 4-Light Map
        color: 3, //0-Original 1-Universal Blue 2-TITAN 3-The Weather Channel 5-NEXRAD Level-III 6-RAINBOW @ SELEX-SI
        snow: 1,
        smoothing: 1,
        opacity: 88,
        fastAnimation: 0,
        coverage: 0,
        darkTheme: 1,
        UTCtime: 0,
        legend: 1,
        legendMin: 0, //set legend to 1 if you want legendMin to show
        animate: 1,
        updateOnWarning: 1, // 1: after updateInterval, weather warnings for your US states will be used to determine if module should be hidden. 0 module is perpertually displayed
        updateInterval: 5 * 60 * 1000, // number of milliseconds. change 5 to 60 and it will update each 10 minutes
    }
},
