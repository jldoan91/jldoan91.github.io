//initialize input fields and display divs
const contactName = $("#contactName");
const contactPhone = $("#contactPhone");
const contactEmail = $("#contactEmail");
const search = $("#searchVal");
const searchDisplay = $("#searchDisplay");
const contactDisplay = $("#contactList");
var contacts;
var contactList;

const storeList = function(val){
  localStorage.setItem("contacts", JSON.stringify(val));
}

//function to check localstorage for existing contact list
const listCheck = function() {
  contactList = JSON.parse(localStorage.getItem("contacts"));
  if (contactList) {
    return contactList;
  } else {
    return (contactList = []);
  }
};

//function to display list of contacts in local storage
const displayList = function() {
  $("#contactList").html("");
  //pull localstorage to get contact list
  contacts = JSON.parse(localStorage.getItem("contacts"));
  //if list of contacts is not undefined or null
  if (contacts) {
    //loop through contact list and display each contact
    contacts.forEach(function(val) {
      contactDisplay.append(
        `<li> Name: <span class="listName">${
          val.name
        }</span><br><span class="delete far fa-trash-alt"></span> Phone: ${
          val.phone
        }<br>Email: ${val.email}`
      );
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
    alert("all three fields are required!");
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
    contact.phone = contactPhone.val();
    contact.email = contactEmail.val();
    //push contact to array of contacts
    contactList.push(contact);
    contactName.val("");
    contactPhone.val("");
    contactEmail.val("");
    contactDisplay.append(
      `<li>Name: <span class="listName">${
        contact.name
      }</span><br><span class="delete far fa-trash-alt"></span> Phone: ${
        contact.phone
      }<br>Email: ${contact.email}`
    );
  }
  //add contact object to contact list array
  storeList(contactList);
  //call displayList function to refresh contact display
  // displayList();
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
      if (
        contact.name.toLowerCase().includes(search.val().toLowerCase()) ||
        contact.email.includes(search.val()) ||
        search.val().replace(/[^0-9]/gi, "") ===
          contact.phone.replace(/[^0-9]/gi, "")
      ) {
        searchDisplay.append(
          `<li>Name: <span class="listName">${
            contact.name
          }</span><br><span class="delete far fa-trash-alt"></span> Phone: ${
            contact.phone
          }<br> Email: ${contact.email}`
        );
        //check if the search value matches a contacts phone number without the leading digit
      } else if (
        search.val().replace(/[^0-9]/gi, "") ===
        contact.phone.replace(/[^0-9]/gi, "").substring(1)
      ) {
        searchDisplay.append(
          `<li>Name: <span class="listName">${
            contact.name
          }</span><br><span class="delete far fa-trash-alt"></span> Phone: ${
            contact.phone
          }<br> Email: ${contact.email}`
        );
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
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
});