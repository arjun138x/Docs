// Generator Pagination hacker rank coding question

function createPaginator(items, pageSize) {
  console.log({ items, pageSize });
  return (function* generator() {
    for (let i = 0; i < items.length; i += pageSize) {
      yield items.slice(i, Math.min(i + pageSize, items.length));
    }
  })();
}
