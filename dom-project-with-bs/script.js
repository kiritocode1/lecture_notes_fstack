const taskContainer = document.getElementById("task_container");
console.log(taskContainer[0]);

const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`, //return  the unique functions .
        imageurl: document.getElementById("imageURL").value,
        tasktitle: document.getElementById("taskTitle").value,
        tasktype: document.getElementById("taskType").value,
        taskdescription: document.getElementById("taskDescription").value
    };
    console.log(taskData);
    //!grabbing the data from users for push .
const new_card = `<div  id = ${taskData.id} class="col-md-6 col-lg-4">
                        <div class="card">
                            <div class="card-header">
                                <button type="button" class="btn btn-outline-success"><i class="fas fa-pen"></i></button>
                                <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
                            </div>
                                <img src= ${taskData.imageurl} alt="img" id="main-img">
                            <div class="card-body">
                                <h5 class="card-title text-primary"><strong>${taskData.tasktitle}</strong></h5>
                                <p class="card-text">${taskData.taskdescription}</p>
                                <a href="#" class="btn btn-primary">click-click</a>
                            </div>
                        </div>
                    </div>
`;
    taskContainer.insertAdjacentHTML
}
