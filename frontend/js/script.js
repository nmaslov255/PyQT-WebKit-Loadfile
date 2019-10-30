(function(){
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

        var form = document.getElementById('form');
        form.onchange = loadFiles;

        var saveBtn = document.getElementById('saveBtn');
        saveBtn.onclick = saveFiles;
    }
})();

function processFiles(files) {
    var file = files[0];

    var reader = new FileReader();
    reader.onload = function (e) {

        switch (file.type) {
            case "image/jpeg":
                var loader = document.getElementById("loader");
                var imgBox = document.getElementById("image");

                imgBox.style.backgroundImage = "url('" + e.target.result + "')";
                imgBox.style.display = "block";
                loader.style.display = 'none';
            break;

            default:
                console.log('other type');
        }

        document.getElementById('form').files = files;
    };

    reader.readAsDataURL(file);
}

function loadFiles(e) {
    processFiles(e.target.files);
}

function saveFiles(files) {
    if (form.files.length > 0) {
        saveAs(form.files[0]);
    }
}
