// Select the ul and button
let ul = document.querySelector("#myList");
let btn = document.querySelector("#addBtn");

btn.addEventListener("click", function () {
  // Count current list items
  let count = ul.children.length + 1;

  // Create new li
  let li = document.createElement("li");
  li.textContent = "New Item " + count;

  // Apply style based on odd/even position
  if (count % 2 === 1) {
    // Odd number → bold & blue
    li.style.fontWeight = "bold";
    li.style.color = "blue";
  } else {
    // Even number → italic & red
    li.style.fontStyle = "italic";
    li.style.color = "red";
  }

  // Append to list
  ul.appendChild(li);
});
