import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
const API = {
  getUsers: function (language) {
    return new Promise((resolve, reject) => {
      axios
        .get("https://randomuser.me/api/?results=50&inc=name,picture,email,phone,dob")
        .then(res => {
          const users = res.results;
          const details = users.map(user => {
            return {
              name: user.name,
              image: user.picture,
              email: user.email,
              phone: phoneFormat(user.phone),
              bday: bdayFormat(user.dob)
            };
          });
          resolve(details);
        })
        .catch(err => reject(err));
    });
  },
};

//Change DOB to birthday (full DOB is data that shouldn't be everywhere)
function bdayFormat(date) {
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let d = new Date(date);
  let string = months[d.getMonth()] + " " + d.getDate()
  return string
}

//RegEx for formatting phone number from https://stackoverflow.com/questions/8358084/regular-expression-to-reformat-a-us-phone-number-in-javascript/41318684
function phoneFormat(number) {
  var cleaned = ('' + number).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return null
}

export default API