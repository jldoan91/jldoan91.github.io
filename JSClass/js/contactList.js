//initialize input fields and display divs
const contactName = $("#contactName");
const contactNN = $("#contactNickname");
const contactPhone = $("#contactPhone");
const contactEmail = $("#contactEmail");
const search = $("#searchVal");
const searchDisplay = $("#searchDisplay");
const contactDisplay = $("#contactList");
var contacts;
var contactList;

//function to append contacts to display list
const appendContacts = function(list, contact){
  list.append(`<li><span class="delete far fa-trash-alt"></span> Name: <span class="listName">${contact.name}</span><br>Phone: ${contact.phone}<br>Email: ${contact.email}`);
}

//function to display list of contacts in local storage
const displayList = function() {
  $("#contactList").html("");
  //pull localstorage to get contact list
  contacts = JSON.parse(localStorage.getItem("contacts"));
  //if list of contacts is not undefined or null
  if (contacts) {
    //loop through contact list and display each contact
    contacts.forEach(function(val) {
      appendContacts(contactDisplay, val);
    });
  }
};
//call function to display contacts
displayList();

//add eventlistner to add contact button
$("#addContactBtn").on("click", function() {
  listCheck();
  //if any fields blank alert all are required
  if (
    contactName.val().length === 0 ||
    contactPhone.val().length === 0 ||
    contactEmail.val().length === 0
  ) {
    alert("Name, Phone number, and Email are required!");
    //verify there's at least 10 digits in the phone number and no letters
  } else if (
    contactPhone.val().replace(/[^0-9]/gi, "").length < 10 ||
    contactPhone.val().replace(/[^a-z]/gi, "").length > 0
  ) {
    alert("Phone number must have at least 10 digits and no letters");
  } else {
    //build a contact object of the values entered
    var contact = {};
    //build single contact from input entries
    contact.name = contactName.val();
    contact.nickname = contactNN.val();
    contact.phone = contactPhone.val();
    contact.email = contactEmail.val();
    //push contact to array of contacts
    contactList.push(contact);
    //clear entry fields
    contactName.val("");
    contactNN.val("");
    contactPhone.val("");
    contactEmail.val("");
    //add contact to display
    appendContacts(contactDisplay, contact);
  }
  //add contact object to contact list array
  storeList(contactList);
});

//add event listener search button
$("#searchBtn").on("click", function() {
  //initialize search display to be blank
  searchDisplay.html("");
  //initialize the contacts variable from local storage
  contacts = JSON.parse(localStorage.getItem("contacts"));
  if (search.val().length === 0) {
    alert("Your search cannot be empty");
  } else {
    //loop through the list of contacts in localstorage
    contacts.forEach(function(contact) {
      //check if the searched name, email, or phone number matches a stored contact
      if (contact.name.toLowerCase().includes(search.val().toLowerCase()) || contact.nickname.toLowerCase().includes(search.val().toLowerCase()) || contact.email.includes(search.val()) || search.val().replace(/[^0-9]/gi, "") === contact.phone.replace(/[^0-9]/gi, "")) {
        //display search results
        appendContacts(searchDisplay, contact);
        //check if the search value matches a contacts phone number without the leading digit
      } else if (
        search.val().replace(/[^0-9]/gi, "") ===
        contact.phone.replace(/[^0-9]/gi, "").substring(1)
      ) {
        //display search results
        appendContacts(searchDisplay, contact);
      }
    });
  }
});

//add event listener to clear button to clear out localstorage and display list
$("#clear").on("click", function() {
  localStorage.clear();
  contactDisplay.html("");
  contacts = [];
});

//add event listener to delete button on each contact
$("ul").on("click", ".delete", function(event) {
  contacts = JSON.parse(localStorage.getItem("contacts"));
  let clickedName = $(this).parent().children(".listName").html();
  //filter through contacts to match the name of the clicked contact
  contactList = contacts.filter(function(contact) {
    return contact.name !== clickedName;
  });
  //set localstorage to new array without the clicked contact
  storeList(contactList);
  $(this).parent().fadeOut(500, function() {
      $(this).remove();
    });
});

//function to check localstorage for existing contact list
const listCheck = function() {
  contactList = JSON.parse(localStorage.getItem("contacts"));
  if (contactList) {
    return contactList;
  } else {
    return (contactList = []);
  }
};

//function to store list of contacts in localstorage
const storeList = function(list) {
  localStorage.setItem("contacts", JSON.stringify(list));
};