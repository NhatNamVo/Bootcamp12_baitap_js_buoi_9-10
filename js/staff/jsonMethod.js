function setLocalStorage(){
    localStorage.setItem('StaffList',JSON.stringify(stafflist.staffArr));
}

function getLocalStorage(){
    if(localStorage.getItem('StaffList')){
        var list = JSON.parse(localStorage.getItem("StaffList"));
        stafflist.staffArr = list.map((item)=>Staff.fromJson(item));
        Staffrender(stafflist.staffArr);
    }
}
getLocalStorage();