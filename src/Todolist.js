import React, { Component } from 'react';
import 'antd/dist/antd.css' //全局引入antd的样式
import {Input, Button, List} from 'antd'
import store from './store/index'

const data=[

    '早上好',
    '中午晚上上好',
    '早上好',
]

// imrc  ccc
class Todolist extends Component {
    constructor(props){
        super(props)
        console.log(store.getState())
        this.state=store.getState()
        this.changeInputValue=this.changeInputValue.bind(this) //this指向
        this.storechange=this.storechange.bind(this)
        this.clickBtn=this.clickBtn.bind(this)
        store.subscribe(this.storechange)
    }

    render() {
        return ( 
            <div style={{ margin:'10px'}}>
                <div>
                    <Input placeholder={this.state.inputValue} 
                    style={{ width:'250px',marginRight:'10px'}}
                    onChange={this.changeInputValue}
                    />
                    <Button type="primary"
                    onClick={this.clickBtn}
                    > 添加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={item=>(<List.Item>{item}</List.Item>)}
                    />

                </div>
            </div>
        )
    }

    changeInputValue(e){
        // console.log(e.target.value);
        const action={
            type:'changeInput',
            value:e.target.value
        }
        store.dispatch(action)
    }
    storechange(){
        this.setState(store.getState())
    }
    clickBtn(){
        // console.log(11111);
        const action ={
            type:'additem',
        }
        store.dispatch(action)
    }
}

export default Todolist;