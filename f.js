var obj = [
    {   code: 1,
        name: "Egor",
        age: 12,
        town: "Minsk"
    },
    {   code: 2,
        name: "Alena",
        age: 14,
        town: "Grodno"
    },
    {   code: 3,
        name: "Sergey",
        age: 16,
        town: "Gomel"
    },
    {   code: 4,
        name: "Ivan",
        age: 18,
        town: "Moscow"
    },
    {   code: 5,
        name: "Valentina",
        age: 20,
        town: "Vitebsk"
    }
]


$("#btn1").click(function(){
    $("#t").append(function () {
        var tx="";
        for(var i=0;i<obj.length;i++){
            tx+="<tr id='tr_"+obj[i].code+"'>"+"<td>"+obj[i].name+"</td>"+"<td>"+obj[i].age+"</td>"+"<td>"+obj[i].town+"</td>"+"</tr>"


        }
        return tx;
    })
    for(var i=0; i<obj.length;i++){
        setListener("tr_"+obj[i].code);
    }

});

 function setListener(id) {
     document.getElementById(id).addEventListener("click", func1);
     document.getElementById(id).addEventListener("mousemove", func2);
     document.getElementById(id).addEventListener("mouseout", func3);
}
function func1() {
  alert("Вы кликнули на строчку " + $(this).attr('id').split("_")[1])
   // alert($(this).attr('id'));
}
function func2() {
     $(this).addClass("styles");
}
function func3(){
    $(this).removeClass("styles");
}