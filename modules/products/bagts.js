import Component from "../components/component.js";

export default class Bagst extends Component{
    constructor(objData){
        super();
        this.bagtsData = objData;
    }
    renderIMG(IMGS){
      return this.html``
    }
    Render(){
      const imgs1 = this.bagtsData.bagts[0].imgs;
      const imgs2 = this.bagtsData.bagts[1].imgs;
      const imgs3 = this.bagtsData.bagts[2].imgs;
      const imgs4 = this.bagtsData.bagts[3].imgs;
      const imgs5 = this.bagtsData.bagts[4].imgs;
      let A = "",B="",C="",D="",E="";
      for(let a of imgs1){
        A+=this.renderIMG(a)
      }
      for(let b of imgs2){
        B+=this.renderIMG(b)
      }
      for(let c of imgs3){
        C+=this.renderIMG(c)
      }
      for(let d of imgs4){
        D+=this.renderIMG(d)
      }
      for(let e of imgs5){
        E+=this.renderIMG(e)
      }
      return this.html `
      <style>
      @import "https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap";main button{border:rgba(0,0,0,0);background-color:rgba(0,0,0,0);color:#fff;cursor:pointer;}@media only screen and (min-width: 1178px){main{margin:7% 8% 15%;text-align:center;font-family:'Open Sans Condensed',sans-serif;font-size:20px;}H1{margin-left:7%;border-bottom:solid;}.HIT-Movie h1{width:10%;}.Anime-Movie h1{width:8%;}.HBO-Movie h1{width:18%;}.Huuhed h1{width:18%;}.Russian h1{width:18%;}section img{width:20%;margin-right:1%;margin-left:1%;}section button{font-size:30px;font-weight:700;}.Next1{display:inline-block;float:right;margin-top:10%;}.Prev1{display:inline-block;float:left;margin-top:10%;}.Next2{display:inline-block;float:right;margin-top:10%;}.Prev2{display:inline-block;float:left;margin-top:10%;}.Next3{display:inline-block;float:right;margin-top:10%;}.Prev3{display:inline-block;float:left;margin-top:10%;}.Next4{display:inline-block;float:right;margin-top:10%;}.Prev4{display:inline-block;float:left;margin-top:10%;}.Next5{display:inline-block;float:right;margin-top:10%;}.Prev5{display:inline-block;float:left;margin-top:10%;}}@media only screen and (min-width: 766px) and (max-width: 1178px){main{margin:7% 8% 15% 12%;text-align:center;font-family:'Open Sans Condensed',sans-serif;font-size:20px;}H1{margin-left:10%;border-bottom:solid;}.HIT-Movie h1{width:14%;}.Anime-Movie h1{width:10%;}.HBO-Movie h1{width:28%;}.Huuhed h1{width:25%;}.Russian h1{width:30%;}section img{width:18%;margin-right:1%;margin-left:1%;}section button{font-size:25px;font-weight:700;}.Next1{display:inline-block;float:right;margin-top:10%;}.Prev1{display:inline-block;float:left;margin-top:10%;}.Next2{display:inline-block;float:right;margin-top:10%;}.Prev2{display:inline-block;float:left;margin-top:10%;}.Next3{display:inline-block;float:right;margin-top:10%;}.Prev3{display:inline-block;float:left;margin-top:10%;}.Next4{display:inline-block;float:right;margin-top:10%;}.Prev4{display:inline-block;float:left;margin-top:10%;}.Next5{display:inline-block;float:right;margin-top:10%;}.Prev5{display:inline-block;float:left;margin-top:10%;}}@media only screen and (min-width:300px) and (max-width:760px){.Prev1,.Next1,.Prev2,.Next2,.Prev3,.Next3,.Prev4,.Next4,.Prev5,.Next5{display:none;}main{text-align:center;font-family:'Open Sans Condensed',sans-serif;font-size:15px;margin:20% 2% 40%;}main img{width:60%;}h1{border-bottom:solid;width:60%;margin-left:auto;margin-right:auto;margin-bottom:.1%;text-align:left;}}
      </style>
      <section class="HIT-Movie">
        <h1>${this.bagtsData.bagts[0].title}</h1>
        <a href="LookTv-KinoMedeelel.html">
        <my-movie id="${this.bagtsData.bagts[0].imgs[0].id}">
        ${A}
        </my-movie>
        </a>
        <button class="Prev1">❮</button>
        <button class="Next1">❯</button>
      </section>
      <section class="Anime-Movie">
        <h1>${this.bagtsData.bagts[1].title}</h1>
        <a href="LookTv-KinoMedeelel.html">
        <my-movie id="${this.bagtsData.bagts[1].imgs[0].id}">
          ${B}
        </my-movie>
        </a>
        <button class="Prev2">❮</button>
        <button class="Next2">❯</button>
      </section>
      <section class="HBO-Movie">
        <h1>${this.bagtsData.bagts[2].title}</h1>
        <a href="LookTv-KinoMedeelel.html">
        <my-movie id="${this.bagtsData.bagts[2].imgs[0].id}">
          ${C}
        </my-movie>
        </a>
        <button class="Prev3">❮</button>
        <button class="Next3">❯</button>
      </section>
      <section class="Huuhed">
        <h1>${this.bagtsData.bagts[3].title}</h1>
        <a href="LookTv-KinoMedeelel.html">
        <my-movie id="${this.bagtsData.bagts[3].imgs[0].id}">
          ${D}
          <my-movie>
        </a>
        <button class="Prev4">❮</button>
        <button class="Next4">❯</button>
      </section>
      <section class="Russian">
        <h1>${this.bagtsData.bagts[4].title}</h1>
        <a href="LookTv-KinoMedeelel.html">
        <my-movie id="${this.bagtsData.bagts[4].imgs[0].id}">
          ${E}
          </my-movie>
        </a>
        <button class="Prev5">❮</button>
        <button class="Next5">❯</button>
      </section>
      `
    }
}