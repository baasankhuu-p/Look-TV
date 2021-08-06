'use strict';

/* jshint esversion: 10 */
import html from "./modules/components/utils.js"
import Home from './modules/products/homes.js';
import Bagst from './modules/products/bagts.js'
class MySite{
    constructor(appID){
        this.appContainerID = appID || "myMain";
        this.appData = new Map();
        this.appData.set("/", new Map());
    }
    AddRoute(parentRoute, routeName, data) {
        this.appData.get(parentRoute).set(routeName, data);
    }
    OnRoute(route) {
        console.log(`${route}`);
        document.getElementById(this.appContainerID).innerHTML = this.appData.get("/").get(route)?.Render() || this.NotFound();
    }
    NotFound() {
        return html`<section style="margin-top:20%;width:100%; display:flex; color:white;font-weight:bolder;font-size:50px"><div style="text-align:center; width: 100%;background:blue">Not found :( 404</div></section>`
    };
}
//#region Sale Render
class Sale {
    constructor(objData){
        this.data = objData;
    }
    Render(){
        return html`
        <style>
        @import "https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap";@import "https://fonts.googleapis.com/css2?family=DotGothic16&family=Oswald:wght@200&display=swap";section{width:100%;text-align:center;}div#myMain{display: inherit;}   div{display:inline-block;} section h2{text-align:left} main button{border:rgba(0,0,0,0);background-color:rgba(0,0,0,0);color:#fff;cursor:pointer;}@media only screen and (min-width:1260px){.mainSale{margin-top:8%;margin-bottom:15%;}section button{font-size:36px;}.prev1{display:inline-block;float:left;margin-top:12%;margin-left:3%;}.next1{display:inline-block;float:right;margin-top:12%;margin-right:3%;}.prev2{display:inline-block;float:left;margin-top:12%;margin-left:8%;}.next2{display:inline-block;float:right;margin-top:12%;margin-right:3%;}.prev3{display:inline-block;float:left;margin-top:12%;margin-left:3%;}.next3{display:inline-block;float:right;margin-top:12%;margin-right:3%;}.prev4{display:inline-block;float:left;margin-top:12%;margin-left:3%;}.next4{display:inline-block;float:right;margin-top:12%;margin-right:3%;}.prev5{display:inline-block;float:left;margin-top:12%;margin-left:3%;}.next5{display:inline-block;float:right;margin-top:12%;margin-right:3%;}h1{text-align:left;font-family:'DotGothic16',sans-serif;font-size:40px;padding-left:15%;margin-bottom:.2%;}h2{font-family:'Oswald',sans-serif;font-size:30px;padding-left:15%;margin-bottom:.2%;margin-top:.2%;}h3{text-align:left;font-size:25px;padding-left:15%;margin-bottom:.2%;margin-top:.2%;}h4{font-family:'DotGothic16',sans-serif;font-size:15px;color:#000;transition:font-size color 2s;}h4:hover{font-size:16px;color:blue;}section>div>a>img{width:200px;transition:width 2s;}section>div>a>img:hover{width:220px;}}@media only screen and (min-width:760px) and (max-width:1023px){.mainSale{margin-top:6%;margin-bottom:18%;}section button{font-size:50px;}.prev1{display:inline-block;float:left;margin-top:13%;margin-left:1%;}.next1{display:inline-block;float:right;margin-top:15%;margin-right:1%;}.prev2{display:inline-block;float:left;margin-top:13%;margin-left:1%;}.next2{display:inline-block;float:right;margin-top:15%;margin-right:1%;}.prev3{display:inline-block;float:left;margin-top:13%;margin-left:2%;}.next3{display:inline-block;float:right;margin-top:15%;margin-right:2%;}.prev4{display:inline-block;float:left;margin-top:13%;margin-left:2%;}.next4{display:inline-block;float:right;margin-top:15%;margin-right:2%;}.prev5{display:inline-block;float:left;margin-top:13%;margin-left:2%;}.next5{display:inline-block;float:right;margin-top:15%;margin-right:2%;}h1{text-align:left;font-family:'DotGothic16',sans-serif;font-size:40px;padding-left:15%;margin-bottom:.2%;}h2{text-align:left;font-family:'Oswald',sans-serif;font-size:30px;padding-left:15%;margin-bottom:.2%;margin-top:.2%;}h3{text-align:left;font-size:25px;padding-left:15%;margin-bottom:1.2%;margin-top:.2%;}h4{display:none;}.zurag5{display:none;}section>div>a>img{width:150px;}}@media only screen and (min-width:1023px) and (max-width:1259px){.mainSale{margin-top:8%;margin-bottom:15%;}section button{font-size:36px;}.prev1{display:inline-block;float:left;margin-top:12%;margin-left:8%;}.next1{display:inline-block;float:right;margin-top:12%;margin-right:8%;}.prev2{display:inline-block;float:left;margin-top:12%;margin-left:8%;}.next2{display:inline-block;float:right;margin-top:12%;margin-right:8%;}.prev3{display:inline-block;float:left;margin-top:12%;margin-left:8%;}.next3{display:inline-block;float:right;margin-top:12%;margin-right:8%;}.prev4{display:inline-block;float:left;margin-top:12%;margin-left:8%;}.next4{display:inline-block;float:right;margin-top:12%;margin-right:8%;}.prev5{display:inline-block;float:left;margin-top:12%;margin-left:8%;}.next5{display:inline-block;float:right;margin-top:12%;margin-right:8%;}h1{text-align:left;font-family:'DotGothic16',sans-serif;font-size:40px;padding-left:12%;margin-bottom:.2%;}h2{text-align:left;font-family:'Oswald',sans-serif;font-size:30px;padding-left:4%;padding-left:12%;margin-top:.2%;}h3{text-align:left;font-size:25px;padding-left:12%;margin-bottom:.2%;margin-top:.2%;}h4{font-family:'DotGothic16',sans-serif;font-size:12px;color:#000;transition:font-size color 2s;}h4:hover{font-size:13px;color:blue;}section>div>a>img{width:120px;}}@media only screen and (min-width:360px) and (max-width:760px){.mainSale{margin-top:18%;margin-bottom:40%;}section button{display:none;}h1{text-align:left;font-family:'DotGothic16',sans-serif;font-size:30px;padding-left:15%;margin-bottom:.2%;margin-left:2%;}h2{text-align:left;font-family:'Oswald',sans-serif;font-size:20px;padding-left:15%;margin-bottom:.2%;margin-top:.2%;margin-left:2%;}h3{display:none;}h4{font-family:'DotGothic16',sans-serif;font-size:12px;width:180px;margin:auto;color:#000;transition:font-size color 2s;}h4:hover{font-size:14px;color:blue;}.zurag5{display:none;}section>div>a>img{width:200px;transition:width 2s;}section>div>a>img:hover{width:210px;}}
        </style>
        <div id="main" style="display:inline-block; width:100%; margin-top:2%;margin-bottom:20%"></div>`
    }
}
//#endregion
//#region Turees Render
class Turees {
    constructor(objData){
        this.data = objData;
    }
    Round(rounds){
      return html`
      <div>
          <img src="${rounds.src}" alt="${rounds.name}" title="${rounds.name}">
          <p class="NM"><b>Нэр:</b> ${rounds.name}</p>
          <p class="ST" style="font-family: 'Russo One', sans-serif;font-size: 15px;"><b>Эхлэх:</b> ${rounds.start}</p>
          <p class="DU" style="font-family: 'Russo One', sans-serif;font-size: 15px;"><b>Дуусах:</b> ${rounds.end}</p>
          <form action="Төлбөр_төлөх.html">
            <button class="due">${rounds.due}</button>
          </form>
        </div>
      `
    }
    Render(){
      let a="",b="",c="";
      const round1 = this.data.round[0].information;
      const round2 = this.data.round[1].information;
      const round3 = this.data.round[2].information
      for(let A of round1){
        a+=this.Round(A)
      }
      for(let B of round2){
        b+=this.Round(B)
      }
      for(let C of round3){
        c+=this.Round(C)
      }
        return html`
        <style>
        @import "https://fonts.googleapis.com/css2?family=Russo+One&display=swap";div{display:inline-block;}.NM,.ST,.DU{border:2px #5f9ea0 solid;margin:0 auto;}.NM b{font-family:'Russo One',sans-serif;}.NM{font-weight:bolder;}.ST b{font-family:'Russo One',sans-serif;color:blue;}.DU b{font-family:'Russo One',sans-serif;color:red;}.due{font-family:'Russo One',sans-serif;color:#fff;background-color:#000;border:#000;margin-bottom:5%;margin-top:2%;transition:border,background-color,color 3s ease-out;}.due:hover{background-color:#fff;color:#000;border:#fff;}@media only screen and (min-width:1260px){main{margin-top:5%;text-align:center;margin-bottom:14%;} #Mymain img{width:220px;height:auto;}}@media only screen and (min-width:760px) and (max-width:1260px){main{margin-top:5%;text-align:center;margin-bottom:20%;}main img{width:180px;height:auto;}.viewdate2{display:none;}.NM,.ST,.DU{font-size:70%;}}@media only screen and (min-width:320px) and (max-width:760px){main{margin-top:6%;text-align:center;margin-bottom:30%;}main img{width:140px;height:auto;}.viewdate2{width:60%;height:60%;}.NM,.ST,.DU{font-size:70%;}}
        </style>
        <div class="round1">
        ${a}
        </div>
        <div class="round2">
        ${b}
        </div>
        <div class="round3">
        ${c}
        </div>
        `
    }
}
//#endregion
//#region TV Render
class Tv {
    constructor(objData){
        this.data = objData;
    }
    TvRender(ren){
      return html`
      <a href="#" onmouseover="changeSrc('${ren.src}','${ren.name}')" >
        <img src="${ren.src}" alt="${ren.name}" title="${ren.name}">
        <p class="name">${ren.name}</p>
      </a>
      `
    }
    DateRender(DateRen){
      return`
      <p class="date-title">${DateRen.Dates}&nbsp;&nbsp;--&nbsp;&nbsp;<b>${DateRen.Sedev}</b></p>`
    }
    Render(){
      //television
      const Tv1=this.data.Tvs[0].tv,Tv2=this.data.Tvs[1].tv,Tv3=this.data.Tvs[2].tv, Tv4=this.data.Tvs[3].tv, Tv5=this.data.Tvs[4].tv,Tv6=this.data.Tvs[5].tv,Tv7=this.data.Tvs[6].tv;
      let A="",B="",C="",D="",E="",F="",G="";
      for(let a of Tv1){
        A+=this.TvRender(a);
      }
      for(let a of Tv2){
        B+=this.TvRender(a)
      }
      for(let a of Tv3){
        C+=this.TvRender(a)
      }
      for(let a of Tv4){
        D+=this.TvRender(a)
      }
      for(let a of Tv5){
        E+=this.TvRender(a)
      }
      for(let a of Tv6){
        F+=this.TvRender(a)
      }
      for(let a of Tv7){
        G+=this.TvRender(a)
      }
      //timeArray
      const I = this.data.time_percentage;
      let Time="";
      for(let b of I){
        Time+=this.DateRender(b)
      }
       return html`
        <style>
        @import "https://fonts.googleapis.com/css2?family=PT+Sans+Caption&display=swap";main{margin-top:6%;height:720px;}#Movie_title{font-family:'PT Sans Caption',sans-serif;font-size:28px;width:fit-content;margin-left:57px;margin-bottom:.4%;border-bottom:4px #000 solid;}.Movie_aside{top:10%;border:5px #6368736b solid;width:20%;background-image:var(--default-color);height:500px;overflow-y:scroll;overflow-x:hidden;}.Chapt_Tv{width:100%;text-align:center;}.h2_title{font-family:'PT Sans Caption',sans-serif;width:fit-content;display:inline-block;}.fas{color:#33333c8c;width:20px;transition:color,width 2s;}.fas:hover{color:#000;width:28px;}.fa-chevron-circle-down{display:none;}.Chapt_Tv>a{display:block;}.Chapt_Tv>a>img{width:120px;transition:width;}.Chapt_Tv>a>img:hover{width:130px;}.Chapt_Tv>a>p{width:39%;margin-right:2%;margin-top:8%;font-family:'PT Sans Caption',sans-serif;font-weight:bolder;font-size:14px;text-align:left;float:right;}.Televisiz_epir{display:inline-block;position:absolute;top:0;margin-left:25%;}.Tv_title{margin-top:100px;width:95%;}.Tv_title img{width:100px;margin-top:2%;margin-left:50px;}.active_date{display:inline-block;float:right;width:140px;text-align:center;margin-top:5%;margin-right:5%;border-bottom:5px #3cfc3c solid;border-top:5px #0d6bf8 solid;border-left:5px #ff21da solid;border-right:5px #d9ff00 solid;}.dialog-date{display:inline-block;position:absolute;top:10%;right:2%;border:5px #6368736b solid;width:20%;background-image:var(--default-color);height:500px;overflow-y:scroll;overflow-x:hidden;text-align:center;}.fa-chevron-circle-left{margin-left:10%;}.Month_day{display:inline-block;width:fit-content;font-family:'PT Sans Caption',sans-serif;font-size:16px;font-weight:bolder;border-bottom:5px red solid;}.Kino_huviari{width:100%;margin-right:5%;}.date-title{font-weight:bolder;text-align:left;padding-left:8%;}@media only screen and (min-width:767px) and (max-width:1279px){main{margin-top:10%;}.h2_title{font-size:16px;}.Chapt_Tv>a{display:block;}.Chapt_Tv>a>img{width:100px;}.Chapt_Tv>a>img:hover{width:110px;}.Chapt_Tv>a>p{display:none;}.Televisiz_epir{display:inline-block;position:absolute;top:0;width:60%;text-align:center;}video{width:500px;height:300px;}.Tv_title{margin-top:100px;width:95%;}.Tv_title img{width:80px;margin-top:2%;margin-left:10px;}.active_date{width:120px;}.dialog-date{float:right;top:50%;margin-right:6%;width:65%;height:300px;}.Month_day{font-size:18px;border-bottom:2px red solid;}.Kino_huviari{display:inline-block;}.date-title{width:220px;border:2px blue solid;display:inline-block;margin:0;text-align:left;}}@media only screen and (max-width:767px){main{height:400px;}#Movie_title{margin-top:520px;}.Movie_aside{width:85%;height:216px;}.h2_title{margin:0;border-bottom:solid;}.Chapt_Tv>a>img{width:100px;}.Chapt_Tv>a>img:hover{width:110px;}.Televisiz_epir{margin:auto;}.Tv_title{margin-top:38px;}video{width:300px;height:220px;}.Tv_title img{width:80px;}.active_date{display:none;}.dialog-date{top:55%;margin-right:12%;width:80%;height:150px;}.Month_day{border-bottom:3px red solid;}.Kino_huviari{width:100%;margin-right:5%;}}
        </style>
        <h1 id="Movie_title">${this.data.title}</h1>
        <section class="Movie_aside">
        <div class="${this.data.Tvs[0].class}">
          <h2 class="h2_title undsen">${this.data.Tvs[0].title}</h2>
          <i class="fas fa-chevron-circle-up"></i>
          <i class="fas fa-chevron-circle-down"></i><br>
          ${A}
        </div>
        <div class="${this.data.Tvs[1].class}">
          <h2 class="h2_title bagts">${this.data.Tvs[1].title}</h2>
          <i class="fas fa-chevron-circle-up"></i>
          <i class="fas fa-chevron-circle-down"></i>
          ${B}
        </div>
        
        <div class="${this.data.Tvs[2].class}">
          <h2 class="h2_title gerbul">${this.data.Tvs[2].title}</h2>
          <i class="fas fa-chevron-circle-up"></i>
          <i class="fas fa-chevron-circle-down"></i><br>
             ${C}
        </div>
        <div class="${this.data.Tvs[3].class}">
          <h2 class="h2_title HBO">${this.data.Tvs[3].title}</h2>
          <i class="fas fa-chevron-circle-up"></i>
          <i class="fas fa-chevron-circle-down"></i><br>
          ${D}
        </div>
        <div class="${this.data.Tvs[4].class}">
          <h2 class="h2_title ent">${this.data.Tvs[4].title}</h2>
          <i class="fas fa-chevron-circle-up"></i>
          <i class="fas fa-chevron-circle-down"></i><br>
          ${E}
        </div>
        <div class="${this.data.Tvs[5].class}">
          <h2 class="h2_title sport">${this.data.Tvs[5].title}</h2>
          <i class="fas fa-chevron-circle-up"></i>
          <i class="fas fa-chevron-circle-down"></i><br>
          ${F}
        </div>
        <div class="${this.data.Tvs[6].class}">
          <h2 class="h2_title traffic">${this.data.Tvs[6].title}</h2>
          <i class="fas fa-chevron-circle-up"></i>
          <i class="fas fa-chevron-circle-down"></i>
          ${G}
        </div>
        </section>
          <div class="Televisiz_epir">
            <div class="Tv_title">
              <img src="${this.data.Tvs[0].tv[0].src}" alt="${this.data.Tvs[0].tv[0].name}" title="${this.data.Tvs[0].tv[0].name} "class="tvsChanges" >
              <h2 class="active_date">
              <span id="hour">00</span>:<span id="minutes">00</span>:<span id="seconds">00</span>
            </h2>
            </div>
              <video width="660" height="380" controls="" autoplay="" muted="">
                <source src="${this.data.EPIR[0].src}" type="video/mp4">
              </video>
          </div>
          <div class="dialog-date">
          <i class="fas fa-chevron-circle-left"></i>
           <p class="Month_day">${this.data.month}-March-${this.data.day}</p>
           <i class="fas fa-chevron-circle-right"></i>
           <div class="Kino_huviari">
              ${Time}
           </div>
         </div>
        `
    }
}
//#endregion 
//#region information Render
class Information {
  constructor(objData){
    this.objData = objData;
  }
  Render(){
    return html`<img src="Look-TV/SVG/pro.png" alt="My corner" title="Миний булан">
    <div class="dialog-all">
      <div class="dialog-mycorner"><p><i class="fas fa-address-card"></i>   Миний булан</p></div>
      <div class="dialog-save"><p><i class="fas fa-download"></i>  Хадгалсан</p></div>
      <div class="dialog-history"><p><i class="fas fa-history"></i>Худалдан авалтын түүх</p></div>
      <div class="dialog-sale"><p><i class="fas fa-cart-arrow-down"></i>Урамшууллын код</p></div>
      <div class="dialog-TermsOfService"><p><i class="fas fa-shield-alt"></i> Үйлчилгээний нөхцөл</p></div>
    </div>
  </div>
  <style>
  main{text-align:center;}
  .dialog-all{
    font-
  }
  main img{margin-top:5%;text-align:left;width:120px;height:120px;}</style>
  `
  }
}
//#endregion
//#region content Render
class Content {
  constructor(objData){
    this.objData = objData;
  }
  Render(){
    return html`
    <style>
    @import "https://fonts.googleapis.com/css2?family=Oswald&family=Train+One&display=swap";main button{font-size:36px}.All{text-align:center;width:100%;}section h1{font-family:'Roboto Condensed',sans-serif;font-size:45px;font-weight:bolder;margin:7% 61% 2% 5%;text-align:center;border-bottom:4px solid;}.All img{width:220px;}article p{font-family:'Roboto Condensed',sans-serif;font-weight:700;font-size:25px;margin-top:.1%;margin-bottom:.2%;}.All_image6{display:none;}main ul>li{text-align:left;display:inline-block;margin:.1% -1.1% .1px 3%;}.HBO{margin-bottom:40%;}main>article>h2{font-family:'Oswald Train',sans-serif;font-size:36px;font-weight:bolder;margin:.1% auto .1% 2%;}.Hit-Prev,.Hit-Next,.Child-Prev,.Child-Next,.Anime-Prev,.Anime-Next,.Europh-Prev,.Europh-Next,.HBO-Prev,.HBO-Next{display:none;}main> button{color:#fff;border:rgba(0,0,0,0);background-color:rgba(0,0,0,0);font-size:36px;}.Big-Next{display:inline-block;float:right;margin-top:10%;}.Big-Prev{display:inline-block;float:left;margin-top:10%;}@media only screen and (min-width:760px) and (max-width:1200px){section h1{font-size:30px;margin:9% 50% 2% 5%;border-bottom:4px solid;}article h2{font-size:30px;}.All_image4,.All_image5,.All_image6{display:none;}.Big-Next{margin-top:20%;}.Big-Prev{margin-top:20%;}.HBO{margin-bottom:100%;}}@media only screen and (min-width:300px) and (max-width:760px){section h1{font-size:16px;margin:22% 30% 2% 5%;border-bottom:2px solid;}article>h2{font-size:14px;}.Name{font-size:10px;text-align:center;}main{width:80%;margin-bottom:100%;}.Hit,.Anime,.Europh,.Child,.HBO{display:none;}article button{display:none;}.All img{width:60px;}main ul>li{width:60px;}.Big-Prev,.Big-Next{display:none;}}
    </style>
    <section>
            <h1>Контент үзсэн түүх</h1>
            <article class="All">
                <h2 class="title">Бүх кино</h2>
                <button class="Big-Prev">&#10094;</button>
                <button class="Big-Next">&#10095;</button>
                <ul class="all_list">
                  <li class="All_image1">
                    <img src="Look-TV/HIMG/Hit/2.jpg" alt="HTI-2" title="Movie-2"><p class="Name">Name</p>
                  </li>
                  <li class="All_image2">
                    <img src="Look-TV/HIMG/Child/1.jpg" alt="Child-1" title="Movie-1"><p class="Name">Name</p>
                  </li>
                  <li class="All_image3">
                    <img src="Look-TV/HIMG/Child/2.jpg" alt="Child-2" title="Movie-2"><p class="Name">Name</p>
                  </li>
                  <li class="All_image4">
                    <img src="Look-TV/HIMG/Anime/1.jpg" alt="Anime-1" title="Movie-1"><p class="Name">Name</p>
                  </li>
                  <li class="All_image5">
                    <img src="Look-TV/HIMG/Anime/2.jpg" alt="Anime-2" title="Movie-2"><p class="Name">Name</p>
                  <li class="All_image6">
                    <img src="Look-TV/HIMG/Olon-angit/1.jpg" alt="Olon-angit-1" title="Movie-1"><p class="Name">Name</p>
                  </li>
                </ul>
            </article>
            <article class="Hit">
              <h2 class="title">Хит кино</h2>
              <button class="Hit-Prev">&#10094;</button>
              <button class="Hit-Next">&#10095;</button>
                <ul class="hit_list">
                  <li class="Hit-small">
                    <img src="Look-TV/HIMG/Hit/1.jpg" alt="HTI-1" title="Movie-1">
                    <p class="Name">Name</p>
                  </li>
                  <li class="Hit-small">
                    <img src="Look-TV/HIMG/Hit/2.jpg" alt="HTI-2" title="Movie-2">
                    <p class="Name">Name</p>
                  </li>
                </ul>
            </article>
            <article class="Child">
              <button class="Child-Prev">&#10094;</button>
              <button class="Child-Next">&#10095;</button> 
                <h2 class="title">Хүүхдийн кино</h2>
                <ul class="Child_list">
                  <li class="Child-small">
                    <img src="Look-TV/HIMG/Child/2.jpg" alt="Child-2" title="Movie-2">
                    <p class="Name">Name</p>
                  </li>
                  <li class="Child-small">
                    <img src="Look-TV/HIMG/Child/1.jpg" alt="Child-2" title="Movie-2">
                    <p class="Name">Name</p>
                  </li>
                </ul> 
            </article>
            <article class="Anime">
                <h2 class="title">Аниме багц</h2>
                <button class="Anime-Prev">&#10094;</button>
                <button class="Anime-Next">&#10095;</button>
                <ul class="Anime_list">
                  <li class="Anime-small"> 
                    <img src="Look-TV/HIMG/Anime/1.jpg" alt="Anime-1" title="Movie-1">
                    <p class="Name">Name</p>
                  </li>
                  <li class="Anime-small">
                    <img src="Look-TV/HIMG/Anime/2.jpg" alt="Anime-2" title="Movie-2">
                    <p class="Name">Name</p>
                  </li>
                </ul>
            </article>
            <article class="Europh">
                <h2 class="title">Орос-Европ багц</h2>
                <button class="Europh-Prev">&#10094;</button>
                <button class="Europh-Next">&#10095;</button>
                <ul class="europ-list">
                  <li class="Europe-small">
                    <img src="Look-TV/HIMG/Olon-angit/1.jpg" alt="Olon-angit-1" title="Movie-1">
                    <p class="Name">Name</p>
                  </li>
                  <li class="Europe-small">
                    <img src="Look-TV/HIMG/Olon-angit/2.jpg" alt="Olon-angit-2" title="Movie-2">
                    <p class="Name">Name</p>
                  </li>
                </ul>
            </article>
        </section>
  `
  }
}
//#endregion
//#region setting Render
class Setting {
  constructor(objData){
    this.objData = objData;
  }
  Render(){
    return html`
    <style></style>
    <h1>Look Tv тохиргоо</h1>
    <div class="content">
        <div class="version"><p>Хувилбар: </p></div>
        <div class="lang_dialog"><p>Хэл сонгох: </p></div>
        <div class="backgroundcolor_dialog"><p>Арын дэвсгэр өнгө: </p></div>
    </div>
  `
  }
}
//#endregion
//#region loguot Render
class Logout {
  constructor(objData){
    this.objData = objData;
  }
  Render(){
    return html`
    <style>@import "https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap";body{background-image:url(https://image.freepik.com/free-vector/colorful-gradient-background-with-bokeh-effect_23-2148358216.jpg);background-size:100% 100%;width:100%;height:900px;}main{background-image:url(https://image.freepik.com/free-vector/colorful-gradient-background-with-bokeh-effect_23-2148358216.jpg);background-size:100% 100%;margin:10% 20% auto;height:400px;border-radius:30px;box-shadow:-10px -10px 17px 0 rgba(44,32,39,0.75);}.exit_page{margin:5% 20% auto;text-align:center;height:250px;}h1{padding-top:10%;font-family:'Yanone Kaffee',sans-serif;font-size:40px;color:#3f3939;}main button{font-family:'Yanone Kaffee',sans-serif;font-size:50px;width:200px;height:60px;display:inline-block;color:#fff;background-color:#3f3939;border-radius:20px;transition:width,background-color,color,height,font-size,2s ease;}main button:hover{width:205px;height:65px;font-size:55px;color:#3f3939;background-color:#767676;}@media only screen and (min-width:760px) and (max-width:1260px){body{background-image:url(https://image.freepik.com/free-vector/colorful-gradient-background-with-bokeh-effect_23-2148358216.jpg);background-size:100% 100%;width:100%;height:1150px;}main{background-image:url(https://image.freepik.com/free-vector/colorful-gradient-background-with-bokeh-effect_23-2148358216.jpg);background-size:100% 100%;margin:30% 10% auto;height:400px;border-radius:30px;}.exit_page{margin:25% 20% auto;text-align:center;height:250px;}main button{font-family:'Yanone Kaffee',sans-serif;font-size:25px;width:140px;height:50px;display:inline-block;color:#fff;background-color:#3f3939;border-radius:20px;transition:width,background-color,color,height,font-size,2s ease;}main button:hover{width:145px;height:55px;font-size:30px;color:#3f3939;background-color:#767676;}}@media only screen and (min-width:320px) and (max-width:760px){body{background-image:url(https://image.freepik.com/free-vector/colorful-gradient-background-with-bokeh-effect_23-2148358216.jpg);background-size:100% 100%;width:100%;height:760px;}main{background-image:url(https://image.freepik.com/free-vector/colorful-gradient-background-with-bokeh-effect_23-2148358216.jpg);background-size:100% 100%;margin:30% 10% auto;height:400px;border-radius:30px;}.exit_page{margin:25% 20% 10px;text-align:center;height:200px;}h1{padding-top:100px;font-size:22px;}main button{font-family:'Yanone Kaffee',sans-serif;font-size:20px;width:100px;height:30px;display:inline-block;color:#fff;background-color:#3f3939;border-radius:20px;transition:width,background-color,color,height,font-size,2s ease;}main button:hover{width:105px;height:35px;font-size:25px;color:#3f3939;background-color:#767676;}}</style>
    <div class="exit_page">
    <h1>Та гарахдаа итгэлтэй байна уу?</h1>
    <form action="/login">
        <button>Тийм</button>
    </form>
        <button>Буцах</button>
    </div>
  `
  }
}
//#endregion
//#region login Render
class Login{
  constructor(objData){
    this.objData = objData;
  }
  Render(){
    return html`
    <style>@import "https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap";@media only screen and (min-width: 1260px){body{background-image:url(https://image.freepik.com/free-vector/colorful-gradient-background-with-bokeh-effect_23-2148358216.jpg);background-size:100% 100%;width:100%;height:100%;}main{background-image:url(https://image.freepik.com/free-vector/colorful-gradient-background-with-bokeh-effect_23-2148358216.jpg);background-size:100% 100%;border-radius:25px;margin:10% 20% 20%;height:500px;box-shadow:-10px -10px 17px 0 rgba(44,32,39,0.75);}main article{text-align:center;margin-top:20%;margin-left:10%;margin-right:10%;padding-top:3%;height:500px;}main>article>h2{text-align:center;font-size:40px;font-family:'Yanone Kaffee',sans-serif;color:#fff;}main>article>h2>b{border-bottom:5px #fff solid;}main>article>h2>a{color:#16496b;border:none;transition:border color 3s ease;}main>article>h2>a:hover{color:#948484;border-bottom:5px #948484 solid;}main input{background-color:rgba(250,250,250,0);text-align:center;margin-top:10px;}#Email,#Passwd{font-family:'Yanone Kaffee',sans-serif;font-weight:bolder;color:#000;font-size:22px;height:40px;width:300px;border-radius:10px;border:5px #292121 solid;}#forgot_password{display:inline-block;margin-top:0;margin-bottom:.1%;font-family:'Yanone Kaffee',sans-serif;font-size:15px;}main button{display:inline-block;width:190px;height:40px;border-radius:4px;font-family:'Yanone Kaffee',sans-serif;font-size:25px;transition:3s;margin-top:8px;background-color:#000;color:#fff;border-radius:12px;transition:font-size width height 2s;}main button:hover{width:192px;height:42px;font-size:27px;}#signIn{font-family:'Yanone Kaffee',sans-serif;font-size:24px;font-weight:bolder;width:190px;height:40px;border-radius:1px;background:#1323f7;color:#fff;border-radius:12px;}}@media only screen and (min-width: 760px) and (max-width:1260px){body{background-image:url(https://image.freepik.com/free-vector/colorful-gradient-background-with-bokeh-effect_23-2148358216.jpg);background-size:100% 150%;}main{background-image:url(https://image.freepik.com/free-vector/colorful-gradient-background-with-bokeh-effect_23-2148358216.jpg);background-size:100% 100%;border-radius:25px;margin:20%;padding:10% 3%;height:800px;box-shadow:-10px -10px 17px 0 rgba(44,32,39,0.75);}main article{text-align:center;margin-top:20%;margin-left:10%;margin-right:10%;height:500px;}main>article>h2{text-align:center;font-size:30px;font-family:'Yanone Kaffee',sans-serif;color:#3f3535;}main>article>h2>b{border-bottom:5px #3f3535 solid;}main>article>h2>a{color:#16496b;border:none;transition:border color 3s ease;}main>article>h2>a:hover{color:#948484;border-bottom:5px #948484 solid;}main input{background-color:rgba(250,250,250,0);text-align:center;margin-top:10px;}#Email,#Passwd{font-family:'Yanone Kaffee',sans-serif;font-weight:bolder;color:#000;font-size:35px;width:340px;border-radius:10px;border:5px #292121 solid;}#forgot_password{display:inline-block;margin-top:0;margin-bottom:.1%;font-family:'Yanone Kaffee',sans-serif;font-size:24px;}main button{display:inline-block;width:190px;height:40px;border-radius:4px;font-family:'Yanone Kaffee',sans-serif;font-size:25px;transition:3s;margin-top:8px;background-color:#000;color:#fff;border-radius:12px;transition:font-size width height 2s;}main button:hover{width:192px;height:92px;font-size:27px;}#signIn{font-family:'Yanone Kaffee',sans-serif;font-size:24px;font-weight:bolder;width:190px;height:40px;border-radius:1px;background:#1323f7;color:#fff;border-radius:12px;}}@media only screen and (min-width:360px) and (max-width:760px){body{background-image:url(https://image.freepik.com/free-vector/colorful-gradient-background-with-bokeh-effect_23-2148358216.jpg);background-size:100% 150%;}main{width:100%;}main article{text-align:center;margin-top:30%;margin-left:10%;margin-right:10%;border:5px #3f3535 solid;border-radius:8px;}main>article>h2{text-align:center;font-size:content: \f234;font-family:'Yanone Kaffee',sans-serif;color:#3f3535;}main>article>h2>b{border-bottom:5px #3f3535 solid;}main>article>h2>a{color:#16496b;border:none;transition:border color 3s ease;}main>article>h2>a:hover{color:#948484;border-bottom:5px #948484 solid;}main input{background-color:rgba(250,250,250,0);text-align:center;margin-top:10px;}#Email,#Passwd{font-family:'Yanone Kaffee',sans-serif;font-weight:bolder;color:#000;font-size:20px;width:230px;border-radius:10px;border:5px #292121 solid;}#forgot_password{display:inline-block;margin-top:0;margin-bottom:.1%;font-family:'Yanone Kaffee',sans-serif;font-size:14px;}main button{display:inline-block;width:120px;height:30px;border-radius:4px;font-family:'Yanone Kaffee',sans-serif;font-size:16px;margin-top:3px;background-color:#000;color:#fff;border-radius:12px;transition:font-size width height 2s;}main button:hover{width:122px;height:32px;font-size:18px;}#signIn{font-family:'Yanone Kaffee',sans-serif;font-size:12px;font-weight:bolder;width:120px;height:30px;border-radius:1px;background:#1323f7;color:#fff;border-radius:12px;}}</style>
    <article>
      <h2><b>Нэвтрэх</b>/
      <a class="main-links" href="/signup" alt="Signup">Бүртгүүлэх</a></h2>
      <form>
        <input name="Email" id="Email" value="" placeholder="email or number"><br>
        <input name="Passwd" id="Passwd" type="password" placeholder="password"><br>
        <ul>
          <li id="forgot_password">
            <a href="#"> Нууц үгээ мартсан</a>
          </li>
         </ul>
           <button id="Sign-in">Нэвтрэх</button>
      </form>
      <input name="signIn" id="signIn" value="Facebook-н нэрээр" type="submit">
    </article>
      <div class="messenger">
        <a href="#"><img src="SVG/chat.png" alt="Chat" title="Холбоо барина уу"></a>
      </div>
    `
  }
}
//#endregion
//#region login Render
class Signup{
  constructor(objData){
    this.objData = objData;
  }
  Render(){
    return html`
  <style>@import "https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap";@media only screen and (min-width: 1260px){body{background-image:url(https://image.freepik.com/free-vector/colorful-gradient-background-with-bokeh-effect_23-2148358216.jpg);background-size:100% 100%;width:100%;height:100%;}main{background-image:url(https://image.freepik.com/free-vector/colorful-gradient-background-with-bokeh-effect_23-2148358216.jpg);background-size:100% 100%;border-radius:25px;margin:10% 20% 20%;height:500px;box-shadow:-10px -10px 17px 0 rgba(44,32,39,0.75);}main article{text-align:center;margin-top:20%;margin-left:10%;margin-right:10%;padding-top:3%;height:500px;}main>article>h2{text-align:center;font-size:40px;font-family:'Yanone Kaffee',sans-serif;color:#fff;}main>article>h2>b{border-bottom:5px #fff solid;}main>article>h2>a{color:#16496b;border:none;transition:border color 3s ease;}main>article>h2>a:hover{color:#948484;border-bottom:5px #948484 solid;}main input{background-color:rgba(250,250,250,0);text-align:center;margin-top:10px;}#lname,#fname,#date,#email,#phone{font-family:'Yanone Kaffee',sans-serif;font-weight:bolder;color:#000;font-size:22px;height:40px;width:300px;border-radius:10px;border:5px #292121 solid;}main #button{display:inline-block;width:190px;height:40px;border-radius:4px;font-family:'Yanone Kaffee',sans-serif;font-size:25px;transition:3s;margin-top:8px;background-color:#000;color:#fff;border-radius:12px;transition:font-size width height 2s;}main #button:hover{width:192px;height:42px;font-size:27px;}}@media only screen and (min-width: 760px) and (max-width:1260px){body{background-image:url(https://image.freepik.com/free-vector/colorful-gradient-background-with-bokeh-effect_23-2148358216.jpg);background-size:100% 150%;}main{background-image:url(https://image.freepik.com/free-vector/colorful-gradient-background-with-bokeh-effect_23-2148358216.jpg);background-size:100% 100%;border-radius:25px;margin:20%;padding:10% 3%;height:800px;box-shadow:-10px -10px 17px 0 rgba(44,32,39,0.75);}main article{text-align:center;margin-top:20%;margin-left:10%;margin-right:10%;height:500px;}main>article>h2{text-align:center;font-size:30px;font-family:'Yanone Kaffee',sans-serif;color:#3f3535;}main>article>h2>b{border-bottom:5px #3f3535 solid;}main>article>h2>a{color:#16496b;border:none;transition:border color 3s ease;}main>article>h2>a:hover{color:#948484;border-bottom:5px #948484 solid;}main input{background-color:rgba(250,250,250,0);text-align:center;margin-top:10px;}#lname,#fname,#date,#email,#phone{font-family:'Yanone Kaffee',sans-serif;font-weight:bolder;color:#000;font-size:35px;width:340px;border-radius:10px;border:5px #292121 solid;}main #button{display:inline-block;width:190px;height:40px;border-radius:4px;font-family:'Yanone Kaffee',sans-serif;font-size:25px;transition:3s;margin-top:8px;background-color:#000;color:#fff;border-radius:12px;transition:font-size width height 2s;}main #button:hover{width:192px;height:92px;font-size:27px;}}@media only screen and (min-width:360px) and (max-width:760px){body{background-image:url(https://image.freepik.com/free-vector/colorful-gradient-background-with-bokeh-effect_23-2148358216.jpg);background-size:100% 150%;}main{width:100%;}main article{text-align:center;margin-top:30%;margin-left:10%;margin-right:10%;border:5px #3f3535 solid;border-radius:8px;}main>article>h2{text-align:center;font-size:content: \f234;font-family:'Yanone Kaffee',sans-serif;color:#3f3535;}main>article>h2>b{border-bottom:5px #3f3535 solid;}main>article>h2>a{color:#16496b;border:none;transition:border color 3s ease;}main>article>h2>a:hover{color:#948484;border-bottom:5px #948484 solid;}main input{background-color:rgba(250,250,250,0);text-align:center;margin-top:10px;}#lname,#fname,#date,#email,#phone{font-family:'Yanone Kaffee',sans-serif;font-weight:bolder;color:#000;font-size:20px;width:230px;border-radius:10px;border:5px #292121 solid;}main #button{display:inline-block;width:120px;height:30px;border-radius:4px;font-family:'Yanone Kaffee',sans-serif;font-size:16px;margin-top:3px;background-color:#000;color:#fff;border-radius:12px;transition:font-size width height 2s;}main #button:hover{width:122px;height:32px;font-size:18px;}}</style>
  <article>
    <h2><b>Бүртгүүлэх</b>/<a class="main-links" href="/login" alt="Signup">Нэвтрэх</a></h2>
    <form action="#">
      <input type="text" name="Last name" id="lname" placeholder="firstname"><br>
      <input type="text" name="First name" id="fname" placeholder="last name"><br>
      <input type="date" name="date" id="date"><br>
      <input type="email" name="email" id="email" placeholder="email or facebook"><br>
      <input type="tel" id="phone" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required><br>
      <input name="button" id="button" value="Бүртгүүлэх" type="submit">
    </form>
  </article>
    `
  }
}
//#endregion
const myMain = new MySite("myMain");
//#region Create HomePage
const homeDataObj = {
  Big:{
          img1: "Look-TV/WIMG/image1.jpg", 
          img2: "Look-TV/WIMG/image2.jpg",
          img4: "Look-TV/WIMG/image4.jpg",
          img5: "Look-TV/WIMG/image5.jpg"
         },
  prev: "❮",
  next: "❯",
  New:"Шинээр нэмэгдсэн кино",
  NewImgs:[
    {img:"Look-TV/HIMG/Hit/1.jpg", alt:"Movie1", title:"Movie1",display:"display:inline-block"},
    {img:"Look-TV/HIMG/Hit/2.jpg", alt:"Movie2", title:"Movie2",display:"display:inline-block"},
    {img:"Look-TV/HIMG/Hit/3.jpg", alt:"Movie3", title:"Movie3",display:"display:inline-block"},
    {img:"Look-TV/HIMG/Hit/4.jpg", alt:"Movie4", title:"Movie4",display:"display:inline-block"},
    {img:"Look-TV/HIMG/Hit/1.jpg", alt:"Movie1", title:"Movie1",display:""},
    {img:"Look-TV/HIMG/Hit/2.jpg", alt:"Movie2", title:"Movie2",display:""},
    {img:"Look-TV/HIMG/Hit/3.jpg", alt:"Movie3", title:"Movie3",display:""},
    {img:"Look-TV/HIMG/Hit/4.jpg", alt:"Movie4", title:"Movie4",display:""}
  ],
  View:"Үзсэн кинонууд",
  ViewImgs:[
    {img:"Look-TV/HIMG/Hit/3.jpg", alt:"Movie1",title:"Movie1"},
    {img:"Look-TV/HIMG/Olon-angit/2.jpg",alt:"Movie1",title:"Movie2"},
    {img:"Look-TV/HIMG/Hit/4.jpg", alt:"Movie3",title:"Movie3"},
    {img:"Look-TV/HIMG/Hit/1.jpg", alt:"Movie4",title:"Movie4"}
  ],
  Title:"Trailer",
  trailer:[
      {trailer:"Look-TV/Movie/GODZILLAVSKONGTrailer.mp4",type:"video/mp4"},
      {trailer:"Look-TV/Movie/GODZILLAVSKONGTrailer.ogg",type:"video/ogg"}
  ],
  Tolbor:"Төлбөрийн мэдээлэл",
  piece:[
      {UseDate:"1 сар",id:4000,Bagts:"Багц", Tohooromj:"төхөөрөмж",Avah:"авах",divClass:"piece_price2"},
      {UseDate:"3 сар",id:12000,Bagts:"Багц", Tohooromj:"төхөөрөмж",Avah:"авах",divClass:"piece_price2"},
      {UseDate:"6 сар",id:20000,Bagts:"Багц", Tohooromj:"төхөөрөмж",Avah:"авах",divClass:"piece_price2"}
  ]
}
//#endregion
//#region Create Bagts
const bagstDataObj = {
  "bagts":[
    {"title":"Хит кино",
      "imgs":[
        {"img":"Look-TV/HIMG/Hit/1.jpg",id:13,"alt":"image-1"}
      ]
    },
    {"title":"Аниме",
        "imgs":[
          {"img":"Look-TV/HIMG/Anime/1.jpg",id:1,"alt":"image-1"}
        ]
      },
        {"title":"HBO олон ангит",
        "imgs":[
          {"img":"Look-TV/HIMG/Olon-angit/1.jpg",id:21,"alt":"image-1"}
        ]
      },
        {"title":"Хүүхдийн Кино",
        "imgs":[
          {"img":"Look-TV/HIMG/Child/1.jpg",id:9,"alt":"image-1"}
        ]
      },
        {"title":"Орос-Европ багц",
        "imgs":[
          {"img":"Look-TV/HIMG/Oros-Europe/1.jpg",id:21,"alt":"image-1"}
        ]
      }
  ]
};
//#endregion

