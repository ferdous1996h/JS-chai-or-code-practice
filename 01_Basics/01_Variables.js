const AccountID = 1445;
let AccountEmail = 'ferdous@gmail.com';
var AccountPassword = '123456';
AccountCity = 'Dhaka';
let accountstate

// AccountID = 2
console.log(AccountID);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

AccountEmail = 'hchcui@yahoo.com';
AccountPassword = '456789';
AccountCity = 'Mymensingh';
console.table([AccountID, AccountEmail, AccountPassword, AccountCity,accountstate]);
