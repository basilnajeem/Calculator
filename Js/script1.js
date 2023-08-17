$(document).ready(function () {
    // Clear the calculator screen
    function clearScreen() {
        $(".screen-out").val("");
    }

    // Evaluate the expression
    function evaluateExpression() {
        try {
            const expression = $(".screen-out").val();
            const result = eval(expression);
            $(".screen-out").val(result);
        } catch (error) {
            // Handle any errors, e.g., invalid expression
            $(".screen-out").val("Error");
        }
    }

    // Handle button clicks
    $(".btn").on("click", function () {
        const value = $(this).val();
        const screenValue = $(".screen-out").val();

        if (value === "C") {
            // Clear the screen
            clearScreen();
        } else if (value === "=") {
            // Evaluate and display the result
            evaluateExpression();
        } else {
            // Append the button value to the screen
            $(".screen-out").val(screenValue + value);
        }
    });
});