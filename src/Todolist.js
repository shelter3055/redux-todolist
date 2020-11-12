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
    }

    render() {
        return ( 
            <div style={{ margin:'10px'}}>
                <div>
                    <Input placeholder={this.state.inputValue} 
                    style={{ width:'250px',marginRight:'10px'}}/>
                    <Button type="primary"> 添加</Button>
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
}

export default Todolist;