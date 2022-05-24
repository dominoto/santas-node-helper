const fs = require('fs');

// What floor does Santa end up on?
// ( --> UP 1 floor
// ) --> DOWN 1 floor

whatFloor = () => {
    console.time('santa-time-sync');
    const directions = fs.readFileSync('./directions.txt').toString();
    let goUp = directions.match((/[(]/g) || []).length;
    // console.log('How many floors up? ', goUp);

    let goDown = directions.match((/[)]/g) || []).length;
    // console.log('How many floors down? ', goDown);

    let correctFloor = goUp - goDown;
    console.timeEnd('santa-time-sync');
    console.log('Correct floor is ', correctFloor);
}
whatFloor();

whatFloorAsync = () => {
    fs.readFile('./directions.txt', (err, data) => {
        console.time('santa-time-async');
        const directions2 = data.toString();
        let goUp = directions2.match((/[(]/g) || []).length;
        // console.log('How many floors up? ', goUp);

        let goDown = directions2.match((/[)]/g) || []).length;
        // console.log('How many floors down? ', goDown);

        let correctFloor = goUp - goDown;
        console.timeEnd('santa-time-async');
        console.log('Correct floor is ', correctFloor);
    }, 0)
}
whatFloorAsync();

function whatFloorZTM() {
    fs.readFile('./directions.txt', (err, data) => {
        console.time('santa-time-ZTM');
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) => {
            if (currentValue === '(') {
                return acc += 1;
            } else if (currentValue === ')') {
                return acc -= 1;
            }
        }, 0)
        console.timeEnd('santa-time-ZTM');
        console.log('Correct floor is ', answer);
    })
}
whatFloorZTM()


// When does Santa first enter the basement (floor -1)?

whenBasementSync = () => {
    console.time('santa-time-sync-2');
    const directions = fs.readFileSync('./directions.txt').toString();
    const directionsArray = directions.split('');
    let basementPosition = 0;
    let floor = 0;
    for (let i = 0; i < directionsArray.length; i++) {
        if (directionsArray[i] === '(') {
            floor++;
        } else if (directionsArray[i] === ')') {
            floor--;
        }
        if (floor === -1) {
            basementPosition = i + 1;
            break;
        }
    }
    console.timeEnd('santa-time-sync-2');
    console.log('Santa enters the basement on position ', basementPosition);
}
whenBasementSync();

whenBasementAsync = () => {
    fs.readFile('./directions.txt', (err, data) => {
        console.time('santa-time-async-2');
        const directions = data.toString();
        const directionsArray = directions.split('');

        let basementPosition = 0;
        let floor = 0;
        for (let i = 0; i < directionsArray.length; i++) {
            if (directionsArray[i] === '(') {
                floor++;
            } else if (directionsArray[i] === ')') {
                floor--;
            }
            if (floor === -1) {
                basementPosition = i + 1;
                break;
            }
        }
        console.timeEnd('santa-time-async-2');
        console.log('Santa enters the basement on position ', basementPosition);
    }, 0)
}
whenBasementAsync();