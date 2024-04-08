//================================================================================================
//  NE PAS MODIFIER
//================================================================================================
// Description :    Cette fonction affiche les cartes de 1 à 12 (dame) de la sorte reçue en 
//                    paramètre.
//================================================================================================
function placerLesCartes1a12(pSorte)
{	
    $("li").removeClass();
    
	$("li").each( function(index) {
		var numeroCarte = index + 1;
		
		$(this).addClass(pSorte + numeroCarte);
        $(this).attr("data-valeur",numeroCarte);
	});
}
//================================================================================================
//  FIN DU NE PAS MODIFIER
//================================================================================================


//================================================================================================
// 4 points
//================================================================================================
// Description :    Cette fonction fait afficher les cartes de 1 à 12 (dame) de coeur en utilisant
//                  la fonction placerLesCartes1a12.
//================================================================================================
function question2A()
{
	// À COMPLETER 01 (/4) 
    // Appelez la fonction placerLesCartes1a12 en lui passant comme information la sorte de carte "coeur"
	placerLesCartes1a12("coeur");
	
}
//================================================================================================


//================================================================================================
// 5 points
//================================================================================================
// Description :    Cette fonction affiche le 3 de trèfle dans toutes les cartes et ajuste
//                  l'attribut data-valeur en conséquence.
//================================================================================================
function question2B()
{
    // Retire toutes les classes de tous les éléments de type li
    $("li").removeClass();

    
	// À COMPLETER 01 (/5) 
    // Changez tous les éléments de type li pour des 3 de trèfles en ajoutant
	//	 la classe trefle3
    // Changez également la valeur de l'attribut data-valeur à "3" pour toutes les cartes. 
    // ATTENTION: NE PAS UTILISER DE EACH
	$("li").addClass("trefle3");
	$("li").attr("data-valeur",3);
	
	
}
//================================================================================================


//================================================================================================
// 11 points
//================================================================================================
// Description :    Cette fonction calcule la valeur totale des cartes et l'affiche.
//================================================================================================
function question2C()
{	
	// À COMPLETER 01 (/1): 
    // Déclarez une variable appelée "total" et initialisez-la à 0, elle servira à calculer le total des cartes
	var total=0; 
    
    // Pour chaque carte (élément de type li)
	$("li").each( function() {
        
		// À COMPLETER 02 (/1): 
		// Déclarez une variable appelée "resultat"
		var resultat; 
		
		
		// À COMPLETER 03 (/3) : 
        // Mettre, dans la variable resultat, la valeur de l'attribut data-valeur 
		// de l'élément courant 		
		resultat = $(this).attr("data-valeur");
		
		
		// Transforme la variable resultat en nombre
		var valeurCarte = parseInt(resultat);
		
		
		// À COMPLETER 04 (/3) :
		// Ajoutez la valeur de la carte (variable valeurCarte) au total
		total+=valeurCarte;
		
		
	});
    
	// À COMPLETER 05 (/3) : 
    // Ajustez le texte de l'élément ayant le id info selon le total calculé (variable total)
    // Le texte doit être comme celui-ci:  "La somme des cartes est : X"
    // où X est le total calculé
	$("#info").text("La somme des cartes est : "+total);
	
}
//================================================================================================


//================================================================================================
// 5 points
//================================================================================================
// Description :    Cette fonction remplace toutes les cartes par des cartes aléatoires de carreau
//================================================================================================
function question2D()
{ 	
    // Retire toutes les classes de tous les éléments de type li
    $("li").removeClass();

    
    // Pour chaque carte (élément de type li)
	$("li").each( function() {
        // Récupère dans une variable un nombre aléatoire entre 1 et 13 inclus
		var numeroCarte = randNumber(13) + 1;
        
        
		// À COMPLETER 01 (/3) : 
        // Ajoutez comme classe de l'élément courant une chaine comme celle-ci: carreauX
        // où X est le nombre aléatoire récupéré ci-haut dans une variable (utilisez la concaténation)
		$(this).addClass("carreau" + numeroCarte);
		
        
        
		// À COMPLETER 02 (/2) : 
        // Modifiez la valeur de l'attribut data-valeur de l'élément courant pour le 
        // nombre aléatoire récupéré ci-haut dans une variable
		$(this).attr("data-valeur" , numeroCarte);
		
        
	});
}
//================================================================================================


//================================================================================================
//  NE PAS MODIFIER
//================================================================================================
// Description :    Cette fonction fourni un nombre aléatoire compris entre 0 et pMax - 1.
//
// Paramètres :
//      pMax:           Le nombre maximum à retourner, non inclus.
//================================================================================================
function randNumber(pMax)
{
	return (Math.floor(pMax * Math.random()));
}
//================================================================================================


//================================================================================================
$(document).ready(function() {
    $("button").on("click", function() {
        window[$(this).attr("id")].call();
    });
});
//================================================================================================
//  FIN DU NE PAS MODIFIER
//================================================================================================
