function searchList(node, value, position) {
  if (node.data === value) {
    return position;
  }
  if (node.next !== undefined) {
    return searchList(node.next, value, position + 1);
  }
  return -1;
}

