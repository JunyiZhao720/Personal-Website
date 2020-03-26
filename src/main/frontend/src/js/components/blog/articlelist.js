import React from 'react';
import PropTypes from 'prop-types';
import ArticleItem from './articleitem';
import { SlidingWindowScrollHook } from "./SlidingWindowScrollHook";

export default class ArticleList extends React.Component {
  render() {
    const articlelist = [];
    const issues = this.props.issues;
    for (let i = 0; i < 25; i += 1) {
      const item = issues[i];
      console.log(item);
      articlelist.push(<ArticleItem key={item.id} number={item.number} title={item.title} labels={item.labels} time={item.created_at} desc={item.body} />);
    }
    return (
      <div className="archive-list">
        <SlidingWindowScrollHook issues={articlelist} height={210}/>
      </div>
    );
  }
}

ArticleList.defaultProps = {
  issues: null
};

ArticleList.propTypes = {
  issues: PropTypes.array
};