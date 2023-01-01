import "./styles.css";
const onClickAdd = () => {
    const task = document.getElementById("task_add_txt").value;
    
    const li = document.createElement('li');
    console.log(li);
    
    const div = document.createElement('div');
    const pTag = document.createElement('p');
    const compBtn = document.createElement('button');
    const delBtn = document.createElement('button');
}

document.getElementById("task_add_btn").addEventListener("click", () => onClickAdd());
