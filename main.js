
const bijyoList = 
    {
        "2111":"../../result/short/NakazimaArisu.html",
        "2112":"../../result/short/sakaguti.html",
        "2113":"../../result/short/UsuiTinami.html",
        "2121":"../../result/short/NakazimaArisu.html",
        "2122":"../../result/short/Yosikawakoyuki.html",
        "2123":"../../result/short/KimuraSiori.html",
        "2131":"../../result/short/KoharaAmeri.html",
        "2132":"../../result/short/TakahasiTisa.html",
        "2133":"../../result/short/Kamiyaharuka.html",
        "2141":"../../result/short/KoharaAmeri.html",
        "2142":"../../result/short/KannoSaya.html",
        "2143":"../../result/short/KannoSaya.html",
        "2211":"../../result/semilong/yokoyamaAnzyu.html",
        "2212":"../../result/semilong/endoAi.html",
        "2213":"../../result/semilong/kimuraSayuri.html",
        "2221":"../../result/semilong/yokoyamaAnzyu.html",
        "2222":"../../result/semilong/kikutiMion.html",
        "2223":"../../result/semilong/nakanoAoi.html",
        "2231":"../../result/semilong/asakawaAiri.html",
        "2232":"../../result/semilong/sugawaraYua.html",
        "2233":"../../result/semilong/kikutiMion.html",
        "2241":"../../result/semilong/asakawaAiri.html",
        "2242":"../../result/semilong/suzukiRiria.html",
        "2243":"../../result/semilong/haraigawaMiran.html",
        "2311":"../../result/long/SuzukiReira.html",
        "2312":"../../result/long/AraiNatsumi.html",
        "2313":"../../result/long/AoyagiAnna.html",
        "2321":"../../result/long/SuzukiReira.html",
        "2322":"../../result/long/MakitaYuka.html",
        "2323":"../../result/long/AidaRin.html",
        "2331":"../../result/long/YamadaMao.html",
        "2332":"../../result/long/KobayashiHina.html",
        "2333":"../../result/long/KobayashiHina.html",
        "2341":"../../result/long/SuzukiReira.html",
        "2342":"../../result/long/SuzukiKokona.html",
        "2343":"../../result/long/TeruyamaFuka.html"
    
    };

const setQ1= (q1num) => {
    localStorage.setItem('Q1', q1num);
    if(q1num == 1){
        window.location.href = './questionMen1page.html'
    }else if(q1num == 2){
        window.location.href = './questionzpage2.html';
    }
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
    let result = getQ3+q4num;
    window.location.href = bijyoList[result];
}

function endButton(){
    window.location.href = './index.html';
}