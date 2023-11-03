let horarioEstudo = prompt(`Digite o horário em que você estuda:\nM para matutino,\nV para verspertino,\nN para noturno`)
    
switch (horarioEstudo) {
    case "M":
        alert("Bom Dia!")
        break;
    case "V":
        alert("Boa Tarde!")
        break;
    case "N":
    alert("Boa Noite!")
        break;
    default:
    alert("Digite uma letra válida")
        break;
}