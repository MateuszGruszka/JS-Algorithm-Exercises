function reverseList(head) {
    var prev = null;
    let curr = head
    while (curr) {
        var next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        console.log('iteration: ')
    }
    return prev;
}
