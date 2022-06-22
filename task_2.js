let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
}

function topSalary(salaries) {
	return Object.entries(salaries).reduce((max, itm) => itm[1] > max[1] ? itm : max, ['', 0])[0]
}

topSalary(salaries)
