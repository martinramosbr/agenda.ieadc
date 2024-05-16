var today = new Date();

var events = [{
    id: "imwyx6S",
    name: "Event #3",
    description: "Lorem ipsum dolor sit amet.",
    date: today.getMonth() + 1 + "/18/" + today.getFullYear(),
    type: "event"
}, {
    id: "9jU6g6f",
    name: "Holiday #1",
    description: "Lorem ipsum dolor sit amet.",
    date: today.getMonth() + 1 + "/10/" + today.getFullYear(),
    type: "holiday"
}, {
    id: "0g5G6ja",
    name: "Event #1",
    description: "Lorem ipsum dolor sit amet.",
    date: [today.getMonth() + 1 + "/2/" + today.getFullYear(), today.getMonth() + 1 + "/5/" + today.getFullYear()],
    type: "event",
    everyYear: !0
}, {
    id: "y2u7UaF",
    name: "Holiday #3",
    description: "Lorem ipsum dolor sit amet.",
    date: today.getMonth() + 1 + "/23/" + today.getFullYear(),
    type: "holiday"
}, {
    id: "dsu7HUc",
    name: "Birthday #1",
    description: "Lorem ipsum dolor sit amet.",
    date: new Date(),
    type: "birthday"
}, {
    id: "dsu7HUc",
    name: "Birthday #2",
    description: "Lorem ipsum dolor sit amet.",
    date: today.getMonth() + 1 + "/27/" + today.getFullYear(),
    type: "birthday"
}];

var active_events = [];

var week_date = [];

var curAdd, curRmv;

function getWeeksInMonth(a, b) {
    var c = [], d = new Date(b, a, 1), e = new Date(b, a + 1, 0), f = e.getDate();
    var g = 1;
    var h = 7 - d.getDay();
    while (g <= f) {
        c.push({
            start: g,
            end: h
        });
        g = h + 1;
        h += 7;
        if (h > f) h = f;
    }
    return c;
}


