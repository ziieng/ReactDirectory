//splitting off the sorting functions for space

const Sorter = {
  Asc: function (arr, label) {
    let newArr = arr.sort(function (a, b) {
      let comparison = 0;
      if (a[label] > b[label]) {
        comparison = 1;
      } else if (a[label] < b[label]) {
        comparison = -1;
      }
      return comparison;
    })
    return newArr
  },

  Desc: function (arr, label) {
    let newArr = arr.sort(function (a, b) {
      let comparison = 0;
      if (a[label] > b[label]) {
        comparison = -1;
      } else if (a[label] < b[label]) {
        comparison = 1;
      }
      return comparison;
    })
    return newArr
  },

  Month: function (arr, dir) {
    //heavily modified version of https://discuss.codecademy.com/t/array-sorting-based-on-another-array/400282/2
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    arr.forEach(el => el.bday = el.bday.split(" "))
    arr.sort(function (a, b) {
      return months.indexOf(a.bday[0]) - months.indexOf(b.bday[0]) || a.bday[1] - b.bday[1]
    })
    arr.forEach(el => el.bday = el.bday.join(" "))
    if (dir === "desc") {
      return arr.reverse()
    }
    return arr
  }
}

export default Sorter