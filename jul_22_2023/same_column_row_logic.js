<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <style>
        .my_td {
            padding: 20px;
            border: 5px solid black;
        }

        #my_table {
            border: 5px solid black;
        }
    </style>
</head>

<body>
    <div class="container">
        <label for="column_count">Enter Column Number</label>
        <input type="number" name="" id="column_count">
        <button onclick="generate_column()">Generate Column</button>

        <table id="my_table">

        </table>
    </div>
    <script>
        function generate_column() {
            const my_table = document.getElementById("my_table"); // get parent
            my_table.innerHTML = "";
            const column_count = Number(document.getElementById("column_count").value);

            tr = document.createElement("tr");
            my_table.appendChild(tr);
            td = document.createElement("td");
            td.innerText = "i am created by JavaScript";
            tr.appendChild(td);
        }



    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"></script>
</body>

</html>
