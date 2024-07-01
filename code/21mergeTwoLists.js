/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  // 创建一个虚拟头节点，方便操作
  const dummy = new ListNode(0);
  let curr = dummy;
  // 当两个链表都不为空时，进行比较和链接操作
  while (list1 && list2) {
    // 取出两个链表中较小的节点，并链接到当前节点后面
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    // 每次遍历结束后更新当前节点
    curr = curr.next;
  }
  // 可能存在一个链表已经遍历完，将剩余的链表链接到当前节点后面
  curr.next = list1 ? list1 : list2;
  // 返回虚拟头节点的下一个节点，即合并后的链表的头节点
  return dummy.next;
};
