import React, { Component } from 'react';
import Content from './components/Content';
import LayoutDefault from '../../components/LayoutDefault';
import { connect } from 'react-redux';

class Home extends Component {

    render() {
        return (
            <LayoutDefault>
                <Content />
            </LayoutDefault>
        );
    }
}

const mapStateToProps = (state) => ({
    state: state
})

export default connect(mapStateToProps,null)(Home);