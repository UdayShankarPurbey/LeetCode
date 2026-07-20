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

function reverseList(head: ListNode | null): ListNode | null {
    const numberList = getListValue(head , [])
    addValueInList(head , numberList , (numberList.length - 1));
    return head;
};

function getListValue(head: ListNode | null , data) : number[] {
    if(head === null) return data;
    data.push(head.val);
    if(head.next === null) return data;
    return getListValue(head.next , data)
}

function addValueInList(head: ListNode | null , data : number[] , dataLength : number) {
    if(head === null) return null;
    head.val = data[dataLength];
    data.pop();
    if(head.next === null) return null;
    return addValueInList(head.next , data ,(dataLength - 1) )
}