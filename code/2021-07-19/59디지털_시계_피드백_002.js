function solution(startTime, endMinute) {
    let minutes = startTime[1] + endMinute;
    minutes += startTime[0] * 60;

    let hours = Math.trunc(minutes / 60);
    minutes = minutes % 60;

    hours = hours % 24;
    console.log(hours, minutes);
}

solution([6, 17], 25); // 6 42
solution([15, 30], 90); // 17 0
solution([23, 58], 22); // 0 20