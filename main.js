
// Création du tableau de tâche
const tasksOfTheDay = [
    { title: 'Faire les courses', done: false },
    { title: 'Nettoyer la maison', done: true },
    { title: 'Planter le jardin', done: false }
];

// Methode d'ajout de tâche ( retourne le tableau avec la / les nouvelles tâches)
const addTask = (taskList, newTask) => {
    return [...taskList, newTask];
}

// Methode pour retirer une tâche en fonction de son titre 
const removeTask = (taskList, title) => {
    return taskList.filter(task => task.title !== title);
}

// Methode pour changer le status d'une tâche
const toggleTaskStatus = (task) => {
    task.done ? task.done = false : task.done = true;
    return task;
}

// Methode pour afficher les listes en fonction du status passé
const showTasks = (taskList, status) => {
    return status === undefined ? taskList : taskList.filter(task => task.done == status);
}

// Ajout d'un nouvelle tâche
console.log(addTask(tasksOfTheDay, { title: 'Nouvelle tache', done: true }));
// Enlève une tâche de la liste
console.log(removeTask(tasksOfTheDay, 'Faire les courses'));
// Change les status d'une tâche
console.log(toggleTaskStatus({ title: 'Switch status', done: false }));
// Affiche toute les tâches dont le status est true
console.log(showTasks(tasksOfTheDay, true));
// Affiche toute les tâches dont le status est false
console.log(showTasks(tasksOfTheDay, false));
// Affiche toute les tâches 
console.log(showTasks(tasksOfTheDay));



