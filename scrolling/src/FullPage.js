import React from "react";
import ReactPageScroller from "react-page-scroller";

import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import FifthComponent from "./FifthComponent";
import "./index.css";

class FullPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentPage: 1};
        this._pageScroller = null;
    }

    pageOnChange = (number) => {
        console.log(number);
        this.setState({currentPage: number});
    };
    render() {

        return (
            <>
                <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
                    <FirstComponent/>
                    <SecondComponent/>
                    <ThirdComponent/>
                    <FourthComponent />
                    <FifthComponent/>
                </ReactPageScroller>
            </>
        );
    }
}

export default FullPage;