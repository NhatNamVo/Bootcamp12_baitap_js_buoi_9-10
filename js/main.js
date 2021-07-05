var stafflist = new StaffList();
var validator = new Validation();
function getEle(id){
    return document.getElementById(id);
}
// print staff table
function Staffrender(staff){
    var stafftable = '';
    staff.map(function( item){
        console.log( item);
        stafftable += `
            <tr>
                <td>${item.staffAccount}</td>
                <td>${item.staffName}</td>
                <td>${item.staffEmail}</td>
                <td>${item.staffWorkTime}</td>
                <td>${item.staffPosition}</td>
                <td>${item.staffTotalSalary()}</td>
                <td>${item.staffValue()}</td>
                <td>
                    <button class="btn btn-info" data-toggle="modal"
                    data-target="#myModal" onclick="UpdateStaff('${item.staffAccount}')">Sửa</button>
                    <button class="btn btn-danger" onclick="DeleteStaff('${item.staffAccount}')">Xoá</button>
                </td>
            </tr>
        `
    });
    getEle('tableDanhSach').innerHTML = stafftable;
}
getEle('btnThem').addEventListener('click',function(){
    getEle('btnThemNV').style.display = 'block';
    getEle('btnCapNhat').style.display = 'none';
    deleteContentNote();
    resetStaffInput();
});

getEle('btnCapNhat').addEventListener('click',function(){
    for (var [index,item] of stafflist.staffArr.entries()){
        if(index == inArr){
            item.staffAccount = getEle('tknv').value;
            item.staffName = getEle('name').value;
            item.staffEmail = getEle('email').value;
            item.staffPass = getEle('password').value;
            item.staffDOB = getEle('datepicker').value;
            item.staffBaseSalary = getEle('luongCB').value;
            item.staffPosition = getEle('chucvu').value;
            item.staffWorkTime = getEle('gioLam').value;
            break;
        };
    }
    var isVal = true;
    isVal &= validator.blankValueCheck(getEle('tknv').value,'tbTKNV')  && validator.characterLengthCheck(getEle('tknv').value,4,6,'tbTKNV','Hãy nhập tối đa 4-6 ký số');
    isVal &= validator.blankValueCheck(getEle('name').value,'tbTen') && validator.stringTypeCheck(getEle('name').value,'tbTen','Hãy nhập ký tự chữ');
    isVal &= validator.blankValueCheck(getEle('email').value,'tbEmail') && validator.emailCheck(getEle('email').value,'tbEmail','Email chưa hợp lệ');
    isVal &= validator.blankValueCheck(getEle('password').value,'tbMatKhau') && validator.passwordCheck(getEle('password').value,'tbMatKhau');
    isVal &= validator.blankValueCheck(getEle('datepicker').value,'tbNgay') && validator.dateCheck(getEle('datepicker').value,'tbNgay');
    isVal &= validator.blankValueCheck(getEle('luongCB').value,'tbLuongCB') && validator.numberCheck(getEle('luongCB').value,1000000,20000000,'tbLuongCB','Mức lương cơ bản trong khoảng 1 000 000-20 000 000');
    isVal &= validator.positionCheck(getEle('chucvu').value,'tbChucVu');
    isVal &= validator.blankValueCheck(getEle('gioLam').value,'tbGiolam') && validator.numberCheck(getEle('gioLam').value,80,200,'tbGiolam','Mức giờ trong tháng khoảng 80-200h');
    if(!isVal) return;
    Staffrender(stafflist.staffArr);
    setLocalStorage();
});
getEle('btnTimNV').addEventListener('click',function(){
    var findStaffType = getEle('searchName').value;
    if(findStaffType !=''){
        var staffTypeList = stafflist.staffArr.filter(function(item){
            return item.staffValue() == findStaffType;
        });
        Staffrender(staffTypeList);
    }
    else{
        Staffrender(stafflist.staffArr);
    } 
});
getEle('searchName').addEventListener('input',function(){
    if(getEle('searchName').value == ""){
        Staffrender(stafflist.staffArr); 
    }
})
getEle('btnThemNV').addEventListener('click',function(){
    var account = getEle('tknv').value;
    var name = getEle('name').value;
    var email = getEle('email').value;
    var password = getEle('password').value;
    var date = getEle('datepicker').value;
    var salary = parseFloat(getEle('luongCB').value);
    var position = getEle('chucvu').value;
    var worktime = parseFloat(getEle('gioLam').value);
    var isVal = true;
    isVal &= validator.blankValueCheck(account,'tbTKNV')  && validator.characterLengthCheck(account,4,6,'tbTKNV','Hãy nhập tối đa 4-6 ký số');
    isVal &= validator.blankValueCheck(name,'tbTen') && validator.stringTypeCheck(name,'tbTen','Hãy nhập ký tự chữ');
    isVal &= validator.blankValueCheck(email,'tbEmail') && validator.emailCheck(email,'tbEmail','Email chưa hợp lệ');
    isVal &= validator.blankValueCheck(password,'tbMatKhau') && validator.passwordCheck(password,'tbMatKhau');
    isVal &= validator.blankValueCheck(date,'tbNgay') && validator.dateCheck(date,'tbNgay');
    isVal &= validator.blankValueCheck(salary,'tbLuongCB') && validator.numberCheck(salary,1000000,20000000,'tbLuongCB','Mức lương cơ bản trong khoảng 1 000 000-20 000 000');
    isVal &= validator.positionCheck(position,'tbChucVu');
    isVal &= validator.blankValueCheck(worktime,'tbGiolam') && validator.numberCheck(worktime,80,200,'tbGiolam','Mức giờ trong tháng khoảng 80-200h');
    if(!isVal) return;



    var newstaff = new Staff(account,name,email,password,date,salary,position,worktime);
    stafflist.addStaff(newstaff);
    Staffrender(stafflist.staffArr);
    setLocalStorage();
    resetStaffInput();
});
getEle('tknv').addEventListener('input',function(){
    validator.blankValueCheck(getEle('tknv').value,'tbTKNV') && validator.characterLengthCheck(getEle('tknv').value,4,6,'tbTKNV','Hãy nhập tối đa 4-6 ký số');
});
getEle('name').addEventListener('input',function(){
    validator.blankValueCheck(getEle('name').value,'tbTen') && validator.stringTypeCheck(getEle('name').value,'tbTen','Hãy nhập ký tự chữ');
});
getEle('password').addEventListener('input',function(){
    validator.blankValueCheck(getEle('password').value,'tbMatKhau') && validator.passwordCheck(getEle('password').value,'tbMatKhau');
});
getEle('luongCB').addEventListener('input',function(){
    validator.blankValueCheck(getEle('luongCB').value,'tbLuongCB') && validator.numberCheck(getEle('luongCB').value,1000000,20000000,'tbLuongCB','Mức lương cơ bản trong khoảng 1 000 000-20 000 000');
});
getEle('gioLam').addEventListener('input',function(){
    validator.blankValueCheck(parseFloat(getEle('gioLam').value),'tbGiolam') && validator.numberCheck(parseFloat(getEle('gioLam').value),80,200,'tbGiolam','Mức giờ trong tháng khoảng 80-200h');
});

function resetStaffInput(){
    getEle('tknv').value='';
    getEle('name').value='';
    getEle('email').value='';
    getEle('password').value='';
    getEle('datepicker').value='';
    getEle('luongCB').value='';
    getEle('chucvu').value='Chọn chức vụ';
    getEle('gioLam').value='';
}
