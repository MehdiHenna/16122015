var me = 
{

	name: "Mehdi",
	last_name: "Hennaoui",
	birthey: "03/01/1985",
	github: "MehdiHenna",
	occupation: "web developeur", 
	getFullName : function(){
		return this.name + " " + this.last_name;
	},
	getOccupation: function(){
		return this.occupation;
	},
	setName: function(n){
		this.name = n;

	},
	getField: function(ah){
		return this[ah]; 
	},
	setField: function(cle, valeur){
		this[cle] = valeur;
	},
	getGithub: function(){
		return "https://github.com/" + this.github;
	},
	setGithub: function(git){
		this.github = git;
		
	},
	getInfos: function(){
		return "bonjour je suis " + this.setName() + " je suis né le " + this.birthey + " mon site github cest " + this.github + " mon metier c'est " + this.occupation;
	},
};

console.log(me.github);
console.log(me.getGithub());








