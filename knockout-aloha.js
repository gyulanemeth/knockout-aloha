ko.bindingHandlers.aloha = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var $element = $(element),
            modelValue = valueAccessor(),
            value = ko.utils.unwrapObservable(valueAccessor()),
            id = $element.attr('id'),
            alohaId = '#' + id + '-aloha';

        Aloha.bind("aloha-smart-content-changed", function (event, editable) {
            var val = $(alohaId).html();
            modelValue(val);
        });

        Aloha.ready(function () {
            $(element).aloha();
        });
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var $element = $(element),
            modelValue = valueAccessor(),
            value = ko.utils.unwrapObservable(valueAccessor()),
            id = $element.attr('id'),
            alohaId = '#' + id + '-aloha';

        $(alohaId).html(value);
        $(element).html(value);
    }
};