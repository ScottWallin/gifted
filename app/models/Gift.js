export class Gift {
  constructor(data) {
    this.id = data.id || ''
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened || false
    this.creatorId = data.creatorId
  }


  get openedGift() {
    return this.opened ? 'checked' : ''
  }
  get GiftsTemplate() {
    return `
    <div class="col-4">
      <div class="card text-start">
        <p>${this.tag}</p>
        <img class="card-img-top" src="${this.url}" alt="Title">
          <div class="card-body">
            <input type="checkbox" onchange="app.GiftsController.toggleOpened('${this.id}')" ${this.openedGift}>
          </div>
      </div>
    </div>`
  }



}