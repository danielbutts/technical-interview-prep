function searchList(node, value) {
  if (node.data === value) {
    return 0;
  }
  let position = 0;
  while (node.next !== undefined) {
    position ++;
    if (node.next === value) {
      return position;
    }
    node = node.next;
  }
  return -1;
}

