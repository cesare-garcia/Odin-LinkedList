const linkedListFactory = () => {

    let headNode = nodeFactory();

    function nodeFactory(value, next) {
        if (value === undefined) value = null;
        if (next === undefined) next = null;
        
        return {value, next};
    };

    const append = (value) => {
        let traversedNode = headNode;
        while (traversedNode.next != null) {
            traversedNode = traversedNode.next;
        };
        traversedNode.next = nodeFactory(value);
    };

    const prepend = (value) => {
        headNode = nodeFactory(value, headNode);
    };

    const size = () => {
        let traversedNode = headNode;
        let totalNodes = 1;
        while (traversedNode.next != null) {
            traversedNode = traversedNode.next;
            totalNodes++;
        }
        return totalNodes;
    };

    const head = () => {
        return headNode;
    };

    const tail = () => {
        let traversedNode = headNode;
        while (traversedNode.next != null) {
            traversedNode = traversedNode.next;
        }
        return traversedNode;
    };

    const at = (index) => {
        let traversedNode = headNode;

        if (index == 0) {
            return traversedNode;
        } else {
            for (let i = 0; i < index; i++) {
                traversedNode = traversedNode.next;
            }
            if (traversedNode != null) {
                return traversedNode;
            } else {
                return "There is not a node at that index.";
            }
        }
    };

    const pop = () => {
        let currentNode = headNode;
        let previousNode;

        while (currentNode.next != null) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
    };

    const contains = (value) => {
        let traversedNode = headNode;
        while (traversedNode.next != null) {
            if (traversedNode.value === value) {
                return true;
            } else {
                traversedNode = traversedNode.next;
            }
        }
        if (traversedNode.value === value) {
            return true;
        } else {
            return false;
        }
    };

    const find = (value) => {
        let traversedNode = headNode;
        let index = 0;

        while (traversedNode.next != null) {
            if (traversedNode.value === value) {
                return index++;
            } else {
                traversedNode = traversedNode.next;
                index++;
            }
        }
        if (traversedNode.value === value) {
            return index;
        } else {
            return "The value you are searching for is not in this list.";
        }
    };

    const toString = () => {
        let traversedNode = headNode;
        let printedList = `(${traversedNode.value})`;
        while (traversedNode.next != null) {
            traversedNode = traversedNode.next;
            printedList += ` -> (${traversedNode.value})`;
        };
        printedList += " -> (null)";
        return printedList;
    };

    return {append, prepend, size, head, tail, at, pop, contains, find, toString};
};

let linkedList = linkedListFactory();