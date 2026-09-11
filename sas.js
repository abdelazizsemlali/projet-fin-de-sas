const prompt = require('prompt-sync')();

// LES TRAJETS
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
// LES TICKETS
const tickets = [
    {
        id: 1,
        passengername: "Ahmed",
        tripid: 1,
        seatnumber: 1,
        price: 25
    },
    {
        id: 2,
        passengername: "Fatima",
        tripid: 1,
        seatnumber: 2,
        price: 25
    },
    {
        id: 3,
        passengername: "Youssef",
        tripid: 2,
        seatnumber: 1,
        price: 90
    },
    {
        id: 4,
        passengername: "Ayoub",
        tripid: 3,
        seatnumber: 1,
        price: 140
    },
    {
        id: 5,
        passengername: "Sanae",
        tripid: 3,
        seatnumber: 2,
        price: 140
    },
    {
        id: 6,
        passengername: "Omar",
        tripid: 3,
        seatnumber: 3,
        price: 140
    },
    {
        id: 7,
        passengername: "Khadija",
        tripid: 4,
        seatnumber: 1,
        price: 65
    },
    {
        id: 8,
        passengername: "Mehdi",
        tripid: 4,
        seatnumber: 2,
        price: 65
    },
    {
        id: 9,
        passengername: "Salma",
        tripid: 4,
        seatnumber: 3,
        price: 65
    },
    {
        id: 10,
        passengername: "Hamza",
        tripid: 4,
        seatnumber: 4,
        price: 65
    }
];
// METTRE A JOUR LES PLACE
for (let i = 0; i < tickets.length; i++) {

    for (let j = 0; j < trips.length; j++) {

        if (trips[j].id === tickets[i].tripid) {
            trips[j].availableSeats--;
        }

    }

}