$(document).ready(function () {
    $("#evoCalendar").evoCalendar({
        format: "dd MM, yyyy",
        titleFormat: "MM",
        language: "pt",

        calendarEvents: [
            {
                id: "a1",
                name: "Culto de Ceia",
                description: "Pr. Nilson Depetris | Cop. Martinho, 18:30H",
                date: "January/13/2024",
                type: "event",
                everyYear: !0
            },
            {
                id: "a2",
                name: "Culto de Ceia",
                description: "Pr. Nilson Depetris, 19H",
                date: "February/10/2024",
                type: "event",
                everyYear: !0
            },
            {
                id: "a3",
                name: "Culto de Ceia",
                description: "Pr. Nilson Depetris, 19H",
                date: "March/09/2024",
                type: "event",
                everyYear: !0
            },
            {
                id: "a4",
                name: "Culto de Ceia",
                description: "Pr. Nilson Depetris, 19H",
                date: "April/13/2024",
                type: "event",
                everyYear: !0
            },
            {
                id: "a5",
                name: "Culto de Ceia",
                description: "Pr. Nilson Depetris, 19H",
                date: "May/11/2024",
                type: "event",
                everyYear: !0
            },
            {
                id: "a6",
                name: "Culto de Ceia",
                description: "Pr. Nilson Depetris, 19H",
                date: "June/08/2024",
                type: "event",
                everyYear: !0
            },
            {
                id: "a7",
                name: "Culto de Ceia",
                description: "Pr. Nilson Depetris, 19H",
                date: "July/13/2024",
                type: "event",
                everyYear: !0
            },
            {
                id: "a8",
                name: "Culto de Ceia",
                description: "Pr. Nilson Depetris, 19H",
                date: "August/10/2024",
                type: "event",
                everyYear: !0
            },
            {
                id: "a9",
                name: "Culto de Ceia",
                description: "Pr. Nilson Depetris, 19H",
                date: "September/14/2024",
                type: "event",
                everyYear: !0
            },
            {
                id: "a10",
                name: "Culto de Ceia",
                description: "Pr. Nilson Depetris, 19H",
                date: "October/12/2024",
                type: "event",
                everyYear: !0
            },
            {
                id: "a11",
                name: "Culto de Ceia",
                description: "Pr. Nilson Depetris, 19H",
                date: "November/09/2024",
                type: "event",
                everyYear: !0
            },
            {
                id: "a12",
                name: "Culto de Ceia",
                description: "Pr. Nilson Depetris, 22H",
                date: "December/31/2024",
                type: "event",
                everyYear: !0
            },

            {
                id: "b1",
                name: "Culto de Evangelismo",
                description: "Pr. Nilson Depetris | Cop. Martinho, 18:30H",
                date: "January/21/2024",
                type: "birthday",
                everyYear: !0
            },
            // {
            //     id: "b2",
            //     name: "Culto de Evangelismo",
            //     description: "Pr. Nilson Depetris | Cop. Martinho, 18:30H",
            //     date: "February/10/2024",
            //     type: "birthday",
            //     everyYear: !0
            // },
            {
                id: "b3",
                name: "Culto de Evangelismo",
                description: "Pr. Nilson Depetris | Cop. Martinho, 18:30H",
                date: "March/24/2024",
                type: "birthday",
                everyYear: !0
            },
            {
                id: "b4",
                name: "Culto de Evangelismo",
                description: "Pr. Nilson Depetris | Cop. Martinho, 18:30H",
                date: "April/21/2024",
                type: "birthday",
                everyYear: !0
            },
            // {
            //     id: "b5",
            //     name: "Culto de Evangelismo",
            //     description: "Pr. Nilson Depetris | Cop. Martinho, 18:30H",
            //     date: "May/11/2024",
            //     type: "birthday",
            //     everyYear: !0
            // },
            {
                id: "b6",
                name: "Culto de Evangelismo",
                description: "Pr. Nilson Depetris | Cop. Martinho, 18:30H",
                date: "June/09/2024",
                type: "birthday",
                everyYear: !0
            },
            {
                id: "b7",
                name: "Confraternização",
                description: "Evangelismo | Cop. Martinho, 19:00H",
                date: "July/27/2024",
                type: "birthday",
                everyYear: !0
            },
            {
                id: "b72",
                name: "Confraternização ",
                description: "Evangelismo | Cop. Martinho, 18:30H",
                date: "July/28/2024",
                type: "birthday",
                everyYear: !0
            },
            {
                id: "b8",
                name: "Culto de Evangelismo",
                description: "Pr. Nilson Depetris | Cop. Martinho, 18:30H",
                date: "August/18/2024",
                type: "birthday",
                everyYear: !0
            },
            {
                id: "b9",
                name: "Culto de Evangelismo",
                description: "Pr. Nilson Depetris | Cop. Martinho, 18:30H",
                date: "September/15/2024",
                type: "birthday",
                everyYear: !0
            },
            // {
            //     id: "b10",
            //     name: "Culto de Evangelismo",
            //     description: "Pr. Nilson Depetris | Cop. Martinho, 18:30H",
            //     date: "October/01/2024",
            //     type: "birthday",
            //     everyYear: !0
            // },
            {
                id: "b11",
                name: "Culto de Evangelismo",
                description: "Pr. Nilson Depetris | Cop. Martinho, 18:30H",
                date: "November/17/2024",
                type: "birthday",
                everyYear: !0
            },
            {
                id: "b12",
                name: "Culto de Evangelismo",
                description: "Pr. Nilson Depetris | Cop. Martinho, 18:30H",
                date: "December/15/2024",
                type: "birthday",
                everyYear: !0
            },

            {
                id: "c1",
                name: "Culto da Familia",
                description: "Pr. Nilson Depetris | Pd. Reginaldo, 18:30H",
                date: "January/07/2024",
                type: "holiday",
                everyYear: !0
            },
            // {
            //     id: "c2",
            //     name: "Culto da Familia",
            //     description: "Pr. Nilson Depetris | Pd. Reginaldo, 18:30H",
            //     date: "February/10/2024",
            //     type: "holiday",
            //     everyYear: !0
            // },
            // {
            //     id: "c3",
            //     name: "Culto da Familia",
            //     description: "Pr. Nilson Depetris | Pd. Reginaldo, 18:30H",
            //     date: "March/24/2024",
            //     type: "holiday",
            //     everyYear: !0
            // },
            {
                id: "c4",
                name: "Culto da Familia",
                description: "Pr. Nilson Depetris | Pd. Reginaldo, 18:30H",
                date: "April/07/2024",
                type: "holiday",
                everyYear: !0
            },
            {
                id: "c5",
                name: "Culto da Familia",
                description: "Pr. Nilson Depetris | Pd. Reginaldo, 18:30H",
                date: "May/05/2024",
                type: "holiday",
                everyYear: !0
            },
            {
                id: "c6",
                name: "Culto da Familia",
                description: "Pr. Nilson Depetris | Pd. Reginaldo, 18:30H",
                date: "June/02/2024",
                type: "holiday",
                everyYear: !0
            },
            {
                id: "c7",
                name: "Culto da Familia",
                description: "Pr. Nilson Depetris | Pd. Reginaldo, 19:00H",
                date: "July/07/2024",
                type: "holiday",
                everyYear: !0
            },
            {
                id: "c72",
                name: "Confraternização",
                description: "DECADC | Pd. Reginaldo, 19H",
                date: "August/03/2024",
                type: "holiday",
                everyYear: !0
            },
            {
                id: "c8",
                name: "Confraternização",
                description: "DECADC | Pd. Reginaldo, 18:30H",
                date: "August/04/2024",
                type: "holiday",
                everyYear: !0
            },
            {
                id: "c9",
                name: "Culto da Familia",
                description: "Pr. Nilson Depetris | Pd. Reginaldo, 18:30H",
                date: "September/01/2024",
                type: "holiday",
                everyYear: !0
            },
            {
                id: "c10",
                name: "Culto da Familia",
                description: "Pr. Nilson Depetris | Pd. Reginaldo, 18:30H",
                date: "October/06/2024",
                type: "holiday",
                everyYear: !0
            },
            {
                id: "c11",
                name: "Culto da Familia",
                description: "Pr. Nilson Depetris | Pd. Reginaldo, 18:30H",
                date: "November/03/2024",
                type: "holiday",
                everyYear: !0
            },
            {
                id: "c12",
                name: "Culto da Familia",
                description: "Pr. Nilson Depetris | Pd. Reginaldo, 18:30H",
                date: "December/01/2024",
                type: "holiday",
                everyYear: !0
            },
            {
                id: "d1",
                name: "Culto de Missões",
                description: "Pr. Nilson Depetris | Pd. Reginaldo, 18:30H",
                date: "January/07/2024",
                type: "holiday",
                everyYear: !0
            },
            // {
            //     id: "d2",
            //     name: "Culto da Familia",
            //     description: "Pr. Nilson Depetris | Pd. Reginaldo, 18:30H",
            //     date: "February/10/2024",
            //     type: "holiday",
            //     everyYear: !0
            // },
            // {
            //     id: "d3",
            //     name: "Culto da Familia",
            //     description: "Pr. Nilson Depetris | Pd. Reginaldo, 18:30H",
            //     date: "March/24/2024",
            //     type: "holiday",
            //     everyYear: !0
            // },
            {
                id: "d4",
                name: "Culto da Familia",
                description: "Pr. Nilson Depetris | Pd. Reginaldo, 18:30H",
                date: "April/07/2024",
                type: "holiday",
                everyYear: !0
            },
            {
                id: "d5",
                name: "Culto da Familia",
                description: "Pr. Nilson Depetris | Pd. Reginaldo, 18:30H",
                date: "May/05/2024",
                type: "holiday",
                everyYear: !0
            },
            {
                id: "d6",
                name: "Culto da Familia",
                description: "Pr. Nilson Depetris | Pd. Reginaldo, 18:30H",
                date: "June/02/2024",
                type: "holiday",
                everyYear: !0
            },
            {
                id: "d7",
                name: "Culto da Familia",
                description: "Pr. Nilson Depetris | Pd. Reginaldo, 19:00H",
                date: "July/07/2024",
                type: "holiday",
                everyYear: !0
            },
            {
                id: "d72",
                name: "Confraternização",
                description: "DECADC | Pd. Reginaldo, 19H",
                date: "August/03/2024",
                type: "holiday",
                everyYear: !0
            },
            {
                id: "d8",
                name: "Confraternização",
                description: "DECADC | Pd. Reginaldo, 18:30H",
                date: "August/04/2024",
                type: "holiday",
                everyYear: !0
            },
            {
                id: "d9",
                name: "Culto da Familia",
                description: "Pr. Nilson Depetris | Pd. Reginaldo, 18:30H",
                date: "September/01/2024",
                type: "holiday",
                everyYear: !0
            },
            {
                id: "d10",
                name: "Culto da Familia",
                description: "Pr. Nilson Depetris | Pd. Reginaldo, 18:30H",
                date: "October/06/2024",
                type: "holiday",
                everyYear: !0
            },
            {
                id: "d11",
                name: "Culto da Familia",
                description: "Pr. Nilson Depetris | Pd. Reginaldo, 18:30H",
                date: "November/03/2024",
                type: "holiday",
                everyYear: !0
            },
            {
                id: "d12",
                name: "Culto da Familia",
                description: "Pr. Nilson Depetris | Pd. Reginaldo, 18:30H",
                date: "December/01/2024",
                type: "holiday",
                everyYear: !0
            },


        ]
    });




    $("#evoCalendar").evoCalendar("setTheme", "Royal Navy");

    // var b = getRandom($("[data-settings]").length);
    // var c = $("[data-settings]")[b];
    // var d = getRandom($("[data-method]").length);
    // var e = $("[data-method]")[d];
    // var f = getRandom($("[data-event]").length);
    // var g = $("[data-event]")[f];
    // showSettingsSample($(c).data().settings);
    // showMethodSample($(e).data().method);
    // showEventSample($(g).data().event);
    // $("[data-settings]").on("click", function(a) {
    //     var b = $(a.target).closest("[data-settings]");
    //     var c = b.data().settings;
    //     showSettingsSample(c);
    // });
    // $("[data-method]").on("click", function(a) {
    //     var b = $(a.target).closest("[data-method]");
    //     var c = b.data().method;
    //     showMethodSample(c);
    // });
    // $("[data-event]").on("click", function(a) {
    //     var b = $(a.target).closest("[data-event]");
    //     var c = b.data().event;
    //     showEventSample(c);
    // });
});

