setInterval(()=>{
const deg=6;
    let hr=document.querySelector(".hr") ;
    let min=document.querySelector(".min") ;
    let sec=document.querySelector(".sec") ;
        let day=new Date();
        let hh=day.getHours()*30;
        let mn=day.getMinutes()*6;
        let se=day.getSeconds()*6;

        hr.style.transform=  `rotate(${hh+(mn/12)}deg)` ; 
        min.style.transform=  `rotate(${mn}deg)`;
        sec.style.transform=  `rotate(${se}deg) `;
 },1000);