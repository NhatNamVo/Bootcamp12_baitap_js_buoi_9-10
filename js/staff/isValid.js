function Validation(){
    this.blankValueCheck = function(value,spanID){
        if(!value){
            getEle(spanID).innerHTML = 'Xin hãy nhập thông tin';
            return false;
        }
        else{
            getEle(spanID).innerHTML = '';
            return true;
        }
    };

    this.characterLengthCheck = function(value,min,max,spanID,mess){
        if(value.length >= min && value.length <= max){
            getEle(spanID).innerHTML = '';
            return true;
        }
        else{
            getEle(spanID).innerHTML = mess;
            return false;
        }
    };

    this.stringTypeCheck = function(value,spanID,mess){
        var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");

        if (pattern.test(value)) {
            getEle(spanID).innerHTML = '';
            return true;
        }
        getEle(spanID).innerHTML = mess;
        return false;
    };

    this.emailCheck = function(value,spanID,mess){
        var el = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (el.test(value)){
            getEle(spanID).innerHTML = '';
            return true;
        }
        else{
            getEle(spanID).innerHTML = mess;
            return false;
        }
    };

    this.passwordCheck = function(value,spanID){
        var lengthVal = /^([a-zA-Z0-9\d@$!%*?&]{6,10})$/;
        var UpcaseLeter = /(?=.*?[A-Z])/;
        var numberLeter = /(?=.\d)/;
        var specialLeter = /(?=.*[@$!%*?&])/;
        var numberNote = (numberLeter.test(value))? '':'Ít nhất một ký tự số. '
        if(lengthVal.test(value)){
            var lengthNote = '';
        }
        else{
            lengthNote = "6-10 ký tự. "
        }
        if (UpcaseLeter.test(value)){
            var upcaseNote = '';
        }
        else{
            upcaseNote = 'Ít nhất một chữ in hoa. ';
        }
        var specialNote = (specialLeter.test(value))? '':'Ít nhất một ký tự đặc biệt.';
        getEle(spanID).innerHTML = lengthNote + numberNote + upcaseNote + specialNote;
        if(lengthNote == '' && upcaseNote == '' && specialNote == ''){
            return true;
        }
        else{
            return false;
        }
    };

    this.dateCheck = function(value,spanID){
        var dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
        if(dateRegex.test(value)){
            getEle(spanID).innerHTML = '';
            return true;
        }
        else{
            getEle(spanID).innerHTML = 'Không đúng định dạng MM/DD/YY';
            return false;
        }
    }

    this.numberCheck = function(value,min,max,spanID,mess){
        if(value>=min && value <= max){
            getEle(spanID).innerHTML = '';
            return true;
        }
        else{
            getEle(spanID).innerHTML = mess;
            return false;
        }
    }

    this.positionCheck = function(value,spanID){
        if(value == 'Chọn chức vụ'){
            getEle(spanID).innerHTML = 'Hãy chọn chức vụ cho nhân viên';
            return false;
        }
        else{
            getEle(spanID).innerHTML = '';
            return true;
        }
    }
}

function deleteContentNote(){
    var parentEleNote = document.getElementsByClassName('modal-body')[0]
    var noteTextLength = parentEleNote.getElementsByClassName('sp-thongbao').length;
    for(var i = 0 ; i<noteTextLength; i++){
        parentEleNote.getElementsByClassName('sp-thongbao')[i].innerHTML = '';
    }
}