let nextTicketId = tickets.length + 1;
// TROUVER UNE PLACE
function trouveplace(tripid) { 
    for (let seat = 1; seat <= 50; seat++) {

        let occupied = false;

        for (let i = 0; i < tickets.length; i++) {

            if (
                tickets[i].tripid === tripid &&
                tickets[i].seatnumber === seat
            ) {
                occupied = true;
                break;
            }

        }

        if (occupied === false) {
            return seat;
        }

    }

    return null;
}
// AFFICHER LES TRAJETS
function afficherTrajets() {
    console.log("");
    console.log("=== TRAJETS DISPONIBLES ===");

    for (let i = 0; i < trips.length; i++) {
        console.log(
            trips[i].id + " | " +
            trips[i].departure + " -> " +
            trips[i].destination + " | " +
            trips[i].departureTime + " - " +
            trips[i].arrivalTime + " | " +
            trips[i].price + " DH | " +
            trips[i].availableSeats + " places"
        );
    }
}
// ACHETER UN TICKET
function Acheterticket() {

    console.log("");
    console.log("=== ACHETER UN TICKET ===");
    const passengername = prompt("Entrez le nom du passager : ").trim();
    const tripid = Number( prompt("Entrez l'identifiant du trajet : "));

    const trip = trips.find(function(trip) {

        return trip.id === tripid;

    });

    if (!trip) {

        console.log("Trajet introuvable.");
        return;

    }

    if (trip.availableSeats <= 0) {

        console.log("Le trajet est complet.");
        return;

    }

    const seatNumber = trouveplace(trip.id);

    if (seatNumber === null) {

        console.log("Aucune place disponible.");
        return;

    }
    const ticket = {
        id: nextTicketId,
        passengername: passengername,
        tripid: trip.id,
        seatnumber: seatNumber,
        price: trip.price

    };
    tickets.push(ticket);
    nextTicketId++;
    trip.availableSeats--;
    console.log("");
    console.log("Ticket #" + ticket.id);
    console.log("Passager : " + ticket.passengername);
    console.log(
        "Trajet : " +
        trip.departure +
        " -> " +
        trip.destination
    );
    console.log("Place : " + ticket.seatnumber);
    console.log("Prix : " + ticket.price + " DH");
    console.log("Ticket acheté avec succès !");
}
// AFFICHER LES TICKETS
function Affichertickets() {

    console.log("");
    console.log("=== TICKETS ===");
    if (tickets.length === 0) {
        console.log("Aucun ticket acheté.");
        return;
    }
    for (let i = 0; i < tickets.length; i++) {

        const ticket = tickets[i];
        const trip = trips.find(function(trip) {

            return trip.id === ticket.tripid;

        });
        console.log("------------------------------");
        console.log("Ticket #" + ticket.id);
        console.log("Passager : " + ticket.passengername);
        console.log(
            "Trajet : " +
            trip.departure +
            " -> " +
            trip.destination
        );
        console.log("Place : " + ticket.seatnumber);
        console.log("Prix : " + ticket.price + " DH");
    }
}
// ANNULER UN TICKET
function annulertickets() {

    console.log("");
    console.log("=== ANNULER UN TICKET ===");
    const ticketId = Number(prompt("Entrez l'identifiant du ticket : "));
    const ticketIndex = tickets.findIndex(function(ticket) {
        return ticket.id === ticketId;

    });


    if (ticketIndex === -1) {

        console.log("Ticket introuvable.");
        return;

    }


    const ticket = tickets[ticketIndex];


    const trip = trips.find(function(trip) {

        return trip.id === ticket.tripid;

    });


    trip.availableSeats++;

    tickets.splice(ticketIndex, 1);


    console.log("Ticket annulé avec succès.");

}
// RECHERCHER UN TICKET
function Rechercherticket() {

    console.log("");
    console.log("=== RECHERCHER UN TICKET ===");
    const passengerName = prompt("Entrez le nom du passager : ").trim();
    const foundTickets = tickets.filter(function(ticket) {
        return ticket.passengername.toLowerCase() ===
            passengerName.toLowerCase();

    });
    if (foundTickets.length === 0) {
        console.log("Aucun ticket trouvé.");
        return;
    }
    for (let i = 0; i < foundTickets.length; i++) {

        const ticket = foundTickets[i];

        console.log(
            "Ticket #" + ticket.id +
            " | Passager : " + ticket.passengername +
            " | Trajet ID : " + ticket.tripid +
            " | Place : " + ticket.seatnumber +
            " | Prix : " + ticket.price + " DH"
        );
    }
}
// FILTRER LES TRAJETS
function filtrertrajets() {

    console.log("");
    console.log("=== FILTRER LES TRAJETS ===");
    const departure = prompt(
        "Entrez la ville de départ : "
    ).trim();


    const filtredetrips = trips.filter(function(trip) {

        return trip.departure.toLowerCase() ===
            departure.toLowerCase();

    });

    if (filtredetrips.length === 0) {
        console.log("Aucun trajet trouvé.");
        return;
    }
    for (let i = 0; i < filtredetrips.length; i++) {
        const trip = filtredetrips[i];

        console.log(
            trip.id + " | " +
            trip.departure + " -> " +
            trip.destination + " | " +
            trip.departureTime + " - " +
            trip.arrivalTime + " | " +
            trip.price + " DH | " +
            trip.availableSeats + " places"
        );
    }
}
// TRIER LES TRAJETS
function triertrajet() {

    console.log("");
    console.log("=== TRAJETS TRIES PAR PRIX ===");
    // On crée un nouveau tableau
    let sortedTrips = [];
    for (let i = 0; i < trips.length; i++) {
        sortedTrips.push(trips[i]);
    }


    // Tri simple avec for et if
    for (let i = 0; i < sortedTrips.length; i++) {

        for (let j = i + 1; j < sortedTrips.length; j++) {

            if (sortedTrips[i].price > sortedTrips[j].price) {

                let temp = sortedTrips[i];
                sortedTrips[i] = sortedTrips[j];
                sortedTrips[j] = temp;
            }
        }
    }
    // Afficher les trajets
    for (let i = 0; i < sortedTrips.length; i++) {
        const trip = sortedTrips[i];
        console.log(
            trip.id + " | " +
            trip.departure + " -> " +
            trip.destination + " | " +
            trip.price + " DH"
        );
    }
}
// STATISTIQUES
function afficherStatistiques() {

    console.log("");
    console.log("=== STATISTIQUES ===");
    // Nombre total de tickets
    console.log(   "Nombre total de tickets : " + tickets.length);
    // Revenu total
    let revenuTotal = 0;
    for (let i = 0; i < tickets.length; i++) {

        revenuTotal = revenuTotal + tickets[i].price;
    }
    console.log("Revenu total : "+revenuTotal+" DH");
    // Trajet le plus vendu
    let meilleurTrajetId = null;
    let maxTickets = 0;
    for (let i = 0; i < trips.length; i++) {
        let nombreTickets = 0;
        for (let j = 0; j < tickets.length; j++) {
            if (tickets[j].tripid === trips[i].id) {
                nombreTickets++;
            }
        }
        if (nombreTickets > maxTickets) {
            maxTickets = nombreTickets;
            meilleurTrajetId = trips[i].id;
        }
    }
    if (meilleurTrajetId !== null) {
        const meilleurTrajet = trips.find(function(trip) {
            return trip.id === meilleurTrajetId;
        });
        console.log(
            "Trajet le plus vendu : " +
            meilleurTrajet.departure +
            " -> " +
            meilleurTrajet.destination
        );
        console.log(
            "Nombre de tickets : " +
            maxTickets
        );
    }
}
// MENU PRINCIPAL
while (true) {
    console.log("");
    console.log("=================================");
    console.log("        RAILWAY MANAGER");
    console.log("=================================");
    console.log("1. Afficher les trajets");
    console.log("2. Acheter un ticket");
    console.log("3. Afficher les tickets");
    console.log("4. Annuler un ticket");
    console.log("5. Rechercher un ticket");
    console.log("6. Filtrer les trajets");
    console.log("7. Trier les trajets");
    console.log("8. Afficher les statistiques");
    console.log("0. Quitter");
    const choice = prompt( "Entrez votre choix : " ).trim();
    switch (choice) {
        case "1":
            afficherTrajets();
            break;
        case "2":
            Acheterticket();
            break;
        case "3":
            Affichertickets();
            break;
        case "4":
            annulertickets();
            break;
        case "5":
            Rechercherticket();
            break;
        case "6":
            filtrertrajets();
            break;
        case "7":
            triertrajet();
            break;
        case "8":
            afficherStatistiques();
            break;
        case "0":
            console.log("Le programme est terminé.");
            process.exit();
        default:
            console.log("Le choix est invalide.");
    }
}