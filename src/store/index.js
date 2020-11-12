import {createStore} from 'redux'

import reducer from './reducer'

const store =createStore(
    reducer,
    // 激活 redux DevToos插件
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
export default store