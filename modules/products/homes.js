import Component from "../components/component.js";

export default class Home extends Component{
    constructor(objData){
        super();
        this.homeData = objData;
    }
    A(bet) {
        console.log(bet);
        
        return this.html`
        <img class="Small" src="${bet.img}" alt="${bet.alt}" title="${bet.title}" style="${bet.display}">`;
      }
      C(Teb) {
        console.log(Teb);
        
        return this.html`
        <img src="${Teb.img}" alt="${Teb.alt}" title="${Teb.title}">`;
      }
      Trail(TrData){
        return this.html`
        <source src="${TrData.trailer}" type="${TrData.type}">`;
      }

      RenderList(listOfProducts) {
        let retVal = "";


        for (let prod of listOfProducts) {
            retVal+=`
            <div class='${prod.divClass}'>
            <h2>${prod.UseDate}</h2>
            <h3>${prod.id}</h3>
            <my-pay></my-pay>
            <h3>${prod.Tohooromj}</h3>
            <h3>Тв-${prod.TV_ERH}</h3>
            <button>${prod.Avah}</button>
            </div>
            `
        }
        return retVal;
    }
      //#endregion
         Render() {
          let NewRendered = "";
          for (let b of this.homeData.NewImgs) {
            NewRendered+=this.A(b);
          }
          let ViewRendered = "";
          for (let d of this.homeData.ViewImgs) {
            ViewRendered+=this.C(d);
          }
          let TraileRender = "";
          for(let tr of this.homeData.trailer){
              TraileRender+=this.Trail(tr);
          }


          return this.html`
        <style>
        @import "https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital@1&display=swap";@import "https://fonts.googleapis.com/css2?family=Oswald&family=Train+One&display=swap";#Big-slide{backgroud-size:100% 100%}.MovieImg{width:80%;text-align:center;}#Big-slide{text-align:center;}.Small{display:none}.stars-left-1{display:inline-block;float:right;margin-top:12%;}.stars-right-1{display:inline-block;float:left;margin-top:12%;}.stars-left-2{display:inline-block;float:right;margin-top:12%;}.stars-right-2{display:inline-block;float:left;margin-top:12%;}div{display:inline-block;}main button{border:rgba(0,0,0,0);background-color:rgba(0,0,0,0);color:#fff;cursor:pointer;}@media only screen and (min-width: 1278px){.Big-Next{margin-left:33%;cursor:pointer;position:absolute;top:48%;width:auto;font-weight:700;font-size:72px;}.Big-Prev{margin-left:-36.5%;position:absolute;top:48%;width:auto;font-weight:700;font-size:72px;}.News h2{margin-top:1%;margin-bottom:.5%;padding-left:10%;font-family:'Roboto Condensed',sans-serif;font-size:27px;}.News button{font-size:40px;}.stars-left-1{margin-right:4.5%;}.stars-right-1{margin-left:3.5%;}.stars-left-2{margin-right:4.5%;}.stars-right-2{margin-left:3.5%;margin-right:1%;}.view,.Smallslide{text-align:center;}.Smallslide img{margin-right:6px;margin-left:6px;width:20%;height:auto;}.trailer{padding-left:35%;}.trailer h3{font-size:30px;margin-left:6%;margin-bottom:1%;width:10%;text-align:center;border-bottom:2px solid;}.table{text-align:center;margin-left:5%;margin-bottom:14%;width:90%;}.piece_price1,.piece_price2,.piece_price3{border:2px solid;margin-left:0 auto auto 6%;display:inline-block;width:25%;}.table h1{margin-bottom:1%;font-family:'Oswald',sans-serif;margin-left:35%;margin-right:35%;border-bottom:3px solid;font-size:36px;}.table h2{margin:auto;border-bottom:2px solid;}.table h3{margin:auto;border-bottom:2px solid;}.table button{color:#fff;background-color:#000;}}@media only screen and (min-width: 760px) and (max-width:1278px){.text{margin-left:14%;color:#fff;top:6%;font-size:25px;position:absolute;width:auto;border-bottom:2px solid;}.Big-Next{margin-left:34%;background-color:rgba(0,0,0,0);color:#fff;cursor:pointer;position:absolute;top:180px;width:auto;font-weight:700;font-size:32px;}.Big-Prev{margin-left:-38.5%;background-color:rgba(0,0,0,0);color:#fff;cursor:pointer;position:absolute;top:180px;width:auto;font-weight:700;font-size:32px;}.News button{font-size:30px;}.stars-left-1{margin-right:4.5%;}.stars-right-1{margin-left:3.5%;margin-right:1%;}.stars-left-2{margin-right:4.5%;}.stars-right-2{margin-left:3.5%;margin-right:1%;}.News h2{margin-top:1%;margin-bottom:.5%;padding-left:12%;font-family:'Roboto Condensed',sans-serif;font-size:20px;}.view,.Smallslide{text-align:center;}.Smallslide img{margin-right:4px;margin-left:4px;width:18%;height:auto;}.trailer{padding-left:35%;}.trailer h3{font-size:25px;margin-left:2px;margin-bottom:1%;width:20%;text-align:center;border-bottom:2px solid;}video{width:90%;height:90%;}.piece_price1,.piece_price2,.piece_price3{border:2px solid;margin-left:0 auto auto 6%;display:inline-block;width:25%;}.table{text-align:center;margin-left:5%;margin-bottom:20%;width:90%;}.table h1{margin-bottom:1%;font-family:'Oswald',sans-serif;margin-left:30%;margin-right:30%;border-bottom:3px solid;font-size:30px;}.table h2{margin:auto;border-bottom:2px solid;}.table h3{margin:auto;border-bottom:2px solid;}.table button{color:#fff;background-color:#000;}}@media only screen and (min-width: 319px) and (max-width:760px){.Big-Next{margin-left:30%;background-color:rgba(0,0,0,0);color:#fff;cursor:pointer;position:absolute;top:100px;width:auto;font-weight:700;font-size:24px;}.Big-Prev{margin-left:-36.5%;background-color:rgba(0,0,0,0);color:#fff;cursor:pointer;position:absolute;top:100px;width:auto;font-weight:700;font-size:24px;}.News button{font-size:14px;}.stars-left-1{margin-right:2%;}.stars-right-1{margin-left:1.5%;}.stars-left-2{margin-right:2%;}.stars-right-2{margin-left:1.5%;}.News h2{margin-top:1%;margin-bottom:.5%;padding-left:12%;font-family:'Roboto Condensed',sans-serif;font-size:20px;}.view,.Smallslide{text-align:center;}.Smallslide img{margin-right:4px;margin-left:4px;width:18%;height:auto;}.trailer h3{font-size:15px;margin-left:2px;margin-bottom:1%;width:15%;font-family:'Roboto Condensed',sans-serif;font-size:20px;text-align:center;border-bottom:2px solid;}video{width:100%;height:90%;}.piece_price1,.piece_price2,.piece_price3{border:2px solid;margin-left:0 auto auto 6%;display:inline-block;width:25%;}.table{text-align:center;margin-left:5%;margin-bottom:40%;width:90%;}.table h1{margin-bottom:1%;margin-left:20%;margin-right:20%;font-family:'Oswald',sans-serif;border-bottom:3px solid;font-size:20px;}.table h2{margin:auto;border-bottom:2px solid;}.table h3{margin:auto;border-bottom:2px solid;font-size:12px;}.table button{color:#fff;background-color:#000;}}
        </style>
          <div id="Big-slide">
            <div class="mySlides" style="text-align: center;display:block">
              <img class="MovieImg" src="${this.homeData.Big.img1}" alt="dragon">
            </div>
            <div class="mySlides" style="text-align: center;">
              <img class="MovieImg" src="${this.homeData.Big.img2}" alt="Нийслэл">
            </div>
            <div class="mySlides" style="text-align: center;">
              <img class="MovieImg" src="${this.homeData.Big.img4}" alt="Нийслэл">
            </div>
            
            <div class="mySlides" style="text-align: center">
              <img class="MovieImg" src="${this.homeData.Big.img5}" alt="Буцаж">
            </div>
            <button class="Big-Prev"  onclick="plusSlides(-1)">${this.homeData.prev}</button>
            <button class="Big-Next"  onclick="plusSlides(1)">${this.homeData.next}</button>
          </div>
          <section class="News">
          
          <h2>${this.homeData.New}</h2>
          <div class="Smallslide" style="display: block;">
              <button class="stars-right-1" onclick="plusSlides1(-1)">${this.homeData.prev}</button>
              <button class="stars-left-1" onclick="plusSlides1(1)">${this.homeData.next}</button>
                <div class="Smallslide" style="display: block;">
                  <a href="LookTv-KinoMedeelel.html">
                  ${NewRendered}
                  </a>
                </div>
          </div>
          <div class="Smallslide" style="text-align: center; display: none;">
              <a href="LookTv-KinoMedeelel.html">
              ${NewRendered}
              </a>
            </div> 
          </section>
          <section class="News">
          <h2>${this.homeData.View}</h2>
          <button class="stars-right-2" >❮</button>
          <button class="stars-left-2">❯</button>
              <div class="Smallslide" style="display: block;">
                <a href="LookTv-KinoMedeelel.html">
                ${ViewRendered}
                </a>
              </div>
              <div class="Smallslide" style="text-align: center; display: none;">
                <a href="LookTv-KinoMedeelel.html">
                ${ViewRendered}
                </a>
              </div>
          </section>
          <section class="trailer">
            <h3>${this.homeData.Title}</h3>
            <video width="750" height="400" controls autoplay muted>
                ${TraileRender}
            </video>
          </section>
          <section class="table">
            <h1>${this.homeData.Tolbor}</h1>
            ${ this.RenderList(this.homeData.piece) }
          </section>
          `
      }
}
