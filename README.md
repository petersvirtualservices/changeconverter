# changeconverter

# INSTALLATION AND CONFIGURATION INSTRUCTIONS
Chrome browser is necessary for working app.

# OPERATING INSTRUCTIONS
Enter the sale amount and given amount (bills given) into proper fields.  Necessary change should show up in the form of bills and coins.

# MANIFEST
index.html - Interface
script.js - Javascript File
style.css - CSS Stylesheet
ReadMe.md - Summary of Page
pastCalculations.html - Past Three Change Conversions

# LICENSES AND COPYRIGHT
MIT
© Charlene Peters 2021

# CONTACT INFORMATION
Charlene Peters
charlene@peters-services.com

# CREDITS AND ACKNOWLEDGEMENTS
My teachers and mentors were a big part of who I am.

# KNOWN BUGS
Will Report When Project Is Complete

++++

  // get current history, if any
  var history = JSON.parse(window.localStorage.getItem("history")) || [];

  if (history.length > 0) {
    searchWeather(history[history.length-1]);
  }

  for (var i = 0; i < history.length; i++) {
    makeRow(history[i]);
  }
});


+++++++++

  function getUVIndex(lat, lon) {
    $.ajax({
      type: "GET",
      url: "http://api.openweathermap.org/data/2.5/uvi?appid=7ba67ac190f85fdba2e2dc6b9d32e93c&lat=" + lat + "&lon=" + lon,
      dataType: "json",
      success: function(data) {
        var uv = $("<p>").text("UV Index: ");
        var btn = $("<span>").addClass("btn btn-sm").text(data.value);
        
        // change color depending on uv value
        if (data.value < 3) {
          btn.addClass("btn-success");
        }
        else if (data.value < 7) {
          btn.addClass("btn-warning");
        }
        else {
          btn.addClass("btn-danger");
        }
        
        $("#today .card-body").append(uv.append(btn));
      }
    });
  }

+++++++

