//This is the main Javascript File for the Accelerationmodule
//Module needs cordova plugin cordova-plugin-device-motion

function onSuccess(acceleration)
{
    app.receivedAccelerateEvent("acceleration_changed",
    acceleration.x,
    acceleration.y,
    acceleration.z);
}

function onError()
{
    alert('onError!');
}

var options = { frequency: 300 };  // Update every 0.3 seconds

var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
