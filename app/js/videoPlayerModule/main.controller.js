function MainCtrl($sce, $rootScope, $scope, $mdDialog, MainService) {
    'ngInject';
    
    const context = this;
    
    ////Scope variables
    context.title = 'Demo App';
    context.movies = MainService.movies;
    context.favoriteMovies = MainService.favoriteMovies;


    ////Methods
    context.moviePlayClickHandler = moviePlayClickHandler;
    context.movieMoreInfoClickHandler = movieMoreInfoClickHandler;
    context.movieToggleToFavoritesClickHandler = movieToggleToFavoritesClickHandler;
    
    ////
    init();
    
    /**
     * @function
     * @name init
     * @description Controller init function
     */
    function init() {
        context.playerActiveMovie = MainService.movies[1];
        _setCurrentMovie();
    }
    
    /**
     * @function
     * @name moviePlayClickHandler
     * @description Handle movie play button click event
     * @parameter {Object} movie
     */
    function moviePlayClickHandler(movie) {
        context.playerActiveMovie = movie;
        _setCurrentMovie();
    }
    
    /**
     * @function
     * @name movieMoreInfoClickHandler
     * @description Handle movie info button click event. Triggers modal info window
     * @parameter {Object} movie
     * @returns
     */
    function movieMoreInfoClickHandler(movie) {
        $rootScope.currentMovie = movie;
        $mdDialog.show({
                controller: MainCtrl,
                template: `<md-dialog ng-cloak>
                            <md-dialog-content layout="row">
                              <div class="md-dialog-content">
                                 <div class="app__movie-modal__image">
                                    <img ng-src="assets/images/{{$root.currentMovie.images.cover}}"
                                             alt="{{$root.title}}">
                                 </div>
                                 <div class="app__movie-modal__description--meta">
                                    <h2><span class="app__movie-modal__heading-meta">Movie title: </span>{{$root.currentMovie.title}}</h2>
                                     <h3><span class="app__movie-modal__heading-meta">Released: </span>{{$root.currentMovie.meta.releaseYear}}</h3>
                                     <p>
                                        <span class="app__movie-modal__heading-meta">Movie description: </span>
                                        {{$root.currentMovie.description}}
                                     </p>
                                 </div>
                                 <div class="app__movie-modal__description--crew">
                                     <div ng-if="$root.currentMovie.meta.directors.length > 0">
                                        <span class="app__movie-modal__heading-meta">Director</span>
                                        <ul>
                                            <li ng-repeat="director in $root.currentMovie.meta.directors track by $index">{{director.name}}</li>
                                         </ul>
                                     </div>
                                     <div ng-if="$root.currentMovie.meta.actors.length > 0">
                                        <span class="app__movie-modal__heading-meta">Actors</span>
                                        <ul>
                                            <li ng-repeat="actor in $root.currentMovie.meta.actors track by $index">{{actor.name}}</li>
                                         </ul>
                                     </div>
                                 </div>
                              </div>
                            </md-dialog-content>
                                <md-dialog-actions layout="row">
                                  <md-button class="mr-16"
                                             ng-click="close()">
                                    Dismiss
                                  </md-button>
                                </md-dialog-actions>
                        </md-dialog>`,
                parent: angular.element(document.body),
                clickOutsideToClose: true
            });
    }
    
    /**
     * @function
     * @name movieAddToFavoritesClickHandler
     * @description Handle movie favorite button click event. Toggles button state.
     * @parameter {Object} movie
     * @returns
     */
    function movieToggleToFavoritesClickHandler(movie) {
        if (movie.isFavorite) {
            var _i = MainService.favoriteMovies.indexOf(movie);
            if (_i > -1) MainService.favoriteMovies.splice(_i, 1);
        } else {
            MainService.favoriteMovies.push(movie);
        }

        movie.isFavorite = !movie.isFavorite;
    }


    /**
     * @function
     * @name _setCurrentMovie
     * @description Set current playing movie.
     * @parameter {Object} movie
     */
    function _setCurrentMovie() {
        context.config = {
            sources: [],
            plugins: {
                poster: 'assets/images/' + context.playerActiveMovie.images.placeholder
            }
        };

        context.playerActiveMovie.streams.forEach((stream) => {
            var _obj = {
                src: $sce.trustAsResourceUrl(stream.url),
                type: 'video/' + stream.type
            };
            context.config.sources.push(_obj);
        });
    }

    ////modal methods
    $scope.close = function () {
        $mdDialog.cancel();
    };

}

export default MainCtrl;
