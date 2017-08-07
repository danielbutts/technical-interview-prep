function addToList(head, value, position) {
  let node = head;
  if (position === 0) {
    node.value = value;
    node.next = head;
    return node;
  }
  let depth = 0;
  while (node.next !== undefined && depth < position) {
    if (depth === position) {
      node.next = {
        next: node.next,
        value
      }
    }
    node = node.next;
    depth ++;
  }
  return head;
}