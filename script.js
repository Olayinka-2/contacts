let contacts = [];
let submit = document.getElementById('submit');
let div = document.getElementById("second_container_inner");
let input = document.getElementById("input__text");
let  text = document.createElement("p");
let text_node;

// input.addEventListener("keypress", saveContact);


submit.addEventListener("click", saveContact);

function saveContact(even) {
    even.preventDefault();
    let text = document.getElementById("input__text");
    let Num = document.getElementById("input__tel");

    let newContact = {
        name: text.value,
        TelNumber: Num.value
    };

    if ((input.value.length > 0) && (localStorage.getItem("Users") == null)) {
        newContact.id = 1;
        contacts.push(newContact);
		localStorage.setItem("Users", JSON.stringify(contacts));
    } else if ((input.value.length > 0) && localStorage.getItem("Users") !== null) {
            contacts = JSON.parse(localStorage.getItem("Users"));
			newContact.id = 1;
			contacts.push(newContact);
			localStorage.setItem("Users", JSON.stringify(contacts));
    }
    text.value = "";
    Num.value = "";
}

//  Display Function

    if(localStorage.getItem("Users") !== null) {
                contacts = JSON.parse(localStorage.getItem("Users"));
                for(element of contacts){
                    text = document.createElement("p");
                    text_node = document.createTextNode(element.name + " - " + element.TelNumber);
                    text.appendChild(text_node);
                    div.appendChild(text);
                    text.className = "man";
        }
    }

function search() {
	contacts = JSON.parse(localStorage.getItem("Users"));
	let search = document.getElementById("search_text");
	let div2 = document.getElementById("third_container_inner");
	for(let i = 0; i < contacts.length; i++) {
		if(search.value == contacts[i].name) {
			let text = document.createElement("p");
			let text_node = document.createTextNode(contacts[i].name + " - " + contacts[i].TelNumber);
			text.appendChild(text_node);
			div2.appendChild(text);
		}
	}
    search.value = "";
}


let paras = document.querySelectorAll('p');



for (let i = 0; i < paras.length; i++) {
    paras[i].addEventListener('dblclick', () => {
        contacts.splice(i, 1);
        localStorage.setItem("Users", JSON.stringify(contacts));
    });
}

