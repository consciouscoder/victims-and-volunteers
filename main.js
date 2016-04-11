
var victims = 0
var victims = parseInt(prompt('How many disaster victims?', '0'))

var volunteers = 0
var volunteers = parseInt(prompt('How many volunteers?', '0'))


var victim_arr = [], volunteer_arr = []

for (var i = 0; i < victims; i++) {
    
    var victim = {}

    victim.vname = prompt('Victim Name?')
    victim.phone = prompt('Victim Phone?')
    victim.street = prompt('Victim Street?')
    
    victim_arr.push(victim)
    
}

for (var i = 0; i < volunteers; i++) {
    
    var volunteer = {}

    volunteer.vname = prompt('Volunteer Name?')
    volunteer.phone = prompt('Volunteer Phone?')
    volunteer.street = prompt('Volunteer Street?')
    
    volunteer_arr.push(volunteer)
    
}


// var aString = ""

// var alertString = function(i) {
//     aString +=  ('Victim ' + i + '\n\n \
//                 Name: ' + victim_arr[i].vname +'\n \
//                 Phone: ' + victim_arr[i].phone + '\n \
//                 Street: ' + victim_arr[i].street + '\n\n')
                
//     return aString
// }

var aStringHead = ""
var aString = ""
var alertString = ""

    aStringHead = ('\n\nThere are ' + victims + ' persons in need.\n \
                There are ' + volunteers + ' volunteers.\n\n')

for (var i = 0; i < victim_arr.length; i++) {
    
    
    aString = ('Victim ' + parseInt(i+1) + '\n\n \
                Name: ' + victim_arr[i].vname +'\n \
                Phone: ' + victim_arr[i].phone + '\n \
                Street: ' + victim_arr[i].street + '\n\n')
                
    alertString += aString
    
}

for (var i = 0; i < volunteer_arr.length; i++) {
    
    
    aString = ('Volunteer ' + parseInt(i+1) + '\n\n \
                Name: ' + volunteer_arr[i].vname +'\n \
                Phone: ' + volunteer_arr[i].phone + '\n \
                Street: ' + volunteer_arr[i].street + '\n\n')
                
    alertString += aString
    
}

// // for (var i = 0; i < volunteers; i++) {
    
// //     alertString = alertString + ('Volunteer ' + i+1 + '\n\n \
// //                                   Name: ' + volunteer.vname +'\n \
// //                                   Phone: ' + volunteer.phone + '\n \
// //                                   Street: ' + volunteer.street + '\n\n')
    
// }


alert(aStringHead + alertString)