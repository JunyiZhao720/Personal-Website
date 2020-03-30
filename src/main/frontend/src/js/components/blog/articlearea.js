import React from 'react';
import PropTypes from 'prop-types';
import ArticleList from './articlelist';
import '../../../css/blog/articlearea.css';

const ArticleBanner = () => (
  <div className="blog-article-banner">
    <h1>welcome to my blog ~</h1>
  </div>
);

export default class ArticleArea extends React.Component {
  
  render() {
    if (this.props.issues.length === 0) {
      return null;
    }
    return (
      <div className="archive-list-area">
        <ArticleBanner />
        <ArticleList issues={this.props.issues}  />
      </div>
    );
  }
}

ArticleArea.defaultProps = {
  issues: null,
};

ArticleArea.propTypes = {
  issues: PropTypes.array,
};