class TicketManager {
  #precioBaseDeGanancia = 1.15;

  constructor() {
    this.eventos = [];
  }

  getEventos() {
    return this.eventos;
  }
  agregarEvento(
    nombre,
    lugar,
    precio,
    capacidad,
    fecha = new Date().toLocaleDateString
  ) {
    //los valores se pueden poner en el array como por ejemplo: Capacidad o en los params por ejemplo: fecha
    let evento = {
      nombre,
      lugar,
      precio,
      capacidad: capacidad || 50,
      fecha,
      participantes: [],
    };
    if (this.eventos.length === 0) {
      evento["id"] = 1;
    } else {
      evento["id"] = this.eventos[this.eventos.length - 1]["id"] + 1;
    }
    this.eventos.push(evento)
  }
  agregarUsuario(idEvento, idUsuario) {
    let evento = this.eventos.find((ev) => ev.id === idEvento);
    if(evento){
        console.log("El evento existe")
        evento.participantes.push(idUsuario)
    }else{
        console.log("El evento no existe")
    }
 
  }
}

const ticket = new TicketManager();
ticket.agregarEvento("CapelucitaRoja", "AltoRosario");
