function Staff(_staffAccount,_staffName, _staffEmail, _staffPass, _staffDOB, _staffBaseSalary, _staffPosition, _staffWorkTime){
    this.staffAccount = _staffAccount;
    this.staffName = _staffName;
    this.staffEmail = _staffEmail;
    this.staffPass = _staffPass;
    this.staffDOB = _staffDOB;
    this.staffBaseSalary = _staffBaseSalary;
    this.staffPosition = _staffPosition;
    this.staffWorkTime = _staffWorkTime;
}

Staff.prototype.staffTotalSalary = function(){
    switch(this.staffPosition){
        case "Giám đốc":
            return this.staffBaseSalary*3;
        case "Trưởng phòng":
            return this.staffBaseSalary*2;
        case "Nhân viên":
            return this.staffBaseSalary;
    }
};
Staff.fromJson = function(json){
    return new Staff(json.staffAccount,json.staffName,json.staffEmail, json.staffPass,json.staffDOB,json.staffBaseSalary,json.staffPosition,json.staffWorkTime);
}
Staff.prototype.staffValue = function(){
    if(this.staffWorkTime>=192){
        return 'Xuất sắc';
    }
    else if(this.staffWorkTime>=176){
        return 'Giỏi';
    }
    else if(this.staffWorkTime>=160){
        return 'Khá';
    }
    else{
        return 'Trung bình';
    }
}