var inArr = 0;
function StaffList(){
    this.staffArr = [];
    this.addStaff = function(staff){
        this.staffArr.push(staff);
    }
}

function DeleteStaff(account){
    var staffAcc = stafflist.staffArr.findIndex(function(item,index){
        return item.staffAccount == account;
    });
    stafflist.staffArr.splice(staffAcc,1);
    Staffrender(stafflist.staffArr);
    setLocalStorage();
}

function UpdateStaff(account){
    getEle('btnThemNV').style.display = 'none';
    getEle('btnCapNhat').style.display = 'block';
    deleteContentNote();
    resetStaffInput();
    for (var [index,item] of stafflist.staffArr.entries()){
        inArr = index;
        if(item.staffAccount == account){
            getEle('tknv').value = item.staffAccount;
            getEle('name').value = item.staffName;
            getEle('email').value = item.staffEmail;
            getEle('password').value = item.staffPass;
            getEle('datepicker').value = item.staffDOB;
            getEle('luongCB').value = item.staffBaseSalary;
            getEle('chucvu').value = item.staffPosition;
            getEle('gioLam').value = item.staffWorkTime;
            break;
            };
    }
}