import React, { Component } from 'react';

export default class Albums extends Component
{
    constructor(props)
    {
        super(props);
    }
    menubtn = () =>
    {
        // const activeMenu = this.state.activeMenu;
        const {screen,updateScreen} = this.props;
        if(screen===9)
        {
            updateScreen(3);
        }

    }
    componentDidMount()
    {
        var menubtn = document.getElementById('menu');
        menubtn.onclick = this.menubtn;
    }
    render()
    {
        return(
            <div id="album-screen" style={{border:'2px solid black',margin:10,marginTop:'-10px',height:197,backgroundColor:'whitesmoke'}}>
                <h1 style={{textAlign:"center",marginTop:'28%'}}>Albums</h1>
            </div>
        )
    }
}