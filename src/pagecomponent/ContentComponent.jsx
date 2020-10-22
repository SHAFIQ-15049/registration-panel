import React, { Component } from 'react';
import MainContentComponent from './MainContentComponent';
import SideContentComponent from './SideContentComponent';
import './Content.css';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

class ContentComponent extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <div className="split left">
                    <SideContentComponent/>
                
                </div>
                <div className="split right">
                <MainContentComponent/>
                </div>

                <FooterComponent/>

            </div>
        );
    }
}

export default ContentComponent;