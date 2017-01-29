//declaracao de um servico (request da API)
livrosModulo.factory('livrosServico', function ($resource) {
	//retorna um JSON
    return $resource('https://www.googleapis.com/books/v1/volumes',
        			 {maxResults: '12', jsonpCallbackParam: 'callback'},
        			 { get: { method: 'JSONP' }});   
});
