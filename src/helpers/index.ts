export const uniqueId = (): string => {
  return Math.random().toString(29).slice(-5);
};

export const insertAtPosition = (arr: any[], index: number, newItems: any) => [
  ...arr.slice(0, index),
  newItems,
  ...arr.slice(index),
];


