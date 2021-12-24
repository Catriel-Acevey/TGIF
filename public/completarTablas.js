function obtenerSenadores(array, party) {
    var senadores = [];
    var cantSenadores = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i].party == party) {
            senadores[cantSenadores] = array[i];
            cantSenadores++;

        }
    }
    if (senadores.length == 0){
        return null;
    }
    return senadores;
}

function promedioDeVotosConPartido(array) {
    promedio = 0;
    for (i = 0; i < array.length; i++) {
        promedio += array[i].votes_with_party_pct;
    }
    promedio = promedio / (array.length);
    promedio = promedio.toFixed([2]);
    return promedio;
}

function obtenerPartido(array) {
    if(!array) return null;
    for (i = 0; i < array.length; i++) {
        if (array[0].party != array[i].party) return "Todos";
    }
    if (array[0].party == "D") return "Democratas";
    if (array[0].party == "R") return "Republicanos";
    return "Independientes";
}

function tablearFilaGlance(array) {
    if(!array) return "";
    var caja = "<tr><td>" + obtenerPartido(array) + "</td><td>" + (array.length) + "</td><td>" + promedioDeVotosConPartido(array) + "%" + "</tr>";
    return caja;
}

function ordenarSenadores(array,campo,orden) {
    if(!array) return array;
    if(orden==1){
    array.sort(function (a, b) {
        return ((a[campo]) - (b[campo]));
    })
    }else{
    var aux=[];
    for(var i=array.length-1;i>=0;i--){
        aux.push(array[i]);
    }
       return aux;

    }
    return array;
}
function getOrderFilter(array,campo,orden,cant){
    var pepito=ordenarSenadores(array,campo,orden);
    var resultado=[];
    for(var i=0;i<cant;i++){
    resultado[i]=pepito[i];
    }
    return resultado;
}
function getName(string) {
    if (string != null) {
        return string;
    } else {
        return ("");
    }
}

function porcentajeACantidad(member,campo){
    var porcentaje=parseFloat(member[campo]);
    if(porcentaje==0) return "0";
    var cantidad=parseFloat(member.total_votes);
    cantidad=(cantidad*porcentaje)/100;
    cantidad=cantidad.toFixed([0]);
    return (cantidad.toString(10));
}

function tablearColumnaMost(array,id,campo) {
    var caja = "";
    for (i = 0; i < (array.length * 0.1); i++) {
        caja += ("<tr><td>" + getName(array[i].first_name) + " " + getName(array[i].middle_name) + " " + getName(array[i].last_name) + "</td><td>" + porcentajeACantidad(array[i],campo) + "</td><td>" + array[i][campo] + "</td></tr>");
    }
    document.getElementById(id).innerHTML = caja;
}

