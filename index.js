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
        traversedNode.next = nodeFactory();
        traversedNode.next.value = value;
    };

    const prepend = (value) => {
        // fix
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
        console.log("pop");
    };

    const contains = (value) => {
        console.log("value");
    };

    const find = (value) => {
        console.log("find");
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