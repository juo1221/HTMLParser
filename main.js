"use strict";

const textNode = (input, cursor, curr) => {
  const idx = input.indexOf(">", cursor);
  curr.tag.children.push({
    type: "text",
    text: input.substring(cursor, idx),
  });
  return idx;
};

const parser = (input) => {
  input = input.trim();
  const result = { name: "ROOT", type: "node", children: [] };
  const stack = [{ tag: result }];
  let curr;
  let i = 0;
  let j = input.length;
  while ((curr = stack.pop())) {
    while (i < j) {
      const cursor = i;
      if (input[cursor] === "<") {
        const idx = input.indexOf(">", cursor);
        i = idx + 1;

        if (input[cursor + 1] === "/") {
        } else {
          if (input[idx - 1] === "/") {
          } else {
          }
        }
      } else {
        i = textNode(input, cursor, curr);
      }
    }
    return result;
  }
};
