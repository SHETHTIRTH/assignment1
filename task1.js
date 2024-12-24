console.log("task1 :")
const task = [
    {title:"uploading",status:"Completed",priority:5},
    {title:"downloading",status:"Pending",priority:4},
    {title:"Debugging",status:"Pending",priority:2}
]
console.log(task);

console.log("task2 :")
const addTask = (task,new_task) =>{
    task.push(new_task)
}

addTask(task,{title:"Copying",status:"Pending",priority:1})
console.log(task)

console.log("task3 :")
const  arrange_By_Status = (tasks,status) => {
    return tasks.filter(task => task.status === status)
}

console.log(arrange_By_Status(task,"Pending"))

console.log("task4 :")
const highestPrioriy = (task) => {
    return task.reduce((highest,task) => task.priority > highest.priority ? task : highest)
}

console.log(highestPrioriy(task))

console.log("task5 :")
const getMovies = (task) =>{
    return task.map((task)=> `TASK : ${task.title} , STATUS : ${task.status}`)
}

console.log(getMovies(task))

console.log("task6 :")
task.forEach(task => {
    console.log(`Title: ${task.title}, Status: ${task.status}, Priority: ${task.priority}`)
})



