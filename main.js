function submit(){
    const fname = document.registerForm.fname.value;
    const lname = document.registerForm.lname.value;
    const fullname = fname + lname;
    document.getElementById('data').innerHTML = fullname
    console.log(fullname);
}

function countPara(){
    const totalpara = document.getElementsByTagName("p")
    const totalHead = document.getElementsByTagName("h1");
    alert(`Total p tags are: ${totalpara.length}`);
    console.log(`Total h1 tags are: ${totalHead.length}`)
}

function totalElememt(){
    const gender = document.getElementsByName("gender");
    console.log(gender.length);
    alert("Total genders " + gender.length);
}

function printvalue(){
    const name = document.form1.name.value
    const address = document.form1.address.value
    console.log("Hello " + name + address)
    alert(`Hello: Mr.${name}\n Address: ${address}`)
}