const setQ1= (q1num) => {
localStorage.setItem('Q1', q1num);
window.location.href = './questionzpage2.html';
}
const setQ2= (q2num) => {
    let getQ1 = localStorage.getItem('Q1')
    localStorage.setItem('Q2',getQ1+q2num)
    console.log(localStorage.getItem('Q2'))
    window.location.href = './questionzpage3.html';
}

const setQ3= (q3num) => {
    let getQ2 = localStorage.getItem('Q2')
    localStorage.setItem('Q3',getQ2+q3num)
    console.log(localStorage.getItem('Q3'))
    window.location.href = './questionzpage4.html';
}

const setQ4= (q4num) => {
    let getQ3 = localStorage.getItem('Q3')
    localStorage.setItem('Q4',getQ3+q4num)
    console.log(localStorage.getItem('Q4'))
}
