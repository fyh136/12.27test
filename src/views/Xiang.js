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
      <div className="xiang">
        <div className="top" ref="topbox">
            <div className="t1" ref="le"><Icon type="left" onClick={()=>this.fan()} /></div>
            <div className="t2"><input type="text" placeholder="请输入商品名" ref="inp" /></div>
            <div className="t3" ref="ri"><Icon type="user" /></div>
        </div>
        <div className="cen"  onScroll={()=>this.hua()} ref="box" >
            <div className="centop"></div>
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
            </div>

            <div className="boxs">
                <div className="boxtop">
                    <ul>
                        <li>全部分类</li>
                        <li>附近商家</li>
                        <li>智能排序</li>
                        <li>筛选</li>
                    </ul>
                </div>
                {
                    this.state.arr.map((nr,id)=>{
                        return <dl key={id}>
                                    <dt><img src={nr.img} /></dt>
                                    <dd>
                                        <div className="p1">{nr.name}</div>
                                        <div className="p2"><span className="m">{nr.money}元/人</span> <span className="ju">{nr.dizhi} {nr.mi}m</span></div>
                                        <div className="p3">{nr.zhu}</div>
                                        <div className="p4 "> <span className="zhichi">{nr.zhi}</span> </div>
                                    </dd>
                                </dl>
                    })
                }
            </div>

        </div>
      </div>
    )
    
  }

  fan(){
      this.props.history.push('/home')
  }
  hua(){
      var zhi=this.refs.box.scrollTop
      if(zhi>=50){
        this.refs.topbox.style.background='white';
        this.refs.inp.style.background='#ccc';
        this.refs.le.style.color='black';
        this.refs.ri.style.color='black';
       
        
      }else{
        this.refs.topbox.style.background='none'
        this.refs.inp.style.background='white';
        this.refs.le.style.color='white';
        this.refs.ri.style.color='white';
       


      }
  }
  componentDidMount(){

    axios.get('./data.json').then((nr)=>{
        this.state.arr=nr.data.data;
        this.setState({})
    })
  }

}

export default App;

