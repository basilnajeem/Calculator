$(document).ready(function () {
    const button = $('.calc-button');
    const display = $('.screen-out');

    $(button).on('click', function () {
        let currentValue = $(this).val()
        let displayValue = $(display).val() == '0' ? '' : $(display).val()
        $(display).val(displayValue + currentValue)
    })

    $('.equalto-button').on('click', function () {
        let displayValue = $(display).val();
        let calculatedValue = eval(displayValue);
        $(display).val(calculatedValue)
    })

    $('.clear-button').on('click', function () {
        $(display).val('')
    })
});