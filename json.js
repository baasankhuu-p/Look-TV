import html from "./modules/components/utils.js"
class RecentNewsItem { 

    //constructor
    constructor(Sale) {
        this.Sale= [];
        this.title = Sale.title;
        this.procent = Sale.procent;
        this.DueDate = Sale.DueDate;
        this.imgs = Sale.imgs;
        this.id = Sale.id
    }
    //build and return html
    MRender(A){
        return html`
        <div>
            <h4 id="titles">${A.title}</h4>
            <a href="#">
                <img src="${A.img}" alt="${A.title}" title="${A.title}">
            </a>
        </div>
        `
    }
    Render() {
        let C = "";
        let D = this.imgs;
        for(let E of D){
            C+=this.MRender(E);
        }
        return html`
        <section class="section${this.id}">
            <h1>${this.title}</h1>
            <h2 class="sale${this.id}" style="text-align:left;">${this.procent}</h2>
            <h3 class="date">${this.DueDate}</h3>
            ${C}
            <button class="prev1">❮</button>
            <button class="next1">❯</button>
        </section>
        `
    }
}

    //download then filter() then map() then reduce() 
export default class RecentNews {

    constructor(recentNewsUrl) {
        this._recentNewsList = [];
        this._recentNewsUrl = recentNewsUrl;
        this._lastUpdated = Date.now();
        this._hasChanged = false;
    }
    //
    Upload() { 
        if (this._hasChanged) { 
            fetch(this._recentNewsUrl,
                {
                    method: 'PUT',
                    headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'versioning' : false
                },
                body: JSON.stringify(this._recentNewsList)
            })
                .then(response => { console.log(response.status); })
                .catch(err => { console.log(err) });

            this._hasChanged = false;
        }
    }

    //download then filter() then map() then reduce() 
    Download(targetElement) {
        fetch(`${this._recentNewsUrl}/latest`)
        .then( result => {
            result.json()
                .then(jsob => {

                    //filter only new NewsItem     
                    const filteredArray = jsob.filter( newsItem =>Date.parse(newsItem.DueDate) > Date.parse(this._recentNewsList.length > 0 ? this._recentNewsList[this._recentNewsList.length-1].DueDate : "2021-01-01"))
                    console.log(filteredArray);
                    //updating own javascript
                    if (filteredArray.length > 0) { 
                        // filteredArray.forEach(newNewsItem => { this._recentNewsList.push((new RecentNewsItem(newNewsItem))) });

                        gebi(targetElement).insertAdjacentHTML("afterbegin",

                            filteredArray
                                .map(newNews => {
                                    const _newNews = new RecentNewsItem(newNews);
                                    this._recentNewsList.push(_newNews);
                                    return _newNews.Render();
                                })
                                .reduce((prevVal, curVal) => prevVal + curVal, "")
                        );

                    }
                    })    
            })
        .catch(err => { console.log(err) });

    }
}

//shortcut to getElementById
const gebi = id => document.getElementById(id);

//Create RecentNews object, with url
const recentNews = new RecentNews("https://api.jsonbin.io/b/6082a9a59a9aa9333355d066");


//Load content from RecentNewsURL
recentNews.Download("main");

//Download news in every 60 seconds into #main
setInterval(() => recentNews.Download("main"), 60000);

//Upload updated news in every 15 seconds back to server
setInterval( () => recentNews.Upload(), 15000);
