function check(){
    var c = 0;
    var qa = document.quiz.q1.value;
    var qb = document.quiz.q2.value;
    var qc = document.quiz.q3.value;
    var qd = document.quiz.q4.value;
    var qe = document.quiz.q5.value;
    var qf = document.quiz.q6.value;
    var qg = document.quiz.q7.value;
    var qh = document.quiz.q8.value;
    var qi = document.quiz.q9.value;
    var qj = document.quiz.q10.value;
    if(qa == "a" || qa == "b"){
        c += 10;
    }
    if(qb == "a"){
        c += 0;
    }
    if(qb == "b"){
        c += 5;
    }
    if(qb == "c"){
        c += 8;
    }
    if(qb == "d"){
        c += 10;
    }
    if(qc == "a"){
        c += 10;
    }
    if(qc == "b"){
        c += 5;
    }
    if(qc == "c"){
        c += 0;
    }
    if(qd == "a"){
        c += 10;
    }
    if(qd == "b"){
        c += 5;
    }
    if(qd == "c"){
        c += 0;
    }
    if(qe == "a"){
        c += 10;
    }
    if(qe == "b"){
        c += 5;
    }
    if(qe == "c"){
        c += 0;
    }
    if(qf == "a"){
        c += 10;
    }
    if(qf == "b"){
        c += 5;
    }
    if(qf == "c"){
        c += 0;
    }
    if(qg == "a"){
        c += 10;
    }
    if(qg == "b"){
        c += 5;
    }
    if(qg == "c"){
        c += 0;
    }
    if(qh == "a"){
        c += 10;
    }
    if(qh == "b"){
        c += 5;
    }
    if(qh == "c"){
        c += 0;
    }
    if(qi == "a"){
        c += 10;
    }
    if(qi == "b"){
        c += 5;
    }
    if(qi == "c"){
        c += 0;
    }
    if(qj == "a"){
        c += 10;
    }
    if(qj == "b"){
        c += 5;
    }
    //document.write(`<h1 class="style1">"Chances of user suffering from COVID-19 are " + c + "%" </h1>`);
    document.write('<h1 class="style1" style="color:blue; text-align:center; ">' + "Chances of user suffering from COVID-19 are " + c + "%" + '</h1>');
}