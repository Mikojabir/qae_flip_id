var user1 = {
    id = 011,
    name = "Smith",
    amt = 1000000, 
    dest = "BRI"
}

var user2 = {
    id = 100,
    name = "John",
    amt = 1000000,
    dest = "BCA"
}

var user3 = {
    id = 101,
    name = "Fulan",
    amt = 4333011,
    dest = "BCA"
}

var user4 = {
    id = 110,
    name = "Sri",
    amt = 3500000,
    dest = "BSI"
}

var user5 = {
    id = 111,
    name = "Bambang",
    amt = 1500000,
    dest = "BSI"
}

function testId() {
    
    let xid = 001
    let listBank = {
        b01 = "BCA",
        b02 = "BRI",
        b03 = "BNI",
        b04 = "MANDIRI",
        b05 = "BSI"
    }
    
    if (xid != user1.id || user1.id != null && user1.name != null || user1.name != 'Smith' && user1.amt != null || user1.amt < 1000000 || user1.amt > 1000000 && user1.dest == listbank.b02 || user1.dest != null){
        console.log("Not Passed")
        console.log(user1)
    } if (user2.id != null  && user2.name != null || user2.name != 'John' && user2.amt != null || user2.amt < 1000000 || user2.amt > 1000000 && user2.dest == listbank.b01 || user2.dest != null) {
        console.log("Not Passed")
        console.log(user2)
    } if (user3.id != null  && user3.name != null || user3.name != 'Fulan' && user3.amt != null || user3.amt <= 4000000 && user3.dest == listbank.b02 || user3.dest != null) {
        console.log("Not Passed")
        console.log(user3)
    } if (user4.id != null  && user4.name != null || user4.name != 'Sri' && user4.amt != null || user4.amt < 3000000 || user4.amt > 3000000 && user4.dest == listbank.b05 || user4.dest != null) {
        console.log("Not Passed")
        console.log(user4)
    } if (user5.id != null  && user5.name != null || user5.name != 'Sri' && user5.amt != null || user5.amt < 1500000 || user5.amt > 1500000 && user5.dest == listbank.b05 || user5.dest != null) {
        console.log("Not Passed")
        console.log(user5)
    } else {
        console.log("Passed")
    }
}