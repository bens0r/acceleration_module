//This is the main Javascript File for the Accelerationmodule
//Module needs cordova plugin cordova-plugin-device-motion

function onSuccess(acceleration) 
{
    console.log('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
}

function onError() 
{
    alert('onError!');
}

var options = { frequency: 300 };  // Update every 0.3 seconds

var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
