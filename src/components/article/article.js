import { Link } from 'react-router-dom'
import React from 'react';
const articles = [1, 2, 3, 4, 5, 6]
export default function Article () {
  return (
    <div className="col-md-4 article-list">
      <div className="articles">
        <ul>
          {
            articles.map((number, index) => <li key={number}>
              <Link to="/detail">文章{number}</Link>
            </li>)
          }
        </ul>
      </div>
    </div>
  )
}
export {
  Article
}