function increment(selector) {
    var container = $(selector)
    var fragment = $('div')
    var textArea = $('<textarea>')
    var incrementBtn = $('<button>')
    var addBtn = $('<button>Add</button>')
    var list =$('<ul>')

    textArea.addClass('counter')
        .val(0)
        .attr('disable','disabled')
    incrementBtn
        .addClass('btn')
        .attr('id','incrementBtn')
        .text('Increment')
    addBtn
        .addClass('btn')
        .attr('id','addBtn')
    list.addClass('result')

    textArea.appendTo(fragment)
    incrementBtn.appendTo(fragment)
    addBtn.appendTo(fragment)
    list.appendTo(fragment)
    fragment.appendTo(container)


}
$('body')
    .on('click','#incrementBtn',function () {
        var textAreaValue = parseInt($('textarea').val())
        $('textarea').val(textAreaValue +1)
    })
    .on('click', '#addBtn', function () {
        var textAreaValue = parseInt($('textarea').val())
        var li = $('<li>')
        li.text(textAreaValue)
        li.appendTo('ul')
        if($('#addBtn' + 1)){
            $('textarea').val(0)
        }
    })
increment('#wrapper')