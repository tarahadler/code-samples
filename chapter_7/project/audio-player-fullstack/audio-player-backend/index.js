const express = require('express'); 
const app = express();


//Part of Standard Setup to enable CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Part of Standard Setup (with Express)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//My Server-Side State
function Song(source, title, description, id) {
    this.source = source;
    this.title = title;
    this.description = description;
    this.id = id;
  }
  
  const songs = [
    new Song('/upstep.mp3', 'Upstep', 'Brutal beat and bulky bass are the foundation for a dubstep frenzy featuring synths, wailing guitar and jitters and glitches. Tempo: 140bpm', 0),
    new Song('/olympian.mp3', 'Olympian', 'An energetic, vibrant track featuring positive electric guitar licks and modern drums creates useful sports theme. Tempo: 130bpm', 1),
    new Song('/transmission.mp3', 'Transmission', 'Energetic electronic melody featuring modern drums, snaking bass and explosive electric guitar. Tempo: 120bpm', 2)
  ]

//Define the GET route to /songs
app.get('/songs', (req, res) => {
    res.json(songs); 
});


//Part of Standard Setup
app.listen(8080, () => {
    console.log("The server is listening on port 8080.");
})