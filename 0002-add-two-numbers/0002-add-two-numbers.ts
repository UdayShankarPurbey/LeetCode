/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return sumOfNodes(l1 , l2 , 0 );
    
};

function sumOfNodes(l1: ListNode | null, l2: ListNode | null , carry : number ) :  ListNode | null {
    if(l1 === null && l2 === null && carry === 0) return null;
    
    const node = new ListNode();

    const l1Val = l1 ? l1.val : 0;
    const l2Val = l2 ? l2.val : 0;

    const next1 = l1 ? l1.next : null;
    const next2 = l2 ? l2.next : null;

    const val = l1Val + l2Val + carry;

    node.val = val % 10;
    carry = Math.floor(val / 10);

    node.next = sumOfNodes(next1 , next2, carry)
    return node;
}