function tablearColumnaLeast(array,id,campo) {
    var caja = "";
    for (i = 0; i < (array.length * 0.1); i++) {
        caja += ("<tr><td>" + getName(array[array.length - i - 1].first_name) + " " + getName(array[array.length - i - 1].middle_name) + " " + getName(array[array.length - i - 1].last_name) + "</td><td>" + porcentajeACantidad(array[array.length - i - 1],campo) + "</td><td>" + array[array.length - i - 1][campo] + "</tr>");
    }
    document.getElementById(id).innerHTML = caja;
}
/*
if(estoyen == "senate-attendance"){
    senadores = dataSenate.results[0].members;

    var democratas = obtenerSenadores(senadores, "D");
    var independientes = obtenerSenadores(senadores, "I");
    var republicanos = obtenerSenadores(senadores, "R");

    document.getElementById("tablaSenateGlance").innerHTML = tablearFilaGlance(democratas) + tablearFilaGlance(republicanos) + tablearFilaGlance(independientes) + tablearFilaGlance(senadores);

    ordenarSenadores(senadores,"missed_votes_pct",1);

    tablearColumnaMostEngaged(senadores,"tablaSenateMostEngaged","missed_votes_pct");

    tablearColumnaLeastEngaged(senadores,"tablaSenateLeastEngaged","missed_votes_pct");
} else if (estoyen == "house-attendance") {
    senadoresH = dataHouse.results[0].members;

    var democratasH = obtenerSenadores(senadoresH, "D");

    var independientesH = obtenerSenadores(senadoresH, "I");
    
    var republicanosH = obtenerSenadores(senadoresH, "R");

    document.getElementById("tablaHouseGlance").innerHTML = tablearFilaGlance(democratasH) + tablearFilaGlance(republicanosH) + tablearFilaGlance(independientesH) + tablearFilaGlance(senadoresH);

    ordenarSenadores(senadoresH,"missed_votes_pct",1);

    tablearColumnaMostEngaged(senadoresH,"tablaHouseMostEngaged","missed_votes_pct");

    tablearColumnaLeastEngaged(senadoresH,"tablaHouseLeastEngaged","missed_votes_pct");
} else if (estoyen == "senate-party"){
    senadores = dataSenate.results[0].members;

    var democratas = obtenerSenadores(senadores, "D");
    var independientes = obtenerSenadores(senadores, "I");
    var republicanos = obtenerSenadores(senadores, "R");

    document.getElementById("tablaSenateGlance").innerHTML = tablearFilaGlance(democratas) + tablearFilaGlance(republicanos) + tablearFilaGlance(independientes) + tablearFilaGlance(senadores);

    ordenarSenadores(senadores,"votes_with_party_pct",1)

    tablearColumnaMostEngaged(senadores,"tablaSenateMostLoyal","votes_with_party_pct");

    tablearColumnaLeastEngaged(senadores,"tablaSenateLeastLoyal","votes_with_party_pct");
} else {
    senadoresH = dataHouse.results[0].members;

    var democratasH = obtenerSenadores(senadoresH, "D");

    var independientesH = obtenerSenadores(senadoresH, "I");
    
    var republicanosH = obtenerSenadores(senadoresH, "R");

    document.getElementById("tablaHouseGlance").innerHTML = tablearFilaGlance(democratasH) + tablearFilaGlance(republicanosH) + tablearFilaGlance(independientesH) + tablearFilaGlance(senadoresH);

    ordenarSenadores(senadoresH,"votes_with_party_pct",1);

    tablearColumnaMostEngaged(senadoresH,"tablaHouseMostLoyal","votes_with_party_pct");

    tablearColumnaLeastEngaged(senadoresH,"tablaHouseLeastLoyal","votes_with_party_pct");
}   */
/*
if (estoyenhouse){
    senadoresH = dataHouse.results[0].members;

    var democratasH = obtenerSenadores(senadoresH, "D");
    var independientesH = obtenerSenadores(senadoresH, "I");
    var republicanosH = obtenerSenadores(senadoresH, "R");

    document.getElementById("tablaHouseGlance").innerHTML = tablearFilaGlance(democratasH) + tablearFilaGlance(republicanosH) + tablearFilaGlance(independientesH) + tablearFilaGlance(senadoresH);

    if(estoyenattendance){
        ordenarSenadores(senadoresH,"missed_votes_pct",1);

        tablearColumnaMostEngaged(senadoresH,"tablaHouseMostEngaged","missed_votes_pct");
    
        tablearColumnaLeastEngaged(senadoresH,"tablaHouseLeastEngaged","missed_votes_pct");
    }else{
        ordenarSenadores(senadoresH,"votes_with_party_pct",1);

        tablearColumnaMostEngaged(senadoresH,"tablaHouseMostLoyal","votes_with_party_pct");
    
        tablearColumnaLeastEngaged(senadoresH,"tablaHouseLeastLoyal","votes_with_party_pct");
    }
}else{
    senadores = dataSenate.results[0].members;

    var democratas = obtenerSenadores(senadores, "D");
    var independientes = obtenerSenadores(senadores, "I");
    var republicanos = obtenerSenadores(senadores, "R");

    document.getElementById("tablaSenateGlance").innerHTML = tablearFilaGlance(democratas) + tablearFilaGlance(republicanos) + tablearFilaGlance(independientes) + tablearFilaGlance(senadores);

    if(estoyenattendance){
        ordenarSenadores(senadores,"missed_votes_pct",1);

        tablearColumnaMostEngaged(senadores,"tablaSenateMostEngaged","missed_votes_pct");
    
        tablearColumnaLeastEngaged(senadores,"tablaSenateLeastEngaged","missed_votes_pct");
    }else{
        ordenarSenadores(senadores,"votes_with_party_pct",1)

        tablearColumnaMostEngaged(senadores,"tablaSenateMostLoyal","votes_with_party_pct");
    
        tablearColumnaLeastEngaged(senadores,"tablaSenateLeastLoyal","votes_with_party_pct");
    }
}*/

function completarTablasCon(datos,campo) {

    var members = datos.results[0].members;

    var democratas = obtenerSenadores(members, "D");
    var independientes = obtenerSenadores(members, "I");
    var republicanos = obtenerSenadores(members, "R");

    document.getElementById("tablaGlance").innerHTML = tablearFilaGlance(democratas) + tablearFilaGlance(republicanos) + tablearFilaGlance(independientes) + tablearFilaGlance(members);

    ordenarSenadores(members,campo,1);

    tablearColumnaMost(members,"tablaMost",campo);
    
    tablearColumnaLeast(members,"tablaLeast",campo);
}