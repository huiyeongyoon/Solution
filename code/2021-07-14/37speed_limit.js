function solution(options,distanceTraveled1,distanceTraveled2,distanceTraveled3) {

    options = {
        distanceTraveled1 : distanceTraveled1,
        distanceTraveled2 : distanceTraveled2,
        distanceTraveled3 : distanceTraveled3,
        calculate: function (){
            let a = 0;
            let b = 0;
            let c = 0;
            let count1 = 0;
            let count2 = 0;
            let totalTime = distanceTraveled3[1];
            for (let i = 0; i < totalTime + 1; i++) {
                if (i <= this.distanceTraveled1[1]) {
                    a = this.distanceTraveled1[0] * i;
                } else if (i <= this.distanceTraveled2[1]) {
                    count1 += 1;
                    b = this.distanceTraveled2[0] * count1;
                } else if(i <= this.distanceTraveled3[1]) {
                    count2 += 1;
                    c = this.distanceTraveled3[0] * count2;
                }
            }
            return a+b+c;
        }

    }
    let obj = options.calculate();
    console.log(obj);
}
solution(3,[20,2],[30,6],[10,7]); // 170
solution(2,[60,1],[30,5]); // 180