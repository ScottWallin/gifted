import { AppState } from "../AppState.js"
import { giftsService } from "../services/GiftsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"
import { getFormData } from "../utils/FormHandler.js"

function _drawGifts() {
  let template = ''
  AppState.gifts.forEach(g => { template += g.GiftsTemplate })
  setHTML('gifts', template)
}


export class GiftsController {

  constructor() {
    this.getGiftFromSandbox()
    AppState.on('gifts', _drawGifts)
    // AppState.on('giftForm', postGift)
  }
  async getGiftFromSandbox() {
    try {
      await giftsService.getGiftFromSandbox()
    } catch (error) {
      Pop.error(('[ERROR'), error.message)

    }
    // console.log('controller works')
  }

  async toggleOpened(id) {
    try {
      await giftsService.toggleOpened(id)
      console.log('toggle')
    } catch (error) {
      Pop.error('error on toggle')

    }
  }

  async postGift() {
    try {
      window.event?.preventDefault()
      const form = window.event?.target
      const formData = getFormData(form)
      console.log('form data', formData)
      await giftsService.postGift(formData)
      form.reset()
    } catch (error) {
      Pop.error(error)
    }
  }
}