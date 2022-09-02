

const circle = document.querySelector('.progress_circle');
const radius = circle.r.baseVal.value; //берем значение радиуса у элемента progress
console.log(radius)
const circumference = 2 * Math.PI * radius //длина окружности
console.log(circumference)
const inputPrecent = document.querySelector('.inputPrecent')

// inputPrecent.addEventListener('change', function(){
//     if(inputPrecent.value <= 100){
//         setProgress(inputPrecent.value)
//     }
// })

const changeHandler = (e) => {
    const value = e.value
    e.value = value.replace(/\D/g, '')

    if(e.value < 0) {e.value = 0};
    if(e.value > 100) {e.value = 100};

    if(inputPrecent.value <= 100){
        setProgress(inputPrecent.value)
    }
}



circle.style.strokeDasharray = `${circumference} ${circumference}`
circle.style.strokeDashoffset = circumference


function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference
    circle.style.strokeDashoffset = offset;
}
