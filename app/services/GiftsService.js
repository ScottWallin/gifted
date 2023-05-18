import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";
import { Gift } from "../models/Gift.js";


class GiftsService {
  async getGiftFromSandbox() {
    const res = await api.get('/api/gifts')
    console.log(res.data)
    AppState.gifts = res.data.map(g => new Gift(g))
  }

  async toggleOpened(id) {
    // debugger
    const gift = AppState.gifts.find(g => g.id == id)
    gift.opened = !gift.opened
    const res = await api.put('api/gifts/' + id, gift)
  }

  async postGift(formData) {
    const res = await api.post('api/gifts', formData)
    const newGift = new Gift(res.data)
    AppState.gifts.push(newGift)
    AppState.emit('gifts')
    console.log('from the service')
  }
}

export const giftsService = new GiftsService