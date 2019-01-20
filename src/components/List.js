import React, { Component } from "react";
import { connect } from "react-redux";

import ListAdmin from "./ListAdmin";
import ListTop from "./ListTop";
import ListBottom from "./ListBottom";
import { list, listN, listAdmin, count } from "../redux/actions";

class List extends Component {
  state = {
    intervalIsSet: false
  };

  componentDidMount() {
    this.props.getList();
    // this.props.getListN();
    this.props.getListAdmin();
    this.props.getCount();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.props.getList, 1 * 1000);
      // setInterval(this.props.getListN, 2 * 1000);
      setInterval(this.props.getListAdmin, 15 * 1000);
      setInterval(this.props.getCount, 15 * 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  render() {
    return (
      <div>
        <ListAdmin listAdmin={this.props.listAdmin} />
        <ListTop list={this.props.list} />
        {listN.length < 20}
        <ListBottom listN={this.props.listN} userCount={this.props.userCount} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { data } = state;
  const { list, listN, listAdmin, userCount, clickCount } = data;

  return {
    list,
    listN,
    listAdmin,
    userCount,
    clickCount
  };
};

const mapDispatchToProps = dispatch => ({
  getList: postData => {
    dispatch(list(postData));
  },
  getListN: postData => {
    dispatch(listN(postData));
  },
  getListAdmin: postData => {
    dispatch(listAdmin(postData));
  },
  getCount: postData => {
    dispatch(count(postData));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
