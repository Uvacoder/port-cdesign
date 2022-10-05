import React from 'react';
import { Popover } from '@douyinfe/semi-ui';
import iconQrcode from '../public/navbar/qrcode.svg'
import qrcode from '../public/navbar/qrcode@2x.png'
import Image from 'next/image';

class Qrcode extends React.Component {
    constructor(props = {}) {
        super(props);

        this.state = {
            visible: false,
        };

        this.content = (
            <Image className="mx-4"  src={qrcode} alt='picture of wechat qrcode' width={240} height={240}/>
        );

        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow() {
        this.setState({
            visible: !this.state.visible,
        });
    }

    render() {
        const content = this.content;

        const { visible } = this.state;

        return (
            <div>
                <div>
                    <Popover visible={visible} content={content} 
                    trigger="custom"
                    position='bottomRight'
                    onClickOutSide =  {this.toggleShow}
                    >
                        <button  onClick={this.toggleShow}>
                        <Image className=" hover:opacity-80 active:opacity-95"  src={iconQrcode} alt='icon qrcode' width={36} height={36}/>
                        </button>
                    </Popover>
                </div>
            </div>
        );
    }
}


export default Qrcode