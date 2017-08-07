function searchTree(node, value) {
  if (node.value === value) {
    return node;
  }
  
  // base case
  if (node.children === undefined) {
    return undefined;
  }
  
  // recursive case
  node.children.forEach((child) => {
    let foundNode = searchTree(child, value)
    if (foundNode !== undefined) {
      return foundNode;
    }
  })
  
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