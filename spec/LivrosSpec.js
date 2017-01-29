describe("LivrosController",function () {
	
	it('Deve retornar o tamanho da lista',function(){
		var testeLivro = new Livros();
		
		var livrosFake = [{title: "livro teste 1", author: "felipe autor teste"},
					  	  {title: "livro teste 2", author: "felipe autor teste"},
					  	  {title: "livro teste 3", author: "felipe autor teste"}];
		
		var response = testeLivro.totalFavoritos(livrosFake);
		
		expect(response).toEqual(3);
	});

	it('Deve retornar sempre um numero inteiro',function(){
		var testeLivro = new Livros();
		var livrosFake = [];				
		var response = testeLivro.totalFavoritos(livrosFake);
		
		expect(response).toEqual(0);
	});
});
