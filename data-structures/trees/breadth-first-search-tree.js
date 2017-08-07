function searchTree(head, value) {
  const queue = [head]
  if (head.value === value) {
    return head;
  }

  while (queue.length > 0) {
    let node = queue.shift();
    if (node.value === value) {
      return node;
    }

    if (node.children !== undefined) {
      node.children.forEach((child) => {
        queue.push(child);
      });
    }
  }
  return undefined;
}


let tree = {
  value: 5,
  children: [
    {
      value: 2,
      children: [
        {
          value: 8,
          children: [
            {
              value: 9
            }
          ]
        },
        {
          value: 7
        }
      ]
    },
    {
      value: 4,
      children: [
        {
          value: 1
        }
      ]
    },
    {
      value: 6
    }
  ]
}

console.log(searchTree(tree, 10));
