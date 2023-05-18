import { EventEmitter } from './utils/EventEmitter.js'
import { isValidProp } from './utils/IsValidProp.js'
import { Gift } from "./models/Gift.js"

class ObservableAppState extends EventEmitter {
  page = ''
  user = null
  /** @type {import('./models/Account.js').Account | null} */
  // @ts-ignore
  account = null
  /** @type {import('./models/Value.js').Value[]} */
  values = []
  socketData = []

  /** @type {import('./models/Gift.js').Gift[] } */
  gifts = []

  // /** @type {import('./models/Gift.js').Gift[]} */
  // userGifts = []
  // Used to load initial data
  init() {

  }
}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})