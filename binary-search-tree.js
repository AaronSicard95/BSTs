class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if(!this.root){
      this.root=new Node(val);
      return this;
    }
    let inserted = false;
    let check = this.root;
    while(inserted==false){
      if(val>=check.val){
        if(!check.right){
          check.right=new Node(val);
          inserted=true;
        }else{
          check = check.right;
        }
      }else{
        if(!check.left){
          check.left=new Node(val);
          inserted=true;
        }else{
          check = check.left;
        }
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, obj=this.root) {
    if(!obj){
      this.root=new Node(val);
      return this;
    }
    if(val>=obj.val){
      if(!obj.right){
        obj.right=new Node(val);
        return this;
      }else{
        return this.insertRecursively(val, obj.right);
      }
    }else{
      if(!obj.left){
        obj.left=new Node(val);
        return this;
      }else{
        return this.insertRecursively(val, obj.left);
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let end = false;
    let check = this.root;
    while(end==false){
      if(val==check.val)return check;
      if(val>=check.val){
        if(!check.right)return undefined;
        check = check.right;
      }else{
        if(!check.left)return undefined;
        check = check.left;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, obj=this.root) {
    if(obj.val==val)return obj;
    if(val>obj.val){
      if(!obj.right)return;
      return this.findRecursively(val, obj.right);
    }else if(!obj.left){
      return this.findRecursively(val, obj.left);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(obj=this.root) {
    if(!obj)return [];
    const me = obj.val;
    const right = !obj.right?[]:this.dfsPreOrder(obj.right);
    const left = !obj.left?[]:this.dfsPreOrder(obj.left);
    return [me , ...left, ...right];
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(obj=this.root) {
    if(!obj)return [];
    const me = obj.val;
    const right = !obj.right?[]:this.dfsInOrder(obj.right);
    const left = !obj.left?[]:this.dfsInOrder(obj.left);
    return [...left, me, ...right];
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(obj=this.root) {
    if(!obj)return [];
    const me = obj.val;
    const right = !obj.right?[]:this.dfsPostOrder(obj.right);
    const left = !obj.left?[]:this.dfsPostOrder(obj.left);
    return [...left, ...right, me];
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if(!this.root)return [];
    let check = [this.root];
    let end=false;
    let nodes=[check[0].val];
    while(end==false){
      let newCheck=[];
      for(let node of check){
        if(node.left){
          nodes.push(node.left.val);
          newCheck.push(node.left);
        }
        if(node.right){
          nodes.push(node.right.val);
          newCheck.push(node.right);
        }
      }
      if(newCheck.length==0){
        end=true;
      }
      check=newCheck;
    }
    return nodes;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
