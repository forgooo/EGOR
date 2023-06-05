const prompt = require('prompt-sync')();

class Task {
  constructor(name) {
    this.taskName = name;
    this.tasks = [];
  }

  addSubTask() {
    const count = parseInt(prompt(`How many subtasks do you want to input for task ${this.taskName}: `));

    for (let i = 0; i < count; i++) {
      const task = prompt('Input task: ');
      this.tasks.push(task);
    }

    console.log('\n');
  }
}

const data = [];

function addTask() {
  const taskName = prompt('Input task name: ');
  data.push(new Task(taskName));
}

function printTasksAll() {
  const LINE = '----------------------------------------------\n';
  console.log(LINE);
  data.forEach((task, index) => {
    console.log(`${index + 1}. ${task.taskName} ->`);
    task.tasks.forEach(subtask => {
      console.log(`         ${subtask}`);
    });
  });
  console.log(LINE);
}

function printTasks() {
  data.forEach((task, index) => {
    console.log(`${index + 1} ${task.taskName}`);
  });

  const choice = parseInt(prompt('Choose task to add subs: '));

  if (choice > 0 && choice <= data.length) {
    const chosenTask = data[choice - 1];
    chosenTask.addSubTask();
  } else {
    console.log('Invalid choice.');
  }
}

function deleteTask() {
  console.log('Available tasks:');
  printTasksAll();

  const choice = parseInt(prompt('Choose task to delete: '));

  if (choice > 0 && choice <= data.length) {
    data.splice(choice - 1, 1);
    console.log('Task deleted successfully.');
  } else {
    console.log('Invalid choice.');
  }
}

function main() {
  while (true) {
    console.log('1. FOR ADD NEW TASK');
    console.log('2. FOR ADD SUBTASK TO TASK');
    console.log('3. FOR DELETE TASK');
    console.log('4. FOR LIST TASKS');
    console.log('0. EXIT');

    const ch = parseInt(prompt(': '));

    if (ch === 0) {
      return;
    } else if (ch === 1) {
      addTask();
    } else if (ch === 2) {
      printTasks();
    } else if (ch === 3) {
      deleteTask();
    } else if (ch === 4) {
      printTasksAll();
    } else {
      console.log('Invalid choice.');
    }
  }
}

main();
