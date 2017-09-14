//Примитивные типы
var number = 123;
number = 123.456; //тип number

alert(number / 0); //infinity

alert("not number" * number);//NaN

var string = "string with \"";
string = 'string with \''; //тип string

var boolean = true;
boolean = false; // тип boolean

var nullType = null; //тип null

var undef;
undef = undefined;//явное назначение undefined
alert(undef);//тип undefined
//Объекты
var human = {
    name: 'Alex',
    secondName: 'Danilov',
    weignt: 70
};

alert("human name: " + human.name + "human secondName: " + human.secondName);
//typOF

alert("number: " + typeof number + 
        "\nstring: " + typeof string + 
        "\nboolean: " + typeof(boolean) +
        "\nnull bug!!: " + typeof nullType +
        "\nhuman: " + typeof human +
        "\nfunction: " + typeof function(){});