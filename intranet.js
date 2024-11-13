var EditarExamen = () => {
    document.querySelector("#consultaexamen").querySelectorAll('div').forEach(d => d.remove());
    var resultadoPreguntas = document.createElement('div');
    resultadoPreguntas.id="resultadopreguntas";
    document.querySelector("#collapseTwo > div > div > div:nth-child(5)").appendChild(resultadoPreguntas);
    var id = document.querySelector(".panel.box.box-success > div.box-header.with-border > div.col-md-4 > span > a").getAttribute('onclick').split('cargaexamenes(')[1].split(',');
id.pop();
id = id.join();
function ingresarexamen(matid,codgrupo){ jQuery.post('examenesonline_admin.php?q=verexamen&id='+matid,{user:jQuery("#user").val(),pwd:jQuery("#pwd").val(),},function(data){ listadato=data.split("||||"); jQuery("#resultado").html(listadato[0]); eval(listadato[1]); jQuery.post('examenesonline_admin.php?q=consultadetalle',{user:jQuery("#user").val(),pwd:jQuery("#pwd").val(),id:matid},function(dato){ datos=dato.split('||||'); jQuery("#resultadopreguntas").html(datos[0]); eval(datos[1]); }); }); }
var matid = id.split(',')[0];
matid = matid.replace("'", '');
matid = matid.replace("'", '');
var codgrupo = id.split(',')[1];
codgrupo = codgrupo.replace("'", '');
codgrupo = codgrupo.replace("'", '');
ingresarexamen(matid, codgrupo)
}
EditarExamen()
