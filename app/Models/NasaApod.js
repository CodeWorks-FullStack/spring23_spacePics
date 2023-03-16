
export class NasaApod {
    constructor(data) {
        this.title = data.title
        this.copyright = data.copyright || 'NASA'
        this.description = data.explanation
        this.date = data.date
        this.imgUrl = data.hdurl ? data.hdurl : data.url
    }

    get DetailsTemplate() {
        return `
       <div class="col-6 apod-text">
        <div class="text-end apod-title">
          <h1 >${this.title}</h1>
          <h2>${this.date}</h2>
        </div>
        <p class="apod-desc p-3">${this.description}
        </p>
      </div>`
    }

}