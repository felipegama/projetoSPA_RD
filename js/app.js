var livrosModulo = angular.module('livrosModulo', ['ngResource','ngRoute','ngStorage','ui.bootstrap']);
	//configuracao de rotas
	livrosModulo.config(['$routeProvider', '$sceProvider', function ($routeProvider, $sceProvider) {
		
		//para permitir o acesso a URL EXTERNA
		$sceProvider.enabled(false);

		$routeProvider.when('/livros', 
				{templateUrl: 'view/livrosGrid.html',
				 controller: 'LivrosController'});

		$routeProvider.when('/livroDetalhe/:id', 
				{templateUrl: 'view/livrosDetalhe.html',
				 controller: 'LivroDetalheController'});

		$routeProvider.when('/favoritos', 
				{templateUrl: 'view/livrosFavoritos.html',
				 controller: 'LivrosController'});

		$routeProvider.otherwise({redirectTO: '#!/livros'});
		
	}]);