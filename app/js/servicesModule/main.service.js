function MainService($q) {
    'ngInject';

    var mainService = {};

    ////Service collections
    mainService.movies = [];
    mainService.favoriteMovies = [];


    ////Methods
    mainService.getData = getData;


    //////////
    /**
     * @function
     * @name getData
     * @description Sets service collection of movies.
     */
    function getData() {
        return $q.when(returnData())
            .then(function (res) {
                mainService.movies = res;
            })
            .catch(function (err) {
                console.log(err);
            })
    }


    /**
     * @function
     * @name returnData
     * @returns {Array} movies
     */
    function returnData() {
        return [{
            "id": "1",
            "title": "Elephant's Dream",
            "description": "Elephants Dream is the story of two strange characters exploring a capricious and seemingly infinite machine. The elder, Proog, acts as a tour-guide and protector, happily showing off the sights and dangers of the machine to his initially curious but increasingly skeptical protege Emo. As their journey unfolds we discover signs that the machine is not all Proog thinks it is, and his guiding takes on a more desperate aspect.",
            "meta": {
                "releaseYear": "2006",
                "directors": [{
                    "name": "Bassam Kurdali"
                }],
                "actors": [{
                    "name": "Cas Jansen"
                }, {
                    "name": "Tygo Gernandt"
                }]
            },
            "images": {
                "cover": "cover-elephantsdream.png",
                "placeholder": "placeholder-elephantsdream-1080p.png"
            },
            "streams": [{
                "type": "webm",
                "url": "http://lachy.id.au/lib/media/elephantsdream/Elephants_Dream-360p-Stereo.webm"
            }]
        }, {
            "id": "2",
            "title": "Sintel",
            "description": "The film follows a girl named Sintel who is searching for a baby dragon she calls Scales. A flashback reveals that Sintel found Scales with its wing injured and helped care for it, forming a close bond with it.",
            "meta": {
                "releaseYear": "2010",
                "directors": [{
                    "name": "Colin Levy"
                }],
                "actors": [{
                    "name": "Cas Jansen"
                }, {
                    "name": "Tygo Gernandt"
                }]
            },
            "images": {
                "cover": "cover-sintel.png",
                "placeholder": "placeholder-sintel-1080p.png"
            },
            "streams": [{
                "type": "mp4",
                "url": "http://media.w3.org/2010/05/sintel/trailer.mp4"
            }, {
                "type": "webm",
                "url": "http://media.w3.org/2010/05/sintel/trailer.webm"
            }, {
                "type": "ogv",
                "url": "http://media.w3.org/2010/05/sintel/trailer.ogv"
            }]
        }, {
            "id": "3",
            "title": "Elephant's Dream",
            "description": "Elephants Dream is the story of two strange characters exploring a capricious and seemingly infinite machine. The elder, Proog, acts as a tour-guide and protector, happily showing off the sights and dangers of the machine to his initially curious but increasingly skeptical protege Emo. As their journey unfolds we discover signs that the machine is not all Proog thinks it is, and his guiding takes on a more desperate aspect.",
            "meta": {
                "releaseYear": "2006",
                "directors": [{
                    "name": "Bassam Kurdali"
                }],
                "actors": [{
                    "name": "Cas Jansen"
                }, {
                    "name": "Tygo Gernandt"
                }]
            },
            "images": {
                "cover": "cover-elephantsdream.png",
                "placeholder": "placeholder-elephantsdream-1080p.png"
            },
            "streams": [{
                "type": "webm",
                "url": "http://lachy.id.au/lib/media/elephantsdream/Elephants_Dream-360p-Stereo.webm"
            }]
        }, {
            "id": "4",
            "title": "Sita Sings the Blues",
            "description": "An animated version of the epic Indian tale of Ramayana set to the 1920s jazz vocals of Annette Hanshaw.",
            "meta": {
                "releaseYear": "2008",
                "directors": [{
                    "name": "Nina Paley"
                }],
                "actors": [{
                    "name": " Annette Hanshaw"
                }, {
                    "name": "Aseem Chhabra"
                }, {
                    "name": "Bhavana Nagulapally"
                }]
            },
            "images": {
                "cover": "cover-sitasingstheblues.png",
                "placeholder": "placeholder-sitasingstheblues-1080p.png"
            },
            "streams": [{
                "type": "webm",
                "url": "http://lachy.id.au/lib/media/sitasingstheblues/Sita_Sings_the_Blues-360p-Stereo.webm"
            }]
        },{
            "id": "5",
            "title": "Big Buck Bunny",
            "description": "Big Buck wakes up in his rabbit hole, only to be pestered by three critters, Gimera, Frank and Rinky. When Gimera kills a butterfly, Buck decides on a payback Predator-style",
            "meta": {
                "releaseYear": "2008",
                "directors": [{
                    "name": "Sacha Goedegebure"
                }],
                "actors": []
            },
            "images": {
                "cover": "cover-bigbuckbunny.png",
                "placeholder": "placeholder-bigbuckbunny-1080p.png"
            },
            "streams": [{
                "type": "mp4",
                "url": "http://media.w3.org/2010/05/bunny/movie.mp4"
            }, {
                "type": "ogv",
                "url": "http://media.w3.org/2010/05/bunny/movie.ogv"
            }]
        }]

    }

    return mainService;

}

export default MainService;