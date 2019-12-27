import React from 'react';
import {Route,NavLink,Switch,Redirect} from 'react-router-dom'
import { Carousel,Icon } from 'antd';

import axios from 'axios'
class App extends React.Component {
 
  state={
     arr:[]
  }

  render(){

    return(
      <div className="home">
          <div className="top">
            <div className="t1">北京</div>
            <div className="t2">
                <input type="text" placeholder="请输入商家名"/>
            </div>
            <div className="t3"><Icon type="user" /></div>
          </div>

          <div className="cen">
            <div className="centop">
                <div className="ct1">
                    <div className="logo">美团</div>
                </div>
                <div className="ct2">
                    <p>省吃俭用 购物超划算</p>
                    <p>吃喝玩乐 尽在美团</p>
                </div>
                <div className="ct3">
                    <div className="but">去APP</div>
                </div>
            </div>

            <div className="dls">
                <dl>
                    <NavLink to="/xiang">
                    <dt><img src="./dl1.jpg" /></dt>
                    <dd>美食</dd>
                    </NavLink>
                </dl>
                <dl>
                    <dt><img src="./dl2.jpg" /></dt>
                    <dd>猫眼电影</dd>
                </dl>
                <dl>
                    <dt><img src="./dl3.jpg" /></dt>
                    <dd>酒店</dd>
                </dl>
                <dl>
                    <dt><img src="./dl4.jpg" /></dt>
                    <dd>娱乐休闲</dd>
                </dl>
                <dl>
                    <dt><img src="./dl5.jpg" /></dt>
                    <dd>外卖</dd>
                </dl>
                <dl>
                    <dt><img src="./dl6.jpg" /></dt>
                    <dd>KTV</dd>
                </dl>
                <dl>
                    <dt><img src="./dl7.jpg" /></dt>
                    <dd>周边游</dd>
                </dl>
                <dl>
                    <dt><img src="./dl8.jpg" /></dt>
                    <dd>丽人</dd>
                </dl>
                <dl>
                    <dt><img src="./dl9.jpg" /></dt>
                    <dd>小吃快餐</dd>
                </dl>
                <dl>
                    <dt><img src="./dl10.jpg" /></dt>
                    <dd>生活服务</dd>
                </dl>
            </div>

            <div className="boxs">
                <div className="boxname">猜你喜欢</div>
                {
                    this.state.arr.map((nr,id)=>{
                        return <dl key={id}>
                                    <dt><img src={nr.img} /></dt>
                                    <dd>
                                        <div className="p1">{nr.name}</div>
                                        <div className="p2">[{nr.di}] {nr.zhu}</div>
                                        <div className="p3"><span className="money"><span className="m">{nr.money}</span>元</span> <span>门市价:{nr.jia}</span>  <span className="sho">已售:{nr.sho}</span></div>
                                    </dd>
                                </dl>
                    })
                }
            </div>

          </div>
      </div>
    )
    
  }
  componentDidMount(){

    axios.get('./data.json').then((nr)=>{
        this.state.arr=nr.data.data;
        this.setState({})
    })
  }

  

}

export default App;

