const defaultState = {
    inputValue : 'hello world',
    list: [
        '早上好早上好早上好',
        '中午晚上上好早上好早上好',
        '早上好早上好早上好早上好'
    ]
}

export default (state=defaultState, action) => {

    if(action.type==='changeInput'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }

    if(action.type==='additem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        // newState.inputValue = ''
        newState.inputValue = ''
        return newState
    }
    return state 
}