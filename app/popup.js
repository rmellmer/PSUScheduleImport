$(document).ready(function () {
    $("#title").text("Navigate to your Student Detail Schedule on PSU Banweb, then select Get Schedule");
    $("#calendarButton").hide();
    $("#help").hide();
    $("#button").mouseover(function () {
        $("#button").fadeTo(0, 1);
    });

    $("#button").mouseleave(function () {
        $("#button").fadeTo(0, 0.85)
    });

    $("#calendarButton").mouseover(function () {
        $("#calendarButton").fadeTo(0, 1);
    });

    $("#calendarButton").mouseleave(function () {
        $("#calendarButton").fadeTo(0, 0.85);
    });

    $("#calendarButton").click(function () {
        var icsMSG = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//PSU Calendar//NONSGML v1.0//EN";
        var classes = document.getElementById("classes");
        var classList = classes.childNodes;
        var time;
        var start;
        var end;
        var dates;
        var description;
        var days;
        var formattedDays;
        var location;
        for(var j = 0; j < classList.length - 1; j+=5)
        {
            formattedDays = "";
            description = classList.item(j + 1).textContent;
            time = classList.item(j + 2).textContent;
            if (time != "Meeting Time: TBA")
            {
                var s = new Date();
                var e = new Date();
                time = time.split(" - ", 5);
                start = time[0].substr(14, 5);
                var hour = start.split(":", 3)[0];
                var minute = start.split(":", 3)[1];
                s.setHours(hour);
                s.setMinutes(minute);

                end = time[1];
                hour = end.split(":", 3)[0];
                minute = end.split(":", 3)[1];
                e.setHours(hour);
                e.setMinutes(minute);

                days = classList.item(j + 3).textContent;
                days = days.substr(6, days.length);

                for (var index = 0; index < days.length; ++index) {
                    switch (days.charAt(index)) {
                        case "M": {
                            formattedDays = formattedDays.concat("MO");
                            break;
                        }
                        case "T": {
                            formattedDays = formattedDays.concat("TU");
                            break;
                        }
                        case "W": {
                            formattedDays = formattedDays.concat("WE");
                            break;
                        }
                        case "R": {
                            formattedDays = formattedDays.concat("TH");
                            break;
                        }
                        case "F": {
                            formattedDays = formattedDays.concat("FR");
                            break;
                        }
                        case "S": {
                            formattedDays = formattedDays.concat("SA");
                            break;
                        }
                        case "U": {
                            formattedDays = formattedDays.concat("SU");
                            break;
                        }
                    }
                    if (index != (days.length - 1)) formattedDays = formattedDays.concat(",");
                }
             
                dates = classList.item(j + 5).textContent.split("-", 6);
                switch (dates[1])
                {
                    case "JAN":
                        {
                            s.setMonth(0);
                            break;
                        }
                    case "FEB":
                        {
                            s.setMonth(1);
                            break;
                        }
                    case "MAR":
                        {
                            s.setMonth(2);
                            break;
                        }
                    case "APR":
                        {
                            s.setMonth(3);
                            break;
                        }
                    case "MAY":
                        {
                            s.setMonth(4);
                            break;
                        }
                    case "JUN":
                        {
                            s.setMonth(5);
                            break;
                        }
                    case "JUL":
                        {
                            s.setMonth(6);
                            break;
                        }
                    case "AUG":
                        {
                            s.setMonth(7);
                            break;
                        }
                    case "SEP":
                        {
                            s.setMonth(8);
                            break;
                        }
                    case "OCT":
                        {
                            s.setMonth(9);
                            break;
                        }
                    case "NOV":
                        {
                            s.setMonth(10);
                            break;
                        }
                    case "DEC":
                        {
                            s.setMonth(11);
                            break;
                        }
                }
                
                s.setFullYear(dates[2]);
                

                s.setDate(dates[0].substr(7, 2));
                switch (days.charAt(0)) {
                    case "T": {
                        s.setDate(s.getDate() + 1);
                        break;
                    }
                    case "W": {
                        s.setDate(s.getDate() + 2);
                        break;
                    }
                    case "R": {
                        s.setDate(s.getDate() + 3);
                        break;
                    }
                    case "F": {
                        s.setDate(s.getDate() + 4);
                        break;
                    }
                    case "S": {
                        s.setDate(s.getDate() + 5);
                        break;
                    }
                    case "U": {
                        s.setDate(s.getDate() + 6);
                        break;
                    }
                }

                e.setDate(dates[3]);

                switch (dates[4]) {
                    case "JAN":
                        {
                            e.setMonth(0);
                            break;
                        }
                    case "FEB":
                        {
                            e.setMonth(1);
                            break;
                        }
                    case "MAR":
                        {
                            e.setMonth(2);
                            break;
                        }
                    case "APR":
                        {
                            e.setMonth(3);
                            break;
                        }
                    case "MAY":
                        {
                            e.setMonth(4);
                            break;
                        }
                    case "JUN":
                        {
                            e.setMonth(5);
                            break;
                        }
                    case "JUL":
                        {
                            e.setMonth(6);
                            break;
                        }
                    case "AUG":
                        {
                            e.setMonth(7);
                            break;
                        }
                    case "SEP":
                        {
                            e.setMonth(8);
                            break;
                        }
                    case "OCT":
                        {
                            e.setMonth(9);
                            break;
                        }
                    case "NOV":
                        {
                            e.setMonth(10);
                            break;
                        }
                    case "DEC":
                        {
                            e.setMonth(11);
                            break;
                        }
                }
                e.setFullYear(dates[5]);

                var preStart = s.getFullYear().toString() +
                ((s.getMonth() + 1) < 10 ? "0" + (s.getMonth() + 1).toString() : (s.getMonth() + 1).toString()) +
                ((s.getDate() + 1) < 10 ? "0" + s.getDate().toString() : s.getDate().toString());

                var postStart;
                if (s.getHours().toString().length != 2) {
                    postStart = "0" + s.getHours().toString();
                }
                else {
                    postStart = s.getHours().toString();
                }
                if (s.getMinutes().toString().length != 2)
                {
                    postStart = postStart.concat("0" + s.getMinutes().toString() + "00");
                }
                else {
                    postStart = postStart.concat(s.getMinutes().toString() + "00");
                }

                var preEnd = e.getFullYear().toString() +
                ((e.getMonth() + 1) < 10 ? "0" + (e.getMonth() + 1).toString() : (e.getMonth() + 1).toString()) +
                ((e.getDate() + 1) < 10 ? "0" + e.getDate().toString() : e.getDate().toString());

                var postEnd;

                if (e.getHours().toString().length != 2) {
                    postEnd = "0" + e.getHours().toString();
                }
                else {
                    postEnd = e.getHours().toString();
                }
                if (e.getMinutes().toString().length != 2) {
                    postEnd = postEnd.concat("0" + e.getMinutes().toString() + "00");
                }
                else {
                    postEnd = postEnd.concat(e.getMinutes().toString() + "00");
                }

                location = classList.item(j + 4).textContent;
                location = location.substr(11, location.length);

                icsMSG = icsMSG.concat("\nBEGIN:VEVENT\nDTSTART:" + preStart + "T" + postStart + "\nDTEND:" + preStart + "T" + postEnd + "\nRRULE:FREQ=WEEKLY;UNTIL=" + preEnd + "T" + postEnd + ";WKST=SU;BYDAY=" + formattedDays + "\nSUMMARY:" + description + "\nLOCATION:" + location + "\nEND:VEVENT\n");
            }
        }
        icsMSG = icsMSG.concat("END:VCALENDAR");
        var downloadLink = document.createElement("a");
        downloadLink.href = "data:text/calendar;charset=utf8," + escape(icsMSG);
        downloadLink.download = "PSUTermSchedule.ics";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        $("#help").show();
    });

    $("#help").click(function () {
        chrome.tabs.create({url: "https://support.google.com/calendar/answer/37118?hl=en"})
    });

    $("#button").click(function () {
        chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
            var url = tabs[0].url;
            //If on correct webpage
            if (url.indexOf("Detl") != -1) {
                if (document.getElementById("classes").childNodes.length <= 1) {
                    chrome.tabs.executeScript(null, { file: "content_script.js" }, function () {
                        chrome.tabs.getSelected(null, function (tab) {
                            // Send a request to the content script.
                            chrome.tabs.sendRequest(tab.id, { action: "getDOM" }, function (response) {

                                var tabDOM = response.dom;
                                var parser = new DOMParser();
                                var doc = parser.parseFromString(tabDOM, "text/html");

                                var classNames = doc.getElementsByClassName("datadisplaytable");

                                if (classNames.length != 0) {
                                    document.getElementById("title").textContent = "Classes Found:";
                                    var classTable = document.getElementById("classes");
                                    for (var i = 0; i < classNames.length; ++i) {
                                        if (i % 2 == 0) {
                                            var classNode = document.createElement("dt");
                                            classNode.appendChild(document.createTextNode(classNames.item(i).firstChild.textContent));
                                            classTable.appendChild(classNode);
                                        }
                                        else {
                                            var classInfo = document.createElement("dd");
                                            classInfo.appendChild(document.createTextNode("Meeting Time: " + classNames.item(i).childNodes.item(2).childNodes.item(2).childNodes.item(3).textContent));
                                            classTable.appendChild(classInfo);

                                            classInfo = document.createElement("dd");
                                            classInfo.appendChild(document.createTextNode("Days: " + classNames.item(i).childNodes.item(2).childNodes.item(2).childNodes.item(5).textContent));
                                            classTable.appendChild(classInfo);

                                            classInfo = document.createElement("dd");
                                            classInfo.appendChild(document.createTextNode("Classroom: " + classNames.item(i).childNodes.item(2).childNodes.item(2).childNodes.item(7).textContent));
                                            classTable.appendChild(classInfo);

                                            classInfo = document.createElement("dd");
                                            classInfo.appendChild(document.createTextNode("Dates: " + classNames.item(i).childNodes.item(2).childNodes.item(2).childNodes.item(9).textContent));
                                            classTable.appendChild(classInfo);

                                        }
                                    }
                                    document.getElementById("instruction").textContent = "To download a calendar file to import into Google Calendar or open with Outlook, select Generate Calendar.";
                                    $("#calendarButton").show();
                                }
                                else {
                                    document.getElementById("title").textContent = "No courses found. Navigate to your Student Detail Schedule on PSU Banweb and try again.";
                                }
                            });
                        });
                    });
                }
            }
            else {
                document.getElementById("title").textContent = "No courses found. Navigate to your Student Detail Schedule on PSU Banweb and try again.";
            }
        
        });
    });
});


