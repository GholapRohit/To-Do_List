# To-Do List

This To-Do List website allows users to add, edit, delete, and filter tasks based on their completion status. The tasks include a description, due date, and due time.

HTML (index.html)<br>
Header: Contains the title of the To-Do List.<br>
Input Section: Includes input fields for task description, due date, and due time, along with the "Add" button.<br>
Status Buttons: Buttons to filter tasks by "All", "Completed", and "Incomplete".<br>
Task List: An unordered list where tasks are displayed.<br>

CSS (style.css)<br>
General Styles: Basic styling for the body, header, and input section. Sets font, background color, and layout properties.<br>
Task List: Styles for the task list items, including completed and incomplete tasks. Defines appearance for tasks, including strikethrough for completed tasks.<br>
Buttons: Styles for the "Add" button and status buttons, including hover effects and active states. Sets colors, borders, and hover effects for buttons.<br>
Horizontal Rule: Styles for the horizontal rule, including the hide class to show or hide it based on task presence. Controls visibility and appearance of the horizontal rule.<br>

JavaScript (script.js)<br>
Variables:-<br>
taskInput: References the task input field.<br>
dueDate: References the due date input field.<br>
dueTime: References the due time input field.<br>
addBtn: References the "Add" button.<br>
tasksList: References the unordered list that contains all tasks.<br>
taskCheckBoxes: References all task checkboxes.<br>
taskDeleteButtons: References all task delete buttons.<br>
allBtn: References the "All" status button.<br>
compBtn: References the "Completed" status button.<br>
incompBtn: References the "Incomplete" status button.<br>
Functions:-
<ul>
<li>taskSeparator():<br>
Adds or removes a horizontal rule below the status buttons based on the presence of tasks in the task list.<br>
<li>addBtn.addEventListener("click", ...):<br>
Validates the task input, due date, and due time.<br>
Creates a new task list item with the task details.<br>
Appends the new task to the task list.<br>
Resets the input fields.<br>
Calls taskSeparator() to update the horizontal rule.<br>
<li>tasksList.addEventListener("change", ...):<br>
Handles the checkbox change event.<br>
Strikes through the task name and updates the task's class based on its completion status.<br>
<li>tasksList.addEventListener("click", ...):<br>
Handles the delete button click event.<br>
Removes the task from the list and calls taskSeparator().<br>
Handles the edit button click event.<br>
Removes the task from the list and populates the input fields with the task's details for editing.<br>
<li>allBtn.addEventListener("click", ...):<br>
Displays all tasks.<br>
Updates the background color of the status buttons.<br>
<li>compBtn.addEventListener("click", ...):<br>
Displays only completed tasks.<br>
Updates the background color of the status buttons.<br>
<li>incompBtn.addEventListener("click", ...):<br>
Displays only incomplete tasks.<br>
Updates the background color of the status buttons.<br>
</ul>
