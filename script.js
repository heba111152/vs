let count = 4;

document.addEventListener("DOMContentLoaded", function () {

    initCharts();

});

function addStudent(){

    const name = document.getElementById("name").value;
    const html = document.getElementById("html").value;
    const css = document.getElementById("css").value;
    const js = document.getElementById("js").value;

    if(!name || !html || !css || !js){
        alert("Please fill all fields");
        return;
    }

    count++;

    const table = document.getElementById("table");

    const row = table.insertRow();

    row.innerHTML = `
        <td>${count}</td>
        <td>${name}</td>
        <td>${html}</td>
        <td>${css}</td>
        <td>${js}</td>
        <td>
            <button class="edit-btn" onclick="editStudent(this)">Edit</button>
            <button class="delete-btn" onclick="deleteStudent(this)">Delete</button>
        </td>
    `;

    document.getElementById("totalStudents").innerText = count;

    document.getElementById("name").value = "";
    document.getElementById("html").value = "";
    document.getElementById("css").value = "";
    document.getElementById("js").value = "";
}

function deleteStudent(button){

    const row = button.parentElement.parentElement;
    row.remove();

    count--;
    document.getElementById("totalStudents").innerText = count;
}

function editStudent(button){

    const row = button.parentElement.parentElement;
    const cells = row.getElementsByTagName("td");

    const newName = prompt("Edit Name", cells[1].innerText);
    const newHTML = prompt("Edit HTML", cells[2].innerText);
    const newCSS = prompt("Edit CSS", cells[3].innerText);
    const newJS = prompt("Edit JS", cells[4].innerText);

    if(newName) cells[1].innerText = newName;
    if(newHTML) cells[2].innerText = newHTML;
    if(newCSS) cells[3].innerText = newCSS;
    if(newJS) cells[4].innerText = newJS;
}

function initCharts(){

    const bar = document.getElementById("barChart");
    const pie = document.getElementById("pieChart");

    if(bar){

        new Chart(bar, {
            type: 'bar',
            data: {
                labels: ['Ahmed', 'Sara', 'Omar', 'Mona'],
                datasets: [
                    {
                        label: 'HTML',
                        data: [95, 88, 91, 84],
                        backgroundColor:'#3b82f6'
                    },
                    {
                        label: 'CSS',
                        data: [90, 85, 89, 80],
                        backgroundColor:'#8b5cf6'
                    },
                    {
                        label: 'JS',
                        data: [92, 91, 95, 82],
                        backgroundColor:'#22c55e'
                    }
                ]
            }
        });

    }

    if(pie){

        new Chart(pie, {
            type: 'doughnut',
            data: {
                labels: ['Excellent', 'Good', 'Average'],
                datasets: [{
                    data: [45, 35, 20],
                    backgroundColor: ['#3b82f6','#22c55e','#f97316']
                }]
            }
        });

    }
}
