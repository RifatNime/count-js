let count = 0;
document.getElementById('add-btn').addEventListener('click',function(){
    count ++;
    const inputValue = document.getElementById('input-value').value;
    if(inputValue == ''){
        alert('Please enter a value')
    }
    else{
        const mainContainer = document.getElementById('content-container');
        const tableContainer = document.createElement('tr');
        //tableContainer.innerHTML = `<h1>${count}</h1>`//variabler man count korte
        tableContainer.innerHTML = `<th scope="row">${count}</th>
        <td>${inputValue}</td>
        <td>
            <button class="btn btn-danger delete-btn">Delete</button>
            <button class="btn btn-success done-btn">Done</button>
        </td>`;
        mainContainer.appendChild(tableContainer);
        document.getElementById('input-value').value = '';//form ta empty korte new kore


        const deleteButton = document.getElementsByClassName('delete-btn');

        const doneButton = document.getElementsByClassName('done-btn');
        const allClearButton = document.getElementsByClassName('all-clear-btn');
        //array paile loop chalabo
        for(const button of deleteButton){
            button.addEventListener('click',function(e){
                e.target.parentNode.parentNode.style.display = "none";
            });
        }
        for(const button of doneButton){
            button.addEventListener('click',function(e){
                // e.target.parentNode.parentNode.style.textDecoration = "line-through";
                e.target.parentNode.parentNode.style.textDecoration = "line-through";
            });
        }
        for(const button of allClearButton){
            button.addEventListener('click',function(e){
                // e.target.parentNode.parentNode.style.textDecoration = "line-through";
                e.target.parentNode.style.display = "none";
            });
        }
    }
}); 