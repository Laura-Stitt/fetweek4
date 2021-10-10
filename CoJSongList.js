let id = 0;

document.getElementById("add").addEventListener("click", () => {
    let table = document.getElementById("list");
    let row = table.insertRow(1);
    row.setAttribute("id", `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById("new-song-title").value;
    row.insertCell(1).innerHTML = document.getElementById("new-song-writer").value;
    document.getElementById("new-song-title").value = "";
    document.getElementById("new-song-writer").value = "";
})