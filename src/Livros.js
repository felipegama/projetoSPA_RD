function Livros() {
	
 	var clazz = { 		
 		totalFavoritos : function(listaFav){
 			var total = 0;
 			if(listaFav !=null) total=listaFav.length;
 			return total;
 		}
 	};
return clazz;	
}
