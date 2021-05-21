$(function(){    
    $.ajax({url: "termekek.json", success: function(result){ termekekTomb=(result); kiir();}});
    $("#ok").click(mentes);
});

var termekekTomb=[];

function kiir() {
    $("section").empty();
    $("section").append("<table>");
    $("section table").append("<tr></tr>");
    for (var item in termekekTomb[0]) {
        $("section table tr").append("<th id='" + item + "'>" + item + " </th>"); 
    }

    for (var i = 0; i < termekekTomb.length; i++) {
        $("section table").append("<tr>");
        for (var item in termekekTomb[i]) {
            $("section table tr").eq(i + 1).append("<td>" + termekekTomb[i][item] + " </td>");               
        }
    }
    
 
}

function mentes(){
    var ujTermek={};
    ujTermek.nev=$("#neva").val();
    ujTermek.cikkszam=parseInt($("#cikksz").val());
    ujTermek.ar=parseInt($("#ara").val());
    ujTermek.db=parseInt($("#dba").val());
    if ($("input:radio[name=elerheto]:checked").val()==="true") {
        ujTermek.elerheto=true;
    }
    else {
        ujTermek.elerheto=false;
    }
    termekekTomb.push(ujTermek);
    
    console.log(termekekTomb);
    kiir();
}


