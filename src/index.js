import "./styles.css";

const onClickAdd = () => {
  const task = document.getElementById("task_add_txt").value;
  addTask(task);
};

const delInCompTask = (target) => {
    document.getElementById("incomplete_list").removeChild(target);
};

const addTask = (text) => {

  const li = document.createElement("li");
  li.className = "each_task_list";

  const div = document.createElement("div");
  div.className = "each_task_div";

  const pTag = document.createElement("p");
  pTag.className = "task_name";
  pTag.innerText = text;

  const compBtn = document.createElement("button");
  compBtn.className = "btn_std";
  compBtn.innerText = "完了";
  compBtn.addEventListener("click", () => {
      delInCompTask(compBtn.parentNode.parentNode);
      const moveLi = compBtn.parentNode.parentNode;
      const parent = compBtn.parentNode;
      const compTask = parent.firstChild.innerHTML;
      
      parent.innerHTML = "";
      
      const movePTag = document.createElement("p");
      movePTag.className = "task_name";
      movePTag.innerText = compTask;
      
      const reverseBtn = document.createElement("button");
      reverseBtn.className = "btn_std";
      reverseBtn.innerText = "戻す";
      reverseBtn.addEventListener("click", () => {
          const moveLi = reverseBtn.parentNode.parentNode;
          const parent = reverseBtn.parentNode;
          const inCompTask = parent.firstChild.innerHTML;

          document.getElementById("complete_list").removeChild(moveLi);
          addTask(inCompTask);
      });

      parent.appendChild(movePTag);
      parent.appendChild(reverseBtn);
      document.getElementById("complete_list").appendChild(moveLi);

  });

  const delBtn = document.createElement("button");
  delBtn.className = "btn_std";
  delBtn.innerText = "削除";
  delBtn.addEventListener("click", () => {
    delInCompTask(delBtn.parentNode.parentNode);
  });

  div.appendChild(pTag);
  div.appendChild(compBtn);
  div.appendChild(delBtn);
  li.appendChild(div);
  document.getElementById("incomplete_list").appendChild(li);
};

document
  .getElementById("task_add_btn")
  .addEventListener("click", () => onClickAdd());
