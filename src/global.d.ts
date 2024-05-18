// CUSTOM TYPE THAT IS SORT OF THE OPPOSITE OF PICK
// type DraftTask = RequireOnly<Task, 'title'>

type RequireOnly<T, P extends keyof T> = Pick<T, P> &
  Partial<T> &
  Partial<Omit<T, P>>;
