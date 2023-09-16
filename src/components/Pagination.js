import React from "react";

export default function Pagination() {
  
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        <li className="page-item">
          <a className="page-link" href="/previous">
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/page1">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/page2">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/page3">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/next">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
