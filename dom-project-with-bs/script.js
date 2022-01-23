const taskContainer = document.querySelector(".task_container");
console.log(taskContainer[0]);
const globalstore = [];
const make_html =(taskData)=>{
    return `<div id = ${taskData.id} class="col-md-6 col-lg-4">
                        <div class="card">
                            <div class="card-header">
                                <button type="button" class="btn btn-outline-success"><i class="fas fa-pen"></i></button>
                                <button type="button" class="btn btn-outline-danger" onclick ="delete_card.apply(this,arguments)"><i class="fas fa-trash" onclick="delete_card.apply(this,arguments)"></i></button>
                            </div>
                                <img src= ${taskData.imageurl} alt="img" id="main-img">
                            <div class="card-body">
                                <h5 class="card-title text-primary"><strong>${taskData.tasktitle}</strong></h5>
                                <p class="card-text">${taskData.taskdescription}</p>
                                <a href="#" class="btn btn-primary">click-click</a>
                            </div>
                        </div>
                    </div>
`
}
const delete_card=(event)=>{
    event = window.event;
    const target_ID = event.target.id;
    const tagname = event.target.tagname;
    globalstore.filter((card_object) => card_object.id !== target_ID);
    localStorage.setItem("tasky", JSON.stringify({ cards: globalstore }));
    if (tagname === "BUTTON") {
        taskContainer.removeChild(event.target.parentNode.parentNode.parentNode)
    } else {
        taskContainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
    }
}
const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`, //return  the unique functions.
        imageurl: document.getElementById("imageURL").value,
        tasktitle: document.getElementById("taskTitle").value,
        tasktype: document.getElementById("taskType").value,
        taskdescription: document.getElementById("taskDescription").value
    };
    console.log(taskData);
    //!grabbing the data from users for push .
// const new_card = `<div id = ${taskData.id} class="col-md-6 col-lg-4">
//                         <div class="card">
//                             <div class="card-header">
//                                 <button type="button" class="btn btn-outline-success"><i class="fas fa-pen"></i></button>
//                                 <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
//                             </div>
//                                 <img src= ${taskData.imageurl} alt="img" id="main-img">
//                             <div class="card-body">
//                                 <h5 class="card-title text-primary"><strong>${taskData.tasktitle}</strong></h5>
//                                 <p class="card-text">${taskData.taskdescription}</p>
//                                 <a href="#" class="btn btn-primary">click-click</a>
//                             </div>
//                         </div>
//                     </div>
// `;
    //!new card added here , basically . 
    taskContainer.insertAdjacentHTML("beforeend", make_html(taskData));
    // console.log(taskContainer);
    globalstore.push(taskData);
    localStorage.setItem("tasky", JSON.stringify({ cards: globalstore }));
}
const load_initial_data = () => {
    //!this gts the data from localstore
    const get_card_data = localStorage.getItem("tasky");
    //* convert the string to a normal object , destructuring is basically spreding the object  . 
    const { cards } = JSON.parse(get_card_data);
    //? loop over the array of task object to create html cards . inject it , 
    cards.map((card_object) => {
        taskContainer.insertAdjacentHTML("beforeend", make_html(card_object));
    })
    // update our global storage .
    globalstore.push(card_object);
}

const editCard = (event) => {
    event = window.event;
    tagname = window.event.tagname;
        if (tagname === "BUTTON") {
        // taskContainer.removeChild(event.target.parentNode.parentNode.parentNode)
            event.target.parentNode.parentNode.parentNode.contentEditable = true;
    } else {
        // taskContainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
            event.target.parentNode.parentNode.parentNode.parentNode.contentEditable = true;
    }
};