var me = 
{

	name: "Mehdi",
	last_name: "Hennaoui",
	birthey: "03/01/1985",
	github: "https://github.com/MehdiHenna",
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
	getField: function(){
		return this.adresse; 
	},
	setField: function(champ){
		this.adresse = champ;
	},
	getGithub: function(){
		return this.github;
	},
	setGithub: function(git){
		this.github = git;
		
	},
	getInfos: function(){
		return "bonjour je suis " + this.name + " " + this.last_name + " je suis né le " + this.birthey + " mon site github cest " + this.github + " mon metier c'est " + this.occupation;
	},
};
me.setField('moi');
console.log(me.getInfos());
console.log(me.getField());
console.log(me);