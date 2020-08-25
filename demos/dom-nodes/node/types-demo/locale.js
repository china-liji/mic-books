export const getNodeTypes = (owner = Node.prototype) => {
  const types = (
    Object
      .getOwnPropertyNames(owner)
      .filter((name) => {
        return /_NODE$/.test(name);
      })
      .sort((t1, t2) => {
        return owner[t1] - owner[t2];
      })
  );

  if (types.length === 0) {
    return getNodeTypes(Node);
  }

  return types;
};