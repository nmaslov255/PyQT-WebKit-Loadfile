window.onload = function() {
    var ignoreDrag = function (e) {
        e.stopPropagation();
        e.preventDefault();
    }

    var drop = function (e) {
        e.stopPropagation();
        e.preventDefault();

        var data = e.dataTransfer;
        var files = data.files;
         
        processFiles(files);
    }

    var dropBox = document.getElementById("drop_box");

    dropBox.ondragenter = ignoreDrag;
    dropBox.ondragover = ignoreDrag;
    dropBox.ondrop = drop;
}

function processFiles(files) {
    var file = files[0];
    if (file.type != "image/jpeg") {
        document.getElementById("error").style.display = 'block';
        return;        
    }

    var reader = new FileReader();
    reader.onload = function (e) {
        var loader = document.getElementById("loader");
        var imgBox = document.getElementById("image");

        imgBox.style.backgroundImage = "url('" + e.target.result + "')";
        imgBox.style.display = "block";
        loader.style.display = 'none';
    };

    reader.readAsDataURL(file);
}