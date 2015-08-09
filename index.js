function domSort(selector, sort) {
    function id() {
        return domSort.reverseIdentifier;
    }

    function reverse(key) {
        return key.indexOf(id()) > -1;
    }

    function raw(key) {
        return key.substring(reverse(key) ? id().length : 0);
    }

    var $items = $(selector);
    var $parent = $items.parent();

    $items
        .map(function () {
            var $item = $(this);
            $item.remove();

            var data = {};
            for (var index in sort) {
                if (sort.hasOwnProperty(index)) {
                    var item = $item.find(raw(sort[index]));
                    if (item.is(':input')) {
                        data[index] = item.val();
                    } else {
                        data[index] = item.text();
                    }
                }
            }

            return {
                element: $item,
                data: data
            };
        })
        .sort(function (a, b) {
            for (var index in sort) {
                if (sort.hasOwnProperty(index)) {
                    if (a.data[index] < b.data[index]) {
                        return reverse(sort[index]) ? -1 : 1;
                    }
                    if (a.data[index] > b.data[index]) {
                        return reverse(sort[index]) ? 1 : -1;
                    }
                }
            }

            return 0;
        })
        .map(function () {
            $parent.append(this.element);
        });
}
domSort.reverseIdentifier = '!';