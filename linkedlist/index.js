// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(data) {
        const node = new Node(data, this.head)
        this.head = node;
    }
    insertLast(data) {
        const last = this.getLast();

        if (last) {
            // There are some existing nodes in our chain
            last.next = new Node(data);
        } else {
            // The chain is empty!
            this.head = new Node(data);
        }

    }
    size() {
        let i = 0;
        let cur = this.head;
        while (cur) {
            i++;
            cur = cur.next;
        }
        return i;
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        if (!this.head) {
            return null;
        }
        let cur = this.head;
        while (cur.next) {
            cur = cur.next;
        }
        return cur;
    }
    clear() {
        this.head = null;
    }
    removeFirst() {
        if (!this.head) return null;
        this.head = this.head.next;
    }
    removeLast() {
        let cur = this.head;
        if (!this.head) return null;
        if (!this.head.next) {
            this.head = null;
            return null
        }
        while (cur.next.next) {
            cur = cur.next;
        }
        cur.next = null;
        return cur.next;
    }
    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }
        return null;
    }
    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }
    forEach(fn) {
        let node = this.head;
        while (node) {
            fn(node);
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
