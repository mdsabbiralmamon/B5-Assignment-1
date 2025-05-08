function concatenateArrays<T>(...arrays: T[][]): T[] {
  return ([] as T[]).concat(...arrays);
}

// console.log(concatenateArrays(["a", "b"], ["c"]));