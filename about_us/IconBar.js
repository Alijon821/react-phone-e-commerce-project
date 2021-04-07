import React, { Component } from 'react'
import { createFromIconfontCN, GooglePlusOutlined} from '@ant-design/icons';


const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

export default class IconBar extends Component {
    render() {
        return (
            <div>
                <div className="IconBar" style={{backgroundColor:this.props.color}}>
                    <p className="IconsBar"><IconFont type={this.props.Icon} /></p>
                    
                    <p className="PriceBar Bar">{this.props.price}</p>
                    <p className="TextBar Bar">{this.props.text}</p>

                </div>


            </div>
        )
    }
}
