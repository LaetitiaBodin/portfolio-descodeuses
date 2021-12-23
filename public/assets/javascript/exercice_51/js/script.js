$('input').focusout(function () {
    let valueDiv = parseFloat($(this).val());
    if (valueDiv == -0 || valueDiv < 0 || valueDiv > 20 || isNaN(valueDiv)) {
        $(this).css({backgroundColor: '#FF0000'});
    } else {
        $(this).css({backgroundColor: ''});
    }
})

$('#getAvgGrade').click(function () {
    let addedGrades = 0;
    $('input').each(function () {
        if ( parseFloat($(this).val()) == -0 || 
             parseFloat($(this).val()) < 0 || 
             parseFloat($(this).val()) > 20 || 
             isNaN(parseFloat($(this).val())) ) {
            addedGrades += NaN;
        } else {
            addedGrades += parseFloat($(this).val());
        }
    })
    if (isNaN(addedGrades)) {
        alert('ERREUR !\nLa moyenne ne peut pas être calculée !');
        $('#avgGrade').html('?');
    } else {
        $('#avgGrade').html((addedGrades / 5).toString().replace('.', ','));
    }
})