// Add item to list
function addItem() {
    var inputField = document.getElementById("inputItem");
    var inputValue = inputField.value.trim();
    if (inputValue === "") {
      alert("Please enter an item!");
      return;
    }
    var listItem = document.createElement("li");
    var itemText = document.createElement("span");
    itemText.textContent = inputValue;
    listItem.appendChild(itemText);
  
    // Create remove button
    var removeButton = document.createElement("button");
    removeButton.textContent = "❌";
    removeButton.classList.add("remove-btn");
    removeButton.onclick = removeItem;
    listItem.appendChild(removeButton);
  
    listItem.onclick = toggleItem;
    document.getElementById("list").appendChild(listItem);
    inputField.value = "";
  }
  
  // Toggle item between done and undone
  function toggleItem() {
    this.classList.toggle("done");
    this.onclick = toggleUndo;
  }
  
  // Undo item
  function toggleUndo() {
    this.classList.toggle("done");
    this.onclick = toggleItem;
  }
  
  // Remove item from list
  function removeItem(event) {
    event.stopPropagation(); // Prevent item click event from firing
    this.parentNode.remove();
  }
  