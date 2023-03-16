export class SandboxApod {
    constructor(data) {
        this.id = data.id
        this.date = data.date
        this.imgUrl = data.imgUrl
        this.user = data.user
    }

    get ListTemplate() {
        return `
         <div class="col-12 apod-text">
            <img class="img-fluid apod-img"
              src="${this.imgUrl}" onclick="app.nasaApodController.getApodByDate('${this.date}')" alt="" data-bs-dismiss="offcanvas">
            <div class="d-flex justify-content-between align-items-baseline p-1">
              <button class="btn apod-text btn-outline-light" onclick="app.sandboxApodController.delete('${this.id}')"><i class="mdi mdi-delete"></i></button>
              <p>${this.date}</p>
            </div>
          </div>`
    }
}