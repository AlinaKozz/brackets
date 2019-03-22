module.exports = function check(str, bracketsConfig) {
    var open = [], close = [], stack = [];

    for (var i = 0; i < bracketsConfig.length; i++) {
        open.splice(i, 0, bracketsConfig[i][0]);
        close.splice(i, 0, bracketsConfig[i][1]);
    }

    for (var i = 0; i < str.length; i++) {
        var bracket = str[i];
        if (open.indexOf(bracket) !== -1) {
            if (stack[stack.length - 1] !== close.indexOf(bracket)) {
                stack.push(open.indexOf(bracket));
                continue
            }
        }

        if (close.indexOf(bracket) !== -1) {
            var pop = stack.pop();
            if (close.indexOf(bracket) !== pop) {
                return false
            }
        }
    }

    return stack.length === 0 ? true : false
};