// function showSettingsSample(a) {
//     var b = $("#event-settings");
//     var c;
//     switch (a) {
//       case "theme":
//         c = '<br><span class="green">// theme</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;<span class=\"violet\">'theme'</span>: <span class=\"red\">'Theme Name'</span><br>" + "});" + "<br> ";
//         break;

//       case "language":
//         c = '<br><span class="green">// language</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;<span class=\"violet\">'language'</span>: <span class=\"red\">'en'</span><br>" + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// Supported language: en, es, de..</span><br>' + "});" + "<br> ";
//         break;

//       case "format":
//         c = '<br><span class="green">// format</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;<span class=\"violet\">'format'</span>: <span class=\"red\">'MM dd, yyyy'</span><br>" + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// some browsers doesn\'t support other format, so...</span><br>' + "});" + "<br> ";
//         break;

//       case "titleFormat":
//         c = '<br><span class="green">// titleFormat</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;<span class=\"violet\">'titleFormat'</span>: <span class=\"red\">'MM'</span><br>" + "});" + "<br> ";
//         break;

//       case "eventHeaderFormat":
//         c = '<br><span class="green">// eventHeaderFormat</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;<span class=\"violet\">'eventHeaderFormat'</span>: <span class=\"red\">'MM dd'</span><br>" + "});" + "<br> ";
//         break;

