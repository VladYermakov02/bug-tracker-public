// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';
// extraFileExtensions: ['_'],s

// eslint-disable-next-line import/prefer-default-export
export const ReturnPaginationRange = (
  totalPage: number,
  page: number,
  limit: number,
  siblings: number
) => {
  const totalPageNoInArray = 7 + siblings;
  if (totalPageNoInArray >= totalPage) {
    return _.range(1, totalPage + 1);
  }
  const leftSiblingsIndex = Math.max(page - siblings, 1);
  const rightSiblingsIndex = Math.min(page + siblings, totalPage);

  const showLeftDots = leftSiblingsIndex > 2;
  const showRightDots = rightSiblingsIndex < totalPage - 2;

  if (!showLeftDots && showRightDots) {
    const leftItemsCount = 3 + 2 * siblings;
    const leftRange = _.range(1, leftItemsCount + 1);
    return [...leftRange, ' ...', totalPage];
  }
  if (showLeftDots && !showRightDots) {
    const rightItemsCount = 3 + 2 * siblings;
    const rightRange = _.range(totalPage - rightItemsCount + 1, totalPage + 1);
    return [1, '... ', ...rightRange];
  }
  const middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex + 1);
  return [1, '... ', ...middleRange, ' ...', totalPage];
};
