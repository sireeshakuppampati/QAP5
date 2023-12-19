fetch('./EMPLOY.json')
  .then(response => response.json())
  .then(data => {
    // Loop through an array in the JSON data
    data.forEach(employee => {
      console.log(getFullName(employee));
      console.log(getBenifits(employee));
      console.log(getAddress(employee));
      console.log(getEmployement(employee));
      formatHTML(employee);
    });
  })
  .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

  function getFullName(employee) {
    return `${employee.empfname} ${employee.emplname}`;
  }

  function getBenifits(employee) {
    if(employee.age >=21 && employee.age <=50)    
    return `${employee.empfname} is ${employee.age} years old and eligible for company benifits.`
    else if(employee.age<21 && employee.age >50) 
    return `${employee.empfname} is ${employee.age} years old and is not eligible for company benifits.`
    else 
    return `${employee.empfname} is retired`
}

  function getAddress(employee) {
    return `${employee.empfname} Phone number is ${employee.phonenumber} and full address is  ${employee.address}`;
  }

  function getEmployement(employee) {
    return `${employee.empfname} Employement Type is  ${employee.status} and Salary is ${employee.salary}`;
  }

  function formatHTML(employee){
    const newEmploy1 = document.createElement(`div`);
    const newEmploy2 = document.createElement(`div`);
    const newEmploy3 = document.createElement(`div`);
    const newEmploy4 = document.createElement(`div`);
    newEmploy1.classList.add(`employee`);
    newEmploy2.classList.add(`employee`);
    newEmploy3.classList.add(`employee`);
    newEmploy4.classList.add(`employee`);
    newEmploy1.textContent = `${getFullName(employee)}`;
    document.querySelector(`body`).appendChild(newEmploy1);
    newEmploy2.textContent = `${getAddress(employee)}`;
    document.querySelector(`body`).appendChild(newEmploy2); 
    newEmploy3.textContent = `${getBenifits(employee)}`;
    document.querySelector(`body`).appendChild(newEmploy3);
    newEmploy4.textContent = `${getEmployement(employee)}`;
    document.querySelector(`body`).appendChild(newEmploy4);

}

 