const LinkedList = () => {
  let currentHead = null;

  const append = (value = null) => {
    if (currentHead == null) {
      currentHead = nodeFactory(value);
    } else {
      let temp = currentHead;
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = nodeFactory(value);
    }
  };

  const prepend = (value = null) => {
    if (currentHead == null) {
      currentHead = nodeFactory(value);
    }
    const previousHead = currentHead;
    currentHead = nodeFactory(value, previousHead);
  };

  const size = () => {
    let nodeCount = 0;
    let temp = currentHead;
    if (currentHead == null) return "There are no node/s in the list";

    while (temp.next != null) {
      nodeCount++;
      temp = temp.next;
    }
    return `There are ${nodeCount + 1} node/s in the list`;
  };

  const head = () => {
    return currentHead;
  };

  const tail = () => {
    let temp = currentHead;
    while (temp.next != null) {
      temp = temp.next;
    }
    return temp;
  };

  const at = (index) => {
    let currentNode = currentHead;
    let currentIndex = 0;
    if (isNaN(index) || index < 0) {
      return "Please input a valid index";
    }
    if (currentHead == null) return "No linked list created!";
    if (currentHead.next == null) return currentNode;
    while (currentIndex < index) {
      currentIndex++;
      if (currentNode.next == null) {
        return `Given index(${index}) exceeds the number of nodes(${currentIndex}) on the list `;
      }
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  const pop = () => {
    let temp = currentHead;
    let previousNode;
    if (currentHead == null) return console.log("no nodes in list");
    if (currentHead.next == null) {
      currentHead = null;
      return console.log("Last node popped! List is now empty");
    }
    while (temp.next != null) {
      previousNode = temp;
      temp = temp.next;
    }
    previousNode.next = null;
  };

  const contains = (value) => {
    let temp = currentHead;
    while (temp != null) {
      if (temp.data == value) return true;
      temp = temp.next;
    }
    return false;
  };

  const find = (value) => {
    let currentIndex = 0;
    let temp = currentHead;
    while (temp != null) {
      if (temp.data == value) return currentIndex;
      temp = temp.next;
      currentIndex++;
    }

    return null;
  };

  const toString = () => {
    let temp = currentHead;
    let stringList = "";

    if (currentHead == null) return "no nodes in list";
    while (temp != null) {
      stringList += `(${temp.data}) -> `;
      temp = temp.next;
    }
    return (stringList += "null");
  };

  const insertAt = (value = "", index) => {
    let currentIndex = 0;
    let previousNode;
    let currentNode = currentHead;
    if (index == 0) return prepend(value);
    while (currentNode != null) {
      if (index == currentIndex) {
        const nodeToInsert = nodeFactory(value);
        previousNode.next = nodeToInsert;
        nodeToInsert.next = currentNode;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }
  };

  const removeAt = (index) => {
    let currentIndex = 0;
    let previousNode;
    let currentNode = currentHead;
    if (currentHead == null)
      return console.log("Cannot delete no node in list");
    if (index == 0) return (currentHead = currentHead.next);
    while (currentNode != null) {
      if (index == currentIndex) {
        previousNode.next = currentNode.next;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }
    return console.log("Cannot delete, given index exceeds nodes");
  };

  return {
    append,
    toString,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    insertAt,
    removeAt,
  };
};

const nodeFactory = (value, next = null) => {
  return { data: value, next: next };
};

// const testList = LinkedList();
// testList.append("123");
// testList.append("test2");
// testList.append("test3");

// console.log(testList.toString());
// testList.removeAt(38);
// testList.insertAt("test69", 2);
// console.log(testList.toString());
// console.log(testList.find('4'))
// console.log(testList.toString());
// console.log(testList.pop());
// console.log(testList.at(15));
// console.log(testList.tail());

// console.log(nodeFactory('test'))