//       case "firstDayOfWeek":
//         c = '<br><span class="green">// firstDayOfWeek</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="violet">\'firstDayOfWeek\'</span>: <span class="red">0</span> <span class="green">// Sun</span><br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// 0-6 (Sun-Sat)</span><br>' + "});" + "<br> ";
//         break;

//       case "todayHighlight":
//         c = '<br><span class="green">// todayHighlight</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="violet">\'todayHighlight\'</span>: <span class="blue">true</span><br>' + "});" + "<br> ";
//         break;

//       case "sidebarDisplayDefault":
//         c = '<br><span class="green">// sidebarDisplayDefault</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="violet">\'sidebarDisplayDefault\'</span>: <span class="blue">false</span><br>' + "});" + "<br> ";
//         break;

//       case "sidebarToggler":
//         c = '<br><span class="green">// sidebarToggler</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="violet">\'sidebarToggler\'</span>: <span class="blue">false</span><br>' + "});" + "<br> ";
//         break;

//       case "eventDisplayDefault":
//         c = '<br><span class="green">// eventDisplayDefault</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="violet">\'eventDisplayDefault\'</span>: <span class="blue">false</span><br>' + "});" + "<br> ";
//         break;

//       case "eventListToggler":
//         c = '<br><span class="green">// eventListToggler</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="violet">\'eventListToggler\'</span>: <span class="blue">false</span><br>' + "});" + "<br> ";
//         break;

