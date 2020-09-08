const { app, BrowserWindow } = require('electron')

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 1024,
        height: 400,
        icon: __dirname + '/img/icon.ico',
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    win.loadFile('index.html')
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

function calculate(mode) {
    var brand = document.getElementById('brand').value

    var coil, nut, ballTravel, nozzle, spring, maxDistance, minDistance, minDistance, maxDistance, minCoilTorque, maxCoilTorque, maxTravel, minTravel, minInternalNutTorque, maxInternalNutTorque, minNeedleTravel, maxNeedleTravel, maxNozzleTorque, minNozzleTorque, distanceBox, coilTorqueBox, travelBox, internalNutTorqueBox, needleTravelBox, nozzleTorqueBox;

    switch (brand) {
        case 'BOSCH':
            minDistance = 0.04;
            maxDistance = 0.1;
            minCoilTorque = 30;
            maxCoilTorque = 40;
            minTravel = 0.04;
            maxTravel = 0.06;
            minInternalNutTorque = 40;
            maxInternalNutTorque = 50;
            minNeedleTravel = 0.2;
            maxNeedleTravel = 0.3;
            minNozzleTorque = 60;
            maxNozzleTorque = 68;
            distanceBox = `Distancia: ${minDistance}mm / ${maxDistance}mm`;
            coilTorqueBox = `Torque Bobina: ${minCoilTorque}N⋅m / ${maxCoilTorque}N⋅m`;
            travelBox = `Recorrido: ${minTravel}mm / ${maxTravel}mm`;
            internalNutTorqueBox = `Torque Tuerca Interna: ${minInternalNutTorque}N⋅m / ${maxInternalNutTorque}N⋅m`;
            needleTravelBox = `Recorrido Aguja: ${minNeedleTravel}mm / ${maxNeedleTravel}mm`;
            nozzleTorqueBox = `Torque Tobera: ${minNozzleTorque}N⋅m / ${maxNozzleTorque}N⋅m`;
            document.getElementById("brand-logo").src = 'img/bosch.png'
            break;
        case 'Denso':
            minDistance = 0.03;
            maxDistance = 0.07;
            minCoilTorque = 20;
            maxCoilTorque = 30;
            minTravel = 0.03;
            maxTravel = 0.07;
            minInternalNutTorque = 40;
            maxInternalNutTorque = 50;
            minNeedleTravel = 0.5;
            maxNeedleTravel = 0.8;
            minNozzleTorque = 90;
            maxNozzleTorque = 100;
            distanceBox = `Distancia: ${minDistance}mm / ${maxDistance}mm`;
            coilTorqueBox = `Torque Bobina: ${minCoilTorque}N⋅m / ${maxCoilTorque}N⋅m`;
            travelBox = `Recorrido: ${minTravel}mm / ${maxTravel}mm`;
            internalNutTorqueBox = `Torque Tuerca Interna: ${minInternalNutTorque}N⋅m / ${maxInternalNutTorque}N⋅m`;
            needleTravelBox = `Recorrido Aguja: ${minNeedleTravel}mm / ${maxNeedleTravel}mm`;
            nozzleTorqueBox = `Torque Tobera: ${minNozzleTorque}N⋅m / ${maxNozzleTorque}N⋅m`;
            document.getElementById("brand-logo").src = 'img/denso.png'
            break;
    }
    document.getElementById('distance-box').innerHTML = distanceBox
    document.getElementById('coil-torque-box').innerHTML = coilTorqueBox
    document.getElementById('travel-box').innerHTML = travelBox
    document.getElementById('internal-nut-box').innerHTML = internalNutTorqueBox
    document.getElementById('needle-travel-box').innerHTML = needleTravelBox
    document.getElementById('nozzle-torque-box').innerHTML = nozzleTorqueBox

    coil = document.getElementById('coil').value;
    nut = document.getElementById('nut').value;
    ballTravel = document.getElementById('ball-travel').value;
    nozzle = document.getElementById('nozzle').value;
    spring = document.getElementById('spring').value;

    if (brand != '--') {
        document.getElementById('container').style.display = '';
        switch (mode) {
            case 'calcCoilNutTravel':
                if (coil <= 0 || nut <= 0) {
                    document.getElementById('coil-nut-diff').innerHTML = '--';
                }
                else if (coil > 0 && nut > 0) {
                    document.getElementById('coil-nut-diff').innerHTML = `${(nut - coil).toFixed(3)}mm`;
                }
                if ((nut - coil) >= minDistance && (nut - coil) <= maxDistance) {
                    document.getElementById('coil-nut-diff').style.backgroundColor = '#94e394';
                } else {
                    document.getElementById('coil-nut-diff').style.backgroundColor = '#e39494';
                }
                break;

            case 'calcBallTravel':
                if (ballTravel > 0) {
                    document.getElementById('ball-travel').innerHTML = `${(nut - coil).toFixed(3)}mm`;
                }
                if (ballTravel >= minTravel && ballTravel <= maxTravel) {
                    document.getElementById('ball-travel').style.backgroundColor = '#94e394';
                } else {
                    document.getElementById('ball-travel').style.backgroundColor = '#e39494';
                }
                break;

            case 'calcSpringTravel':
                if (nozzle <= 0 || spring <= 0) {
                    document.getElementById('nozzle-spring-diff').innerHTML = '--';
                }
                else if (nozzle > 0 && spring > 0) {
                    document.getElementById('nozzle-spring-diff').innerHTML = `${(spring - nozzle).toFixed(3)}mm`;
                }
                if ((spring - nozzle) >= minNeedleTravel && (spring - nozzle) <= maxNeedleTravel) {
                    document.getElementById('nozzle-spring-diff').style.backgroundColor = '#94e394';
                } else {
                    document.getElementById('nozzle-spring-diff').style.backgroundColor = '#e39494';
                }
                break;
        }
    }
}