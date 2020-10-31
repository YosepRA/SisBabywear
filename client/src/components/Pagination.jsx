import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToggleLink } from './ToggleLink';
import { Pagination as RSPagination, PaginationItem } from 'reactstrap';

// INPUT: currentPage, pageCount, pageSize.
// OUTPUT:
// < 1 [2] 3 >
// < 1 2 3 [4] 5 ... 100 >
// < 1 ... 3 4 [5] 6 7 ... 100 >
// < 1 ... 10 11 [12] 13 14 ... 100 >
// < 1 ... 94 95 [96] 97 98 ... 100 >
// < 1 ... 96 [97] 98 99 100 >

const currentPage = 10;
const pageCount = 100;

export class Pagination extends Component {
  // Get an array of numbers.
  getPageNumbers() {
    // const currentPage = Number(this.props.match.params.page);
    // const { pageCount } = this.props;

    if (pageCount < 5) {
      return [...Array(pageCount + 1).keys()].slice(1); // [1, 2, 3, 4]
    } else if (currentPage < 5) {
      return [1, 2, 3, 4, 5];
    } else if (currentPage >= pageCount - 3) {
      return [...Array(5).keys()].reverse().map(num => pageCount - num);
    } else {
      return [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
      ];
    }
  }

  getLinkClasses() {
    return 'page-link pagination__link';
  }

  getNavigationLink(pageNum) {
    // Make this dynamic based on React router props.
    return `${this.props.baseUrl}/${pageNum}`;
  }

  render() {
    // This props will come from store.
    // const currentPage = Number(this.props.match.params.page);
    // const { pageCount } = this.props;

    return (
      <RSPagination className={this.props.className || ''}>
        {/* First page */}
        <PaginationItem disabled={currentPage <= 1}>
          <Link
            to={this.getNavigationLink(1)}
            className={this.getLinkClasses()}
          >
            &laquo;
          </Link>
        </PaginationItem>
        {/* {currentPage > 4 && pageCount > 5 && <Fragment></Fragment>} */}

        {/* Previous */}
        <PaginationItem disabled={currentPage <= 1}>
          <Link
            to={this.getNavigationLink(currentPage - 1)}
            className={this.getLinkClasses()}
          >
            &lt;
          </Link>
        </PaginationItem>
        {/* {currentPage > 1 && (
          
        )} */}

        {/* In-between pages. */}
        {this.getPageNumbers().map(num => {
          return (
            <PaginationItem key={num}>
              <ToggleLink
                to={this.getNavigationLink(num)}
                className={this.getLinkClasses()}
              >
                {num}
              </ToggleLink>
            </PaginationItem>
          );
        })}

        {/* Next */}
        <PaginationItem disabled={currentPage >= pageCount}>
          <Link
            to={this.getNavigationLink(currentPage + 1)}
            className={this.getLinkClasses()}
          >
            &gt;
          </Link>
        </PaginationItem>
        {/* {currentPage < pageCount && (
          
        )} */}

        {/* Last page */}
        <PaginationItem disabled={currentPage >= pageCount}>
          <Link
            to={this.getNavigationLink(pageCount)}
            className={this.getLinkClasses()}
          >
            &raquo;
          </Link>
        </PaginationItem>
        {/* {currentPage < pageCount - 3 && <Fragment></Fragment>} */}
      </RSPagination>
    );
  }
}
