livrosModulo.controller('LivrosController', function ($scope, livrosServico,$localStorage) {
    //metodo de pesquisa
    $scope.pesquisaLivros = function () {
    	//utiliza o servico criado (URL) para fazer a busca
    	livrosServico.get({ q: $scope.termoPesquisa }, function (response) {
            //colocando a retorno da api (resultado) no array
            $scope.listaLivrosResult = response.items;
            //total de itens na pesquisa
            $scope.totalPesquisa = response.totalItems;            
        });
    }
    
    //localStorage para o favoritos
    if($localStorage.favoritos != null)
    {
         $scope.livrosFavoritos = $localStorage.favoritos;
    }else{
        $localStorage.favoritos = [];
        $scope.livrosFavoritos = [];
    }   

    $scope.adicionarFavorito = function(livro){            
       $localStorage.favoritos.push(livro);          
    };

    $scope.removerLivro = function(index) {
        $scope.livrosFavoritos.splice(index, 1);       
    }

    $scope.totalFavoritos = function(livro) {
        var total = 0;
        angular.forEach($scope.livrosFavoritos, function() {
            total = $scope.livrosFavoritos.length;
            total = $localStorage.favoritos.length;
        })
        return total;
    }    

    //paginacao (variaveis de configuracao)
     $scope.filteredTodos = []
    ,$scope.currentPage = 1
    ,$scope.numPerPage = 12
    ,$scope.maxSize = 5;

    $scope.$watch("currentPage + numPerPage", function() {
        var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                    , end = begin + $scope.numPerPage;

        if($scope.listaLivrosResult != null)
        {
            $scope.filteredTodos = $scope.listaLivrosResult.slice(begin, end);
        }    
    });
});