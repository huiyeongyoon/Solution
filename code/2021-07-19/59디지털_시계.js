function solution(startTime, endMinute) {

    let hours = 0;
    let minutes = 0;
    let count = 1;
    let answer = 0;
    startTime.push(endMinute);

    hours = startTime[0];
    minutes = startTime[1] + startTime[2];

    for (let i = 0; i < count; i++) {
        if (minutes >= 60) {
            count +=1;
            minutes -= 60;
        }
    }
    hours -=1;

    if (hours + count >= 24) {
        count = hours + count - 24
        hours = 0;
    }

    console.log(hours+count,minutes);
}

solution([6,17], 25); // 6 42
solution([15,30], 90); // 17 0
solution([23,58], 22); // 0 20