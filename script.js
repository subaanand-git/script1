function calc(){
    var n1,n2,n3,n4,n5,total,per;
    n1=parseInt(document.form1.tamil.value);
    n2=parseInt(document.form1.english.value);
    n3=parseInt(document.form1.maths.value);
    n4=parseInt(document.form1.sciencs.value);
    n5=parseInt(document.form1.social.value);
    total=n1+n2+n3+n4+n5;
    per=Math.round(total/500*100);
    document.form1.total.value=total;
    document.form1.percentage.value=per;
}

