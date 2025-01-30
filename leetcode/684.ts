// In this problem, a tree is an undirected graph that is connected and has no cycles.
// You are given a graph that started as a tree with n nodes labeled from 1 to n, with
// one additional edge added. The added edge has two different vertices chosen from 1 to n,
// and was not an edge that already existed. The graph is represented as an array edges of
// length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.
// Return an edge that can be removed so that the resulting graph is a tree of n nodes.
// If there are multiple answers, return the answer that occurs last in the input.

function findRedundantConnection(edges: number[][]): number[] {
  const parent = new Array(edges.length + 1).fill(0).map((_, i) => i);

  const find = (x: number): number => {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  };

  return edges.reduce((acc, [a, b]) => {
    const rootA = find(a);
    const rootB = find(b);

    if (rootA === rootB) {
      acc = [a, b];
    } else {
      parent[rootA] = rootB;
    }

    return acc;
  });
}
