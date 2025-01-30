function maxDepth(root: TreeNode | null): number {
  return !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
