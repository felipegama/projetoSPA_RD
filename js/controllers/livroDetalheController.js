livrosModulo.controller('LivroDetalheController', function ($scope, livrosServico,$routeParams) { 
    //metodo pesquisa para o livro especifico
    $scope.pesquisaLivros = function () {
    	livrosServico.get({ q: $routeParams.id }, function (response) {
            $scope.livro = response.items;            
        });  	        
    }
    //executar o metodo ao carregar o arquivo
    $scope.pesquisaLivros();
});