//#region Create Sale
const saleDataObj = {
    "": ""
};
//#endregion
//#region Create Turees
const tureesDataObj = {
    "round":[
      {
        "information":[
          {"src":"Look-TV/HIMG/Child/1.jpg","name":"Трансформ","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"Look-TV/HIMG/Child/2.jpg","name":"Пороро","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"Look-TV/HIMG/Child/6.jpg","name":"Таяо","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"Look-TV/HIMG/Child/4.jpg","name":"Ноён Стони","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"Look-TV/HIMG/Child/5.jpg","name":"Мөнх-Тунх","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"}
        ]
      },
      {
        "information":[
          {"src":"Look-TV/HIMG/Anime/1.jpg","name":"My Hero","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"Look-TV/HIMG/Anime/2.jpg","name":"Япон хүүхэлдэй","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"Look-TV/HIMG/Anime/3.jpg","name":"MMO Junkie","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"Look-TV/HIMG/Anime/4.jpg","name":"Orange","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"Look-TV/HIMG/Anime/5.jpg","name":"Ноён Стони","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"}
        ]
      },
      {
        "information":[
          {"src":"Look-TV/HIMG/Hit/1.jpg","name":"Явуулын гуанз","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"Look-TV/HIMG/Hit/2.jpg","name":"Залуу тулаанч","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"Look-TV/HIMG/Hit/3.jpg","name":"Цагдаагийн түүх","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"Look-TV/HIMG/Hit/4.jpg","name":"Цагдаагийн түүх3","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"},
          {"src":"Look-TV/HIMG/Hit/5.jpg","name":"Үхлийн тоглоом","start":"2021/08/08 23:59:59","end":"2021/09/08 23:59:59","due":"Сунгах"}
        ]
      }
    ]
};
//#endregion
//#region Create Tv
const tvDataObj = {
    title:"Кино суваг",
    Tvs:[
      {class:"Chapt_Tv dialog-National-channel",title:"Үндсэн сувгууд",
      tv:[
        {src:"Look-TV/tv-img/national-channel/1.png",name:"MNB"},
        {src:"Look-TV/tv-img/national-channel/2.png",name:"MNB2"}
      ]},
      {class:"Chapt_Tv dialog-National-package",title:"Үндсэн багц",
      tv:[
        {src:"Look-TV/tv-img/national-package/2.png",name:"TV9"},
        {src:"Look-TV/tv-img/national-package/3.png",name:"ETV"},
        {src:"Look-TV/tv-img/national-package/4.png",name:"Eagle Tv"},
        {src:"Look-TV/tv-img/national-package/6.png",name:"MNBA-sports"},
        {src:"Look-TV/tv-img/national-package/7.png",name:"TV-25"},
        {src:"Look-TV/tv-img/national-package/8.png",name:"UBS-tv"},
        {src:"Look-TV/tv-img/national-package/9.png",name:"TV5"},
        {src:"Look-TV/tv-img/national-package/10.png",name:"VTV"},
        {src:"Look-TV/tv-img/national-package/12.png",name:"Suld-TV"},
        {src:"Look-TV/tv-img/national-package/13.png",name:"NTV"},
        {src:"Look-TV/tv-img/national-package/14.png",name:"OTV"},
        {src:"Look-TV/tv-img/national-package/15.png",name:"C1"},
        {src:"Look-TV/tv-img/national-package/16.png",name:"Channel 11 HD"},
        {src:"Look-TV/tv-img/national-package/17.png",name:"Dream box HD"},
        {src:"Look-TV/tv-img/national-package/18.png",name:"Education TV"},
        {src:"Look-TV/tv-img/national-package/19.png",name:"MNC"},
        {src:"Look-TV/tv-img/national-package/20.png",name:"Royal TV"},
        {src:"Look-TV/tv-img/national-package/21.png",name:"SPS National"},
        {src:"Look-TV/tv-img/national-package/22.png",name:"Star HD"},
        {src:"Look-TV/tv-img/national-package/23.png",name:"SBN TV"},
        {src:"Look-TV/tv-img/national-package/24.png",name:"Bloomberg TV mongolia"},
        {src:"Look-TV/tv-img/national-package/25.png",name:"Эх орон"},
        {src:"Look-TV/tv-img/national-package/26.png",name:"Seven TV"},
        {src:"Look-TV/tv-img/national-package/27.png",name:"Luxe TV"},
        {src:"Look-TV/tv-img/national-package/29.png",name:"УИХ чуулган"},
        {src:"Look-TV/tv-img/national-package/30.png",name:"TV6"},
        {src:"Look-TV/tv-img/national-package/31.jpg",name:"KBS"},
        {src:"Look-TV/tv-img/national-package/32.png",name:"Discoury Science"},
        {src:"Look-TV/tv-img/national-package/33.png",name:"History HD"},
        {src:"Look-TV/tv-img/national-package/34.png",name:"LIFETIME"},
        {src:"Look-TV/tv-img/national-package/35.png",name:"HGTV"},
        {src:"Look-TV/tv-img/national-package/36.png",name:"TRACE HD"},
        {src:"Look-TV/tv-img/national-package/37.png",name:"EURO sport HD"},
        {src:"Look-TV/tv-img/national-package/38.png",name:"DMAX HD"},
        {src:"Look-TV/tv-img/national-package/39.png",name:"Trace Sport Stars"},
        {src:"Look-TV/tv-img/national-package/40.png",name:"CN HD"},
        {src:"Look-TV/tv-img/national-package/41.png",name:"Nickelodeon"},
      ]},
      {class:"Chapt_Tv dialog-National-family-package",title:"Гэр бүл багц",
      tv:[
        {src:"Look-TV/tv-img/family-package/1.png",name:"Natoinal Geographic"},
        {src:"Look-TV/tv-img/family-package/2.png",name:"Asian Food Channel HD"},
        {src:"Look-TV/tv-img/family-package/3.png",name:"MTV Asia HD"},
        {src:"Look-TV/tv-img/family-package/4.png",name:"BBC Lifestyle HD"},
        {src:"Look-TV/tv-img/family-package/5.png",name:"Cbeebies HD"}
      ]},
      {class:"Chapt_Tv dialog-National-HBO-channel",title:"HBO сувгууд",
      tv:[
        {src:"Look-TV/tv-img/HBO-channel/1.png",name:"HBO"},
        {src:"Look-TV/tv-img/HBO-channel/2.png",name:"HBO Signature"},
        {src:"Look-TV/tv-img/HBO-channel/3.png",name:"HBO Hits"},
        {src:"Look-TV/tv-img/HBO-channel/4.png",name:"HBO Family"},
        {src:"Look-TV/tv-img/HBO-channel/5.png",name:"Cinemax"}
      ]},
      {class:"Chapt_Tv dialog-entetainment-package",title:"Энтертайнмент Багц",
      tv:[
        {src:"Look-TV/tv-img/entertainment-package/1.png",name:"Blue Ant Entertainment"},
        {src:"Look-TV/tv-img/entertainment-package/2.png",name:"Blue Ant Extreme"},
        {src:"Look-TV/tv-img/entertainment-package/3.png",name:"BBC Earth HD"},
        {src:"Look-TV/tv-img/entertainment-package/4.png",name:"Outdoor"},
        {src:"Look-TV/tv-img/entertainment-package/5.png",name:"MTV Live"}
      ]},
      {class:"Chapt_Tv diaiog-sport-package",title:"Спорт багц",
      tv:[
        {src:"Look-TV/tv-img/sport-package/1.png", name:"SPS World"},
        {src:"Look-TV/tv-img/sport-package/2.png", name:"SPS Prime"},
        {src:"Look-TV/tv-img/sport-package/3.png", name:"SPS Classic"},
        {src:"Look-TV/tv-img/sport-package/4.png", name:"SPS Fight"}
      ]},
      {class:"Chapt_Tv dialog-Traffic-channel",title:"Traffic-channel",
      tv:[
        {src:"Look-TV/tv-img/traffic-channel/1.png",name:"traffic-channel1"},
        {src:"Look-TV/tv-img/traffic-channel/1.png",name:"traffic-channel2"},
        {src:"Look-TV/tv-img/traffic-channel/1.png",name:"traffic-channel3"},
        {src:"Look-TV/tv-img/traffic-channel/1.png",name:"traffic-channel4"},
        {src:"Look-TV/tv-img/traffic-channel/1.png",name:"traffic-channel5"},
        {src:"Look-TV/tv-img/traffic-channel/1.png",name:"traffic-channel6"},
        {src:"Look-TV/tv-img/traffic-channel/1.png",name:"traffic-channel7"}
      ]},
    ],

    EPIR:[
      {src:"Look-TV/Video/Robocon.mp4"}
    ],
    month:"12", day:"11",
    time_percentage:[
      {Dates:"08:00:00",Sedev:"Өглөөний хөтөлбөр"},
      {Dates:"09:00:00",Sedev:"Хүүхдийн кино"},
      {Dates:"10:00:00",Sedev:"Мэдээ"},
      {Dates:"11:00:00",Sedev:"Теле хичээл"},
      {Dates:"12:00:00",Sedev:"Өдрийн мэндчилгээ"},
      {Dates:"13:00:00",Sedev:"Хүүхдийн кино"},
      {Dates:"14:00:00",Sedev:"Ая дууны мэндчилгээ"},
      {Dates:"15:00:00",Sedev:"Мэдээ"},
      {Dates:"16:00:00",Sedev:"Давталт /УСК/"},
      {Dates:"17:00:00",Sedev:"Зар сурталчилгаа"},
      {Dates:"18:00:00",Sedev:"ОАК"},
      {Dates:"19:00:00",Sedev:"Мэдээ"},
      {Dates:"20:00:00",Sedev:"Зар сурталчилгаа"},
      {Dates:"21:00:00",Sedev:"Нэвтрүүлэг"},
      {Dates:"22:00:00",Sedev:"УСК"},
      {Dates:"23:00:00",Sedev:"Дууны цаг"}
    ]
};
//#endregion
//#region TVRouter
const tvDataObjRouter = {
    title:"Кино суваг",
    Tvs:[
      {class:"Chapt_Tv dialog-National-channel",title:"Үндсэн сувгууд",
      tv:[
        {src:"tv-img/national-channel/1.png",name:"MNB"},
        {src:"tv-img/national-channel/2.png",name:"MNB2"}
      ]},
      {class:"Chapt_Tv dialog-National-package",title:"Үндсэн багц",
      tv:[
        {src:"tv-img/national-package/2.png",name:"TV9"},
        {src:"tv-img/national-package/3.png",name:"ETV"},
        {src:"tv-img/national-package/4.png",name:"Eagle Tv"},
        {src:"tv-img/national-package/6.png",name:"MNBA-sports"},
        {src:"tv-img/national-package/7.png",name:"TV-25"},
        {src:"tv-img/national-package/8.png",name:"UBS-tv"},
        {src:"tv-img/national-package/9.png",name:"TV5"},
        {src:"tv-img/national-package/10.png",name:"VTV"},
        {src:"tv-img/national-package/12.png",name:"Suld-TV"},
        {src:"tv-img/national-package/13.png",name:"NTV"},
        {src:"tv-img/national-package/14.png",name:"OTV"},
        {src:"tv-img/national-package/15.png",name:"C1"},
        {src:"tv-img/national-package/16.png",name:"Channel 11 HD"},
        {src:"tv-img/national-package/17.png",name:"Dream box HD"},
        {src:"tv-img/national-package/18.png",name:"Education TV"},
        {src:"tv-img/national-package/19.png",name:"MNC"},
        {src:"tv-img/national-package/20.png",name:"Royal TV"},
        {src:"tv-img/national-package/21.png",name:"SPS National"},
        {src:"tv-img/national-package/22.png",name:"Star HD"},
        {src:"tv-img/national-package/23.png",name:"SBN TV"},
        {src:"tv-img/national-package/24.png",name:"Bloomberg TV mongolia"},
        {src:"tv-img/national-package/25.png",name:"Эх орон"},
        {src:"tv-img/national-package/26.png",name:"Seven TV"},
        {src:"tv-img/national-package/27.png",name:"Luxe TV"},
        {src:"tv-img/national-package/29.png",name:"УИХ чуулган"},
        {src:"tv-img/national-package/30.png",name:"TV6"},
        {src:"tv-img/national-package/31.jpg",name:"KBS"},
        {src:"tv-img/national-package/32.png",name:"Discoury Science"},
        {src:"tv-img/national-package/33.png",name:"History HD"},
        {src:"tv-img/national-package/34.png",name:"LIFETIME"},
        {src:"tv-img/national-package/35.png",name:"HGTV"},
        {src:"tv-img/national-package/36.png",name:"TRACE HD"},
        {src:"tv-img/national-package/37.png",name:"EURO sport HD"},
        {src:"tv-img/national-package/38.png",name:"DMAX HD"},
        {src:"tv-img/national-package/39.png",name:"Trace Sport Stars"},
        {src:"tv-img/national-package/40.png",name:"CN HD"},
        {src:"tv-img/national-package/41.png",name:"Nickelodeon"},
      ]},
      {class:"Chapt_Tv dialog-National-family-package",title:"Гэр бүл багц",
      tv:[
        {src:"tv-img/family-package/1.png",name:"Natoinal Geographic"},
        {src:"tv-img/family-package/2.png",name:"Asian Food Channel HD"},
        {src:"tv-img/family-package/3.png",name:"MTV Asia HD"},
        {src:"tv-img/family-package/4.png",name:"BBC Lifestyle HD"},
        {src:"tv-img/family-package/5.png",name:"Cbeebies HD"}
      ]},
      {class:"Chapt_Tv dialog-National-HBO-channel",title:"HBO сувгууд",
      tv:[
        {src:"tv-img/HBO-channel/1.png",name:"HBO"},
        {src:"tv-img/HBO-channel/2.png",name:"HBO Signature"},
        {src:"tv-img/HBO-channel/3.png",name:"HBO Hits"},
        {src:"tv-img/HBO-channel/4.png",name:"HBO Family"},
        {src:"tv-img/HBO-channel/5.png",name:"Cinemax"}
      ]},
      {class:"Chapt_Tv dialog-entetainment-package",title:"Энтертайнмент Багц",
      tv:[
        {src:"tv-img/entertainment-package/1.png",name:"Blue Ant Entertainment"},
        {src:"tv-img/entertainment-package/2.png",name:"Blue Ant Extreme"},
        {src:"tv-img/entertainment-package/3.png",name:"BBC Earth HD"},
        {src:"tv-img/entertainment-package/4.png",name:"Outdoor"},
        {src:"tv-img/entertainment-package/5.png",name:"MTV Live"}
      ]},
      {class:"Chapt_Tv diaiog-sport-package",title:"Спорт багц",
      tv:[
        {src:"tv-img/sport-package/1.png", name:"SPS World"},
        {src:"tv-img/sport-package/2.png", name:"SPS Prime"},
        {src:"tv-img/sport-package/3.png", name:"SPS Classic"},
        {src:"tv-img/sport-package/4.png", name:"SPS Fight"}
      ]},
      {class:"Chapt_Tv dialog-Traffic-channel",title:"Traffic-channel",
      tv:[
        {src:"tv-img/traffic-channel/1.png",name:"traffic-channel1"},
        {src:"tv-img/traffic-channel/1.png",name:"traffic-channel2"},
        {src:"tv-img/traffic-channel/1.png",name:"traffic-channel3"},
        {src:"tv-img/traffic-channel/1.png",name:"traffic-channel4"},
        {src:"tv-img/traffic-channel/1.png",name:"traffic-channel5"},
        {src:"tv-img/traffic-channel/1.png",name:"traffic-channel6"},
        {src:"tv-img/traffic-channel/1.png",name:"traffic-channel7"}
      ]},
    ],

    EPIR:[
      {src:"Video/Robocon.mp4"}
    ],
    month:"12", day:"11",
    time_percentage:[
      {Dates:"08:00:00",Sedev:"Өглөөний хөтөлбөр"},
      {Dates:"09:00:00",Sedev:"Хүүхдийн кино"},
      {Dates:"10:00:00",Sedev:"Мэдээ"},
      {Dates:"11:00:00",Sedev:"Теле хичээл"},
      {Dates:"12:00:00",Sedev:"Өдрийн мэндчилгээ"},
      {Dates:"13:00:00",Sedev:"Хүүхдийн кино"},
      {Dates:"14:00:00",Sedev:"Ая дууны мэндчилгээ"},
      {Dates:"15:00:00",Sedev:"Мэдээ"},
      {Dates:"16:00:00",Sedev:"Давталт /УСК/"},
      {Dates:"17:00:00",Sedev:"Зар сурталчилгаа"},
      {Dates:"18:00:00",Sedev:"ОАК"},
      {Dates:"19:00:00",Sedev:"Мэдээ"},
      {Dates:"20:00:00",Sedev:"Зар сурталчилгаа"},
      {Dates:"21:00:00",Sedev:"Нэвтрүүлэг"},
      {Dates:"22:00:00",Sedev:"УСК"},
      {Dates:"23:00:00",Sedev:"Дууны цаг"}
    ]
};
//#endregion
//#region Create info
const infoDataobj = {}
//#endregion
//#region Create content
const contentDataObj = {}
//#endregion
//#region Create logout
const logoutDataObj = {}
//#endregion
//#region Create login
const loginDataObj = {}
//#endregion
//#region Create signup
const UpDataObj = {}
//#endregion
//#region Create setting
const settingDataObj = {}
//#endregion
const home = new Home(homeDataObj);
const bagts = new Bagst(bagstDataObj);
const sale = new Sale(saleDataObj);
const turees = new Turees(tureesDataObj);
const tv = new Tv(tvDataObj);
const TVRouter = new Tv(tvDataObjRouter);
const information = new Information(infoDataobj);
const content = new Content(contentDataObj);
const setting = new Setting(settingDataObj);
const logout = new Logout(logoutDataObj);
const login = new Login(loginDataObj);
const signup = new Signup(UpDataObj);
//Route list
myMain.AddRoute("/","/home", home);
myMain.AddRoute("/", "/Bagts", bagts);
myMain.AddRoute("/", "/sale", sale);
myMain.AddRoute("/", "/Turees", turees);
myMain.AddRoute("/", "/Tv", tv);
myMain.AddRoute("/", "/", TVRouter);
myMain.AddRoute("/", "/information", information);
myMain.AddRoute("/", "/content", content);
myMain.AddRoute("/", "/setting", setting);
myMain.AddRoute("/", "/logout", logout);
myMain.AddRoute("/", "/login", login);
myMain.AddRoute("/", "/signup", signup);

[...document.getElementsByClassName("main-links")].forEach(element => {
    
    element.addEventListener("click", e => {
        e.preventDefault();
        history.pushState(null, "", e.target.href);
        //myMain.OnRoute(e.target.href);
    }
    )
});

window.addEventListener("popstate", e => {
    console.log("navigation occured");
    myMain.OnRoute(document.location.pathname);
});

history.pushState = function()
{
    History.prototype.pushState.apply(history, arguments);
    myMain.OnRoute(document.location.pathname);
}

myMain.OnRoute(location.pathname);
//myMain.OnRoute("/home");
//myMain.OnRoute("/Bagts");
//myMain.OnRoute("/sale");
//myMain.OnRoute("/Turees");
//myMain.OnRoute("/Tv");
myMain.OnRoute("/");
//myMain.OnRoute("/information");
//myMain.OnRoute("/content");
//myMain.OnRoute("/setting");
//myMain.OnRoute("/logout");
//myMain.OnRoute("/login");
//myMain.OnRoute("/signup");