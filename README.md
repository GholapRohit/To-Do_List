# To-Do List

This To-Do List website allows users to add, edit, delete, and filter tasks based on their completion status. The tasks include a description, due date, and due time.

---

### HTML `(index.html)`
- Header: Contains the title of the To-Do List.
- Input Section: Includes input fields for task description, due date, and due time, along with the "Add" button.
- Status Buttons: Buttons to filter tasks by "All", "Completed", and "Incomplete".
- Task List: An unordered list where tasks are displayed.

---

### CSS `(style.css)`
- General Styles: Basic styling for the body, header, and input section. Sets font, background color, and layout properties.
- Task List: Styles for the task list items, including completed and incomplete tasks. Defines appearance for tasks, including strikethrough for completed tasks.
- Buttons: Styles for the "Add" button and status buttons, including hover effects and active states. Sets colors, borders, and hover effects for buttons.
- Horizontal Rule: Styles for the horizontal rule, including the hide class to show or hide it based on task presence. Controls visibility and appearance of the horizontal rule.

---

### JavaScript `(script.js)`
#### Variables:-
- taskInput: References the task input field.
- dueDate: References the due date input field.
- dueTime: References the due time input field.
- addBtn: References the "Add" button.
- tasksList: References the unordered list that contains all tasks.
- taskCheckBoxes: References all task checkboxes.
- taskDeleteButtons: References all task delete buttons.
- allBtn: References the "All" status button.
- compBtn: References the "Completed" status button.
- incompBtn: References the "Incomplete" status button.
#### Functions:-
- `taskSeparator()`:
  - Adds or removes a horizontal rule below the status buttons based on the presence of tasks in the task list.
- `addBtn.addEventListener("click", ...)`:
  - Validates the task input, due date, and due time.
  - Creates a new task list item with the task details.
  - Appends the new task to the task list.
  - Resets the input fields.
  - Calls taskSeparator() to update the horizontal rule.
- `tasksList.addEventListener("change", ...)`:
  - Handles the checkbox change event.
  - Strikes through the task name and updates the task's class based on its completion status.
- `tasksList.addEventListener("click", ...)`:
  - Handles the delete button click event.<br>
  - Removes the task from the list and calls taskSeparator().<br>
  - Handles the edit button click event.<br>
  - Removes the task from the list and populates the input fields with the task's details for editing.<br>
- `allBtn.addEventListener("click", ...)`:
  - Displays all tasks.
  - Updates the background colour of the status buttons.
- `compBtn.addEventListener("click", ...)`:
  - Displays only completed tasks.
  - Updates the background colour of the status buttons.
- `incompBtn.addEventListener("click", ...)`:
  - Displays only incomplete tasks.
  - Updates the background colour of the status buttons.

