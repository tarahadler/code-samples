//Notes: 
//1. In Express, the folder holding the templates must be called "views." In this case, the files it holds will be EJS files. 

//2. a) Bring Express into file using require. 
//2. b) Call Express like a fn to create a new server and store that server in the variable 'app'. 
const express = require('express'); 
const app = express();

//3. This is how we tell Express from where to serve static files. 
app.use(express.static('public'));

//4. With EJS, we never need to 'require; EJS. Instead,the line below tells Express: "Anytime someone tries to render, use EJS."
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index', {movies: getMovies()});
});

app.get('/movies/:movieId', (req, res) => {
    //Extract the value the client put in the movieId position
    //console.log(req.params); 
  
    let movies = getMovies();
    //Test to verify movies array is being logged: 
    //console.log(movies);
    let id = req.params.movieId;
    let resultMovie = {};
    
    //Look thru movies array until you find the movie with the id that matches the movieId 
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].movieId === id) {  
        //Test to verify matching movie is logged on click: 
        //console.log(movies[i])
        resultMovie = movies[i];
        break; 
        }
    }

    //Once you find the movie they are asking for, wrap it in an object and pass that object to res.render
    res.render('movies', {movie: resultMovie});
    //res.render('movies', {movies: req.params.movieId});
});



//Setting up sample data 
function getMovies() {
    return [{
        title: 'Good Bye Lenin!',
        year: '2003',
        rated: 'R',
        released: '14 May 2004',
        runtime: '2h 01min',  
        genre: 'Comedy, Drama, Romance',
        director: 'Wolfgang Becker',
        writer: 'Bernd Lichtenberg, Achim von Borries',
        actors: 'Daniel Brühl, Katrin Sass, Chulpan Khamatova',
        plot: "East Germany, the year 1989: A young man protests against the regime. His mother watches the police arresting him and suffers a heart attack and falls into a coma. Some months later, the GDR does not exist anymore and the mother awakes. Since she has to avoid every excitement, the son tries to set up the GDR again for her in their flat. But the world has changed a lot.",
        language: 'German, English, Russian',
        country: 'Germany',
        movieId: '01'
    },
    {
        title: 'Salt of the Earth',
        year: '2014',
        rated: 'PG-13',
        released: '27 March 2015',
        runtime: '1h 50min',  
        genre: 'Documentary, Biography, History',
        director: 'Juliano Ribeiro Salgado, Wim Wenders',
        writer: 'Wim Wenders, Juliano Ribeiro Salgado',
        actors: 'Sebastião Salgado, Wim Wenders, Lélia Wanick Salgado',
        plot: "For the last 40 years, the photographer Sebastião Salgado has been travelling through the continents, in the footsteps of an ever-changing humanity. He has witnessed some of the major events of our recent history; international conflicts, starvation and exodus. He is now embarking on the discovery of pristine territories, of wild fauna and flora, and of grandiose landscapes as part of a huge photographic project which is a tribute to the planet's beauty.",
        language: 'French, English, Portuguese',
        country: 'France, , Brazil, Italy',
        movieId: '02'
    },
    {
        title: 'Maria Full of Grance',
        year: '2004',
        rated: 'R',
        released: '06 August 2004',
        runtime: '1h 41min',  
        genre: 'Crime, Drama',
        director: 'Joshua Marston',
        writer: 'Joshua Marston',
        actors: 'Catalina Sandino Moreno, Guilied Lopez, Orlando Tobón',
        plot: "In a small village in Colombia, the pregnant seventeen-year-old Maria supports her family with her salary working in floriculture. She is fired, and with a total lack of prospects of finding a new job, she decides to accept the offer to work as a drug mule, flying to the USA with sixty-two pellets of cocaine in her stomach. Once in New York, things do not happen as planned.",
        language: 'Spanish, English',
        country: 'Colombia, USA, Ecuador',
        movieId: '03'
    },
    {
        title: 'The 100 Year-Old Man Who Climbed Out the Window and Disappeared',
        year: '2013',
        rated: 'R',
        released: '08 May 2015',
        runtime: '1h 54min',  
        genre: 'Adventure, Comedy',
        director: 'Felix Herngren',
        writer: 'Felix Herngren, Hans Ingemansson',
        actors: 'Robert Gustafsson, Iwar Wiklander, David Wiberg',
        plot: "Based on the internationally best-selling novel by Jonas Jonasson, the unlikely story of a 100-year-old man who decides it's not too late to start over. For most people it would be the adventure of a lifetime, but Allan Karlsson's unexpected journey is not his first. For a century he's made the world uncertain, and now he is on the loose again.",
        language: 'Swedish, German, English',
        country: 'Sweden, Russa, UK, Germany',
        movieId: '04'
    },
    {
        title: 'Strawberry and Chocolate',
        year: '1993',
        rated: 'R',
        released: '20 January 1995',
        runtime: '1h 48min',  
        genre: 'Comedy, Drama, Romance',
        director: 'Tomás Gutiérrez Alea, Juan Carlos Tabío',
        writer: 'Tomás Gutiérrez Alea, Senel Paz',
        actors: 'Jorge Perugorría, Vladimir Cruz, Mirta Ibarra',
        plot: "Diego, a cultivated, homosexual and skeptical young man, falls in love with a young heterosexual communist full of prejudices and doctrinal ideas. First come rejection and suspicion, but also fascination. It is a coming-of-age story, told through the development of a great friendship, which overcomes incomprehension and intolerance.",
        language: 'Spanish, English',
        country: 'Colombia, USA, Ecuador',
        movieId: '05'
    },
    {
        title: "Sarah's Key",
        year: '2010',
        rated: 'PG-13',
        released: '22 July 2011',
        runtime: '1h 51min',  
        genre: 'Drama, War',
        director: 'Gilles Paquet-Brenner',
        writer: 'Tatiana De Rosnay, Serge Joncour',
        actors: 'Kristin Scott Thomas, Mélusine Mayance, Niels Arestrup',
        plot: "One of the darkest moments in French history occurred in 1942 Paris when French officials rounded up over 10,000 Jews and placed them in local camps. Eventually over 8,000 were sent off to German concentration camps. As 10-year old Sarah and her family are being arrested, she hides her younger brother in a closet. After realizing she will not be allowed to go home, Sarah does whatever she can to get back to her brother. In 2009, a journalist named Julia is on assignment to write a story on the deported Jews in 1942. When she moves into her father-in-law's childhood apartment, she realizes it once belonged to the Strazynski family, and their daughter Sarah.",
        language: 'French, English, Italian, German, Yiddish',
        country: 'France',
        movieId: '06'
    },
    {
        title: 'Noi the Albino',
        year: '2003',
        rated: 'PG-13',
        released: '28 February 2003',
        runtime: '1h 33',  
        genre: 'Drama',
        director: 'Dagur Kári',
        writer: 'Dagur Kári',
        actors: 'Tómas Lemarquis, Þröstur Leó Gunnarsson, Elín Hansdóttir',
        plot: "Is he the village idiot or a genius in disguise? 17 year old Noi drifts through life on a remote fjord in the north of Iceland. In winter, the fjord is cut off from the outside world, surrounded by ominous mountains and buried under a shroud of snow. Noi dreams of escaping from this white-walled prison with Iris, a city girl who works in a local gas staion. But his clumsy attempts at escape spiral out of control and end in complete failure. Only a natural disaster will shatter Noi's universe and offer him a window into a better world.",
        language: 'Icelandic, French',
        country: 'Iceland, Germany, UK, Denmark',
        movieId: '07'
    },
    {
        title: 'The Lives of Others',
        year: '2006',
        rated: 'R',
        released: '30 March 2007',
        runtime: '2h 17',  
        genre: 'Drama, Thriller',
        director: 'Florian Henckel von Donnersmarck',
        writer: 'Florian Henckel von Donnersmarck',
        actors: 'Ulrich Mühe, Martina Gedeck, Sebastian Koch',
        plot: "Gerd Wiesler is an officer with the Stasi, the East German secret police. The film begins in 1984 when Wiesler attends a play written by Georg Dreyman, who is considered by many to be the ultimate example of the loyal citizen. Wiesler has a gut feeling that Dreyman can't be as ideal as he seems, and believes surveillance is called for. The Minister of Culture agrees but only later does Wiesler learn that the Minister sees Dreyman as a rival and lusts after his partner Christa-Maria. The more time he spends listening in on them, the more he comes to care about them. The once rigid Stasi officer begins to intervene in their lives, in a positive way, protecting them whenever possible. Eventually, Wiesler's activities catch up to him and while there is no proof of wrongdoing, he finds himself in menial jobs - until the unbelievable happens.",
        language: 'German',
        country: 'Germany',
        movieId: '08'
    }]
};



app.listen(8080, () => {
    console.log("Server Started on http://localhost:8080");
    console.log("Press CTRL + C to stop server");
});