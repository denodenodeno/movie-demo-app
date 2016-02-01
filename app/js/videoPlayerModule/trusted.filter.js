function trusted($sce) {

    'ngInject';

    return function (url) {
        return $sce.trustAsResourceUrl(url);
    }
}

export default trusted;