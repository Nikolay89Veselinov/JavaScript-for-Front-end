function renderForm() {
    let heading = $('<h1>')
    heading
        .text('Basic calculated fields sample.')
        .appendTo('#header-ctr')
    let hr = $('<hr>')
    hr.appendTo('#header-ctr')

    let labelOne = $('<label>')
    labelOne
        .addClass('one')
        .appendTo('form')
    let distance = $('<span>')
    distance
        .text('Distance (mi) *')
        .appendTo('.one')
    let inputDistance = $('<input>')
    inputDistance
        .attr('type', 'text')
        .attr('placeholder', 'Enter Distance')
        .attr('required', true)
        .appendTo(labelOne)

    let labelTwo = $('<label>')
    labelTwo
        .addClass('two')
        .appendTo('form')
    let spanWeight = $('<span>')
    spanWeight
        .text('Weight (lb)')
        .appendTo(labelTwo)
    let inputWeight = $('<input>')
        .attr('type', 'text')
        .attr('placeholder', 'Enter Weight')
        .attr('required', true)
        .appendTo(labelTwo)
    let fragile = $('<span>')
    fragile
        .addClass('fragile')
        .text('Fragile')
        .appendTo(labelTwo)
    let select = $('<select>')
    select
        .attr('name', 'fragile-menu')
        .appendTo(labelTwo)
    let firstOption = $('<option>')
    firstOption
        .attr('value', 'Value 0')
        .attr('disabled', true)
        .attr('selected', true)
        .text('Select Something')
        .appendTo(select)
    let secondOption = $('<option>')
    secondOption
        .attr('value', 'Value 1')
        .text('No')
        .appendTo(select)
    let thirdOption = $('<option>')
    thirdOption
        .attr('value', 'Value 2')
        .text('Yes')
        .appendTo(select)

    let labelThree =$('<label>')
    labelThree
        .addClass('three')
        .appendTo('form')
    let spanLength = $('<span>')
    spanLength
        .text('Length (in)')
        .appendTo(labelThree)
    let spanHeight = $('<span>')
    spanHeight
        .addClass('height')
        .text('height (in)')
        .appendTo(labelThree)
    let spanWidth = $('<span>')
    spanWidth
        .addClass('width')
        .text('width (in)')
        .appendTo(labelThree)
    let inputLenght = $('<input>')
    inputLenght
        .attr('type', 'number')
        .attr('placeholder', 'Length')
        .appendTo(labelThree)
    let inputHeight = $('<input>')
    inputHeight
        .attr('type', 'number')
        .attr('placeholder', 'Height')
        .appendTo(labelThree)
    let range = $('<input>')
    range
        .attr('type', 'number')
        .attr('placeholder', '10')
        .attr('min', '1')
        .attr('max', '1000')
        .appendTo(labelThree)

    let labelFour =$('<label>')
    labelFour
        .addClass('four')
        .appendTo('form')
    let heading3 = $('<h3>')
    heading3
        .text('Extra services:')
        .appendTo(labelFour)
    let paragraphOne = $('<p>')
    paragraphOne
        .text('Insurance')
        .appendTo(labelFour)
    let checkBoxOne = $('<input>')
    checkBoxOne
        .attr('type', 'checkbox')
        .appendTo(paragraphOne)
    let paragraphTwo = $('<p>')
    paragraphTwo
        .text('Express Delivery')
        .appendTo(labelFour)
    let checkBoxTwo = $('<input>')
    checkBoxTwo
        .attr('type', 'checkbox')
        .appendTo(paragraphTwo)

    let labelPrice =$('<label>')
    labelPrice
        .addClass('price')
        .appendTo('form')
    let spanTotal = $('<p>')
    spanTotal
        .text('total:')
        .appendTo(labelPrice)
    let paragraphTotalPrice = $('<p>')
    paragraphTotalPrice
        .addClass('total-price')
        .text('$ 00.00')
        .appendTo(labelPrice)

    let paragraphSubmit = $('<p>')
    paragraphSubmit
        .addClass('submit')
        .text('Im Ready')
        .appendTo('form')


}
function renderSuccessNotification() {
    let fragment = document.createDocumentFragment();

    $("<h1>")
        .text("Good Job!")
        .appendTo(fragment);

    $("<img>")
        .attr({
            src: "register_success.png",
            alt: "success"
        })
        .appendTo(fragment);

    $(".after-success").append(fragment);
}
function addEvents() {
    $(".submit").click(function() {
        $("#header-ctr").hide()
        $("form").hide()
        $(".after-success").removeClass("hidden")
    })
}
renderForm()
renderSuccessNotification()
addEvents()
