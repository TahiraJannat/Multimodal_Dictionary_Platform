var Dictonary_Word = [];
var Dictonary_Word_Main = [];
var i;
var mypagination = "A";
var no_search = "false";
var x;


function GetSelectedValue() {
    var e = document.getElementById("letter");
    var result = e.options[e.selectedIndex].value;
    mypagination = result;

    document.getElementById("result").innerHTML = "Selected Word: " + result;
    //  var bid = this.id; // button ID 
    // var trid = $(this).closest('tr').attr('id');
    //console.log("hello word "+bid + " "+this.text());
    clear_page();

}


//console.log(localStorage.getItem("hello" + 'www'));
$.getJSON("data.json", function (My_json_obj) {

}).done(function (My_json_obj) {

    $(My_json_obj).each(function (index, value) {

        Dictonary_Word.push(value.word.charAt(0).toUpperCase() + value.word.slice(1));
        Dictonary_Word_Main.push(value.word.charAt(0).toUpperCase() + value.word.slice(1));

    });

    Dictonary_Word.sort();
    load_Word();

    $("table td").click(function () {
        // alert($(this).text()+" :) " + My_json_obj[5].word);


    });

    $(document).on('click', 'td', function () {
        // alert('clicked'+$(this).text());
        var allindx = Dictonary_Word_Main.indexOf($(this).text());
        localStorage.setItem("word", Dictonary_Word_Main[allindx]);
        // console.log("clicked: "+" ind4x: "+allindx+localStorage.getItem("word"));
        localStorage.setItem("synonym", My_json_obj[allindx].synonym);
        localStorage.setItem("example", My_json_obj[allindx].example);
        localStorage.setItem("video", My_json_obj[allindx].video);
        window.location.href = "word.html";

        //    console.log(+allindx+localStorage.getItem("word")+
        //    "<br> "+ " "+
        //    localStorage.getItem("synonym")+
        //    "<br> "+ " "+
        //    localStorage.getItem("example")+
        //    "<br>"+ " "+
        //    localStorage.getItem("video")

        //    );

    });

});



function load_Word() {

    for (i = 0; i < Dictonary_Word.length; i++) {
        var w = Dictonary_Word[i];


        if (w[0].toLowerCase() == mypagination.toLowerCase()) {
            // console.log(w[0] + " page ass " + mypagination);

            var markup = "<tr  ><td>" + Dictonary_Word[i] + "</td></tr>";
            // $("table").attr('id','myDataTable').addClass('class1 class2');
            $("table tbody").append(markup);
        }

    }

}

function clear_page() {
    var tables_row = document.getElementsByTagName("tr").length;
    //  console.log((tables_row) + " clear here");

    i = 0;

    for (i = 0; i < tables_row; i++) {

        //   console.log(i+" helli");
        $("#tbl > tbody").empty();
    }

    if (no_search == "false") {
        load_Word();
    }
    else {

        no_search = "false";
        searchres();

    }

}

function search() {

    no_search = "true";
    clear_page();

}

function searchres() {
    var s = document.getElementById("search");
    //  console.log(s.value);

    document.getElementById("result").innerHTML = "All Search Result for: " + s.value;

    mypagination = s.value;
    var count = 0;
    for (i = 0; i < Dictonary_Word.length; i++) {
        w = Dictonary_Word[i];

        //str.includes("ld")
        // console.log(w.includes("bad"));


        if (w.toLowerCase().includes(mypagination.toLowerCase())) {
            count++;
            // console.log(w[0] + " page ass " + mypagination);


            markup = "<tr  ><td >" + Dictonary_Word[i] + "</td></tr>";
            // $("table").attr('id','myDataTable').addClass('class1 class2');
            $("table tbody").append(markup);
        }

    }
    if (count <= 0) {
        markup = "<tr  ><td>" + "Sorry No Word Found" + "</td></tr>";
        // $("table").attr('id','myDataTable').addClass('class1 class2');
        $("table tbody").append(markup);
    }
}
