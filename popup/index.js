var type = "repositories";
function search(){
    var ctype = type;
    var object = $("#object").val();
    console.log(ctype, object);
    if (!ctype || !object) {
        return;
    }
    window.open(`https://github.com/search?q=${object}&type=${ctype}`, "_blank")
}

$("#repo").click(()=>{
    type = "repositories";
});

$("#users").click(()=>{
    type = "users";
});

$("#search").click(() => {
    search();
})

$("#object").keyup(function (event) {
    if (event.keyCode === 13) {
        search();
    }
});