//       case "calendarEvents":
//         c = '<br><span class="green">// calendarEvents</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'calendarEvents\'</span>, {<br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;<span class=\"violet\">'calendarEvents'</span>: [<br>" + "&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;{<br>" + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">id</span>: <span class="red">\'4hducye\'</span>, <span class="green">// Event\'s id (required, for removing event)</span><br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">description</span>: <span class="red">\'Lorem ipsum dolor sit amet..\'</span>, <span class="green">// Description of event (optional)</span><br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">badge</span>: <span class="red">\'1-day event\'</span>, <span class="green">// Event badge (optional)</span><br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">date</span>: <span class="blue">new</span> <span class="yellow">Date</span>(), <span class="green">// Date of event</span><br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">type</span>: <span class="red">\'holiday\'</span>, <span class="green">// Type of event (event|holiday|birthday)</span><br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">color</span>: <span class="red">\'#63d867\'</span>, <span class="green">// Event custom color (optional)</span><br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">everyYear</span>: <span class="blue">true</span> <span class="green">// Event is every year (optional)</span><br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;}<br>" + "&#8194;&#8194;&#8194;&#8194;&#8194;]<br>" + "});" + "<br> ";
//     }
//     $("[data-settings]").removeClass("active");
//     $('[data-settings="' + a + '"]').addClass("active");
//     b.html(c);
// }

// function showMethodSample(a) {
//     var b = $("#method-code");
//     var c;
//     switch (a) {
//       case "setTheme":
//         c = '<br><span class="green">// setTheme</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'setTheme\'</span>, <span class="red">\'Theme Name\'</span>);' + "<br> ";
//         break;

//       case "toggleSidebar":
//         c = '<br><span class="green">// toggleSidebar</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'toggleSidebar\'</span>);' + "<br> " + '<br><span class="green">// open sidebar</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'toggleSidebar\'</span>, <span class="blue">true</span>);' + "<br> ";
//         break;

//       case "toggleEventList":
//         c = '<br><span class="green">// toggleEventList</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'toggleEventList\'</span>);' + "<br> " + '<br><span class="green">// close event list</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'toggleEventList\'</span>, <span class="blue">false</span>);' + "<br> ";
//         break;

//       case "getActiveDate":
//         c = '<br><span class="green">// getActiveDate</span><br>' + '<span class="red">var</span> <span class="orange">active_date</span> = $(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'getActiveDate\'</span>);' + "<br> ";
//         break;

//       case "getActiveEvents":
//         c = '<br><span class="green">// getActiveEvents</span><br>' + '<span class="red">var</span> <span class="orange">active_events</span> = $(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'getActiveEvents\'</span>);' + "<br> ";
//         break;

//       case "selectYear":
//         c = '<br><span class="green">// selectYear</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'selectYear\'</span>, <span class="red">2021</span>);' + "<br> ";
//         break;

//       case "selectMonth":
//         c = '<br><span class="green">// selectMonth</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'selectMonth\'</span>, <span class="red">1</span>); <span class="green">// february</span>' + "<br> ";
//         break;

//       case "selectDate":
//         c = '<br><span class="green">// selectDate</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'selectDate\'</span>, <span class="red">\'February 15, 2020\'</span>);' + "<br> ";
//         break;

//       case "addCalendarEvent":
//         c = '<br><span class="green">// addCalendarEvent</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'addCalendarEvent\'</span>, {<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">id</span>: <span class="red">\'kNybja6\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">name</span>: <span class="red">\'Mom\\\'s Birthday\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">description</span>: <span class="red">\'Lorem ipsum dolor sit..\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">date</span>: <span class="red">\'May 27, 2020\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">type</span>: <span class="red">\'birthday\'</span><br>' + "});" + '<br><span class="green">// add multiple events</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'addCalendarEvent\'</span>, [<br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;{<br>" + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">id</span>: <span class="red">\'kNybja6\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">name</span>: <span class="red">\'Mom\\\'s Birthday\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">date</span>: <span class="red">\'May 27, 1965\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">type</span>: <span class="red">\'birthday\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">everyYear</span>: <span class="blue">true</span> <span class="green">// optional</span><br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;},<br>" + "&#8194;&#8194;&#8194;&#8194;&#8194;{<br>" + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">id</span>: <span class="red">\'asDf87L\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">name</span>: <span class="red">\'Graduation Day!\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">date</span>: <span class="red">\'March 21, 2020\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">type</span>: <span class="red">\'event\'</span><br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;}<br>" + "]);" + "<br> ";
//         break;

//       case "removeCalendarEvent":
//         c = '<br><span class="green">// removeCalendarEvent</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'removeCalendarEvent\'</span>, <span class="red">\'kNybja6\'</span>);' + "<br> " + '<br><span class="green">// delete multiple event</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'removeCalendarEvent\'</span>, [<span class="red">\'kNybja6\'</span>, <span class="red">\'asDf87L\'</span>]);' + "<br> ";
//         break;

//       case "destroy":
//         c = '<br><span class="green">// destroy</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'destroy\'</span>);' + "<br> ";
//     }
//     $("[data-method]").removeClass("active");
//     $('[data-method="' + a + '"]').addClass("active");
//     b.html(c);
// }

// function showEventSample(a) {
//     var b = $("#event-code");
//     var c;
//     switch (a) {
//       case "selectDate":
//         c = '<br><span class="green">// selectDate</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">on</span>(<span class="violet">\'selectDate\'</span>, <span class="blue">function</span>(<span class="yellow">event</span>, <span class="yellow">newDate</span>, <span class="yellow">oldDate</span>) {<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// code here...</span><br>' + "});" + "<br> ";
//         break;

//       case "selectEvent":
//         c = '<br><span class="green">// selectEvent</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">on</span>(<span class="violet">\'selectEvent\'</span>, <span class="blue">function</span>(<span class="yellow">event</span>, <span class="yellow">activeEvent</span>) {<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// code here...</span><br>' + "});" + "<br> ";
//         break;

//       case "selectMonth":
//         c = '<br><span class="green">// selectMonth</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">on</span>(<span class="violet">\'selectMonth\'</span>, <span class="blue">function</span>(<span class="yellow">event</span>, <span class="yellow">activeMonth</span>, <span class="yellow">monthIndex</span>) {<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// code here...</span><br>' + "});" + "<br> ";
//         break;

//       case "selectYear":
//         c = '<br><span class="green">// selectYear</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">on</span>(<span class="violet">\'selectYear\'</span>, <span class="blue">function</span>(<span class="yellow">event</span>, <span class="yellow">activeYear</span>) {<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// code here...</span><br>' + "});" + "<br> ";
//         break;

//       case "destroy":
//         c = '<br><span class="green">// destroy</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">on</span>(<span class="violet">\'destroy\'</span>, <span class="blue">function</span>(<span class="yellow">event</span>, <span class="yellow">evoCalendar</span>) {<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// code here...</span><br>' + "});" + "<br> ";
//     }
//     $("[data-event]").removeClass("active");
//     $('[data-event="' + a + '"]').addClass("active");
//     b.html(c);
// }

$('[data-go*="#"]').on("click", function (a) {
    a.preventDefault();
    var b = $(this).data().go;
    if ("#top" === b) {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return;
    } else var c = $(b)[0].offsetTop - $("header")[0].offsetHeight - 10;
    $("html, body").animate({
        scrollTop: c
    }, 500);
});