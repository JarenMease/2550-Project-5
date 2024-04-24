// Code header/disclaimer
/*
 * This code was written by Jaren Mease.
 * Any modifications or use of this code must be approved by the author.
 */

$(document).ready(function(){
    $(".menu-link").click(function(){
        // Check if the clicked link is the "Biography" link
        if ($(this).hasClass("external-link")) {
            // If it is, let it navigate to the new page without applying the show/hide functionality
            return true;
        }
        // Otherwise, apply the show/hide functionality as before
        var target = $(this).attr("href");
        $("section").removeClass("active");
        $(target).addClass("active");
        $(".menu-link").removeClass("active");
        $(this).addClass("active");
        return false;
    });
});


$("#toggle-button").click(function() {
    // Get the current active style sheet
    var currentStyleSheet = $("link[rel='stylesheet']").attr("href");

    console.log("Current style sheet: " + currentStyleSheet); // Debug line

    // Define the path to the alternative style sheet
    var altStyleSheet = "./alt_styles.css";

    // Check if the alternative style sheet is currently active and switch back to the main style sheet
    if (currentStyleSheet === altStyleSheet) {
        console.log("Switching to main style sheet"); // Debug line
        $("link[rel='stylesheet']").attr("href", "./styles.css");
    } else {
        // Otherwise, switch to the alternative style sheet
        console.log("Switching to alternative style sheet"); // Debug line
        $("link[rel='stylesheet']").attr("href", altStyleSheet);
    }

    // Log the new active style sheet
    console.log("New style sheet: " + $("link[rel='stylesheet']").attr("href")); // Debug line
});


