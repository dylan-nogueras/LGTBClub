/*jshint esversion: 6 */
var user = require("./User.js");

// Controlador de User
// En principio se usará un array de usuarios
// Más adelante se conectará con una base de datos de donde se añadirán o eliminarán los elementos

class UserController{

	constructor(){
		this.usersList = [];
	}
	
	getUsersList(){
		return this.usersList;
	}
	
	// Comprobar si un usuario existe ya
	isAdded(person){
		var added = false;
		let pos = this.usersList.indexOf(person);
		if(pos != -1){
			added = true;
		}
		return added;
	}
	
	// Añadir a un usuario HU13
	addUser(member){
		if(!this.isAdded(member)){
			this.usersList.push(member);
		}else{
			console.log("Ese usuario ya está añadido");
		}
	}
	
	// Eliminar a un usuario HU14
	deleteUser(member){
		let pos = this.usersList.indexOf(member);
		this.usersList.splice(member, 1);
	}
}

module.exports = UserController;