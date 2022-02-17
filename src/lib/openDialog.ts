import Dialog from './Dialog.vue'
import {createApp, h} from 'vue'

export const openDialog = (options) => {
  const {title, content, ok} = options
  const div = document.createElement('div')
  document.body.append(div)
  const close = () => {
    app.unmount()
    div.remove()
  }
  const app = createApp({
    render() {
      return h(
        Dialog,
        {visible: true, 'onUpdate:visible': () => { close() }, ok},
        {header: title, default:content}
      )
    }
  })
  app.mount(div)
}