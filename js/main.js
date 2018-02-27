var num = "";
var num1 = "";
var num2 = "";
var inp;
var index = 0;
var record1 = 0;
var record2 = 0;
var status = 0;
var n = 1000000000000000;
var sign;
var com1;
var com2;
var result;

$(function(){
    $(".btn").click(function(){
        switch($(this).attr("text")){
            case "+":
                computer();
                sign = 1;
                signs("+");
                break;
            case "-":
                computer();
                sign = 2;
                signs("-");
                break;
            case "*":
                computer();
                sign = 3;
                signs("*");
                break;
            case "/":
                computer();
                sign = 4;
                signs("/");
                break;
            case "=":
                computer();
                sign = 0;
                console.log(record1);
                console.log(com1);
                break;
            case "(":
                break;
            case ")":
                break;
            case "c":
                num = "";
                num1 = "";
                num2 = "";
                index = 0;
                record1 = 0;
                record2 = 0;
                status = 0;
                sign = 0;

                $("input").val(num);
                console.log($("input").val());
                break;
            case "b":
                if(index > 0){
                    index--;
                    num = $("input").val().substr(0, index);
                    console.log(index);
                    $("input").val(num);
                    console.log($("input").val());
                    if(status == 0){
                        if(record1 > 0){
                            record1--;
                            num1 = num1.substr(0, record1);
                        }
                    }
                    else if(record2 > 0){
                        record2--;
                        num2 = num2.substr(0, record2);
                    }
                    
                    if(index == record1){
                        status = 0;
                    }
                }
                break;
            default:
                if(status == 0){
                    inp = $(this).attr("text");
                    num += inp;
                    num1 += inp;
                    record1++;
                    index++;
                    $("input").val(num);
                    console.log($("input").val());
                }
                else{
                    inp = $(this).attr("text");
                    num += inp;
                    num2 += inp;
                    record2++;
                    index++;
                    $("input").val(num);
                    console.log($("input").val());
                }
                break;
        }
        
    });
});

function computer(){
    com1 = parseFloat(num1);
    com2 = parseFloat(num2);

    switch(sign){
        case 1:
        num = (com1 * n + com2 * n) / n;
        break;
        case 2:
        num = com1 - com2;
        break;
        case 3:
        num = com1 * com2;
        break;
        case 4:
        num = com1 / com2;
        break;
    }

    $("input").val(num);

    num1 = num1.replace(num1, num);
    num2 = "";
    record1 = num1.length;
    record2 = 0;
    status = 0;
    index = record1;
}

function signs(s){
    status = 1;
    index++;
    inp = s;
    num += inp;
    $("input").val(num);
    console.log($("input").val());
}