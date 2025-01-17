import { initMixin } from "./init";
import { renderMixin } from "./render"
import { lifecycleMixin } from "./lifecycle"

function Vue (options) {
    this._init(options)
}
initMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)
export default Vue
