function calculate(s: string): number {
    function codeAt(x: string, ord: number = 0) {
        return x.charCodeAt(ord);
    }

    function isDigit(x: string) {
        return codeAt(x) >= codeAt('0') && codeAt(x) <= codeAt('9');
    }

    function delim(op: string) {
        return op === ' ';
    }

    function is_op(op: string) {
        return ['+', '-', '*', '/'].includes(op);
    }

    function prec(op: string) {
        switch (op) {
            case '+': case '-':
                return 0;
            case '*': case '/':
                return 1;
            default:
                return -1;
        }
    }

    function calc() {
        const b: number = lst.pop();
        const a: number = lst.pop();
        const op: string = ops.pop();

        switch (op) {
           case '+': lst.push(a + b); break;   
           case '-': lst.push(a - b); break;
           case '*': lst.push(a * b); break;
           case '/': lst.push(a / b); break;
        }
    }

    const lst: number[] = [];
    const ops: string[] = [];

    if (s[0] === '-') {
        s = '0' + s;
    }
    s = s.split('').filter(x => x != ' ').join('');

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            ops.push(s[i]);
        } else if (s[i] === ')') {
            while (ops.length && ops.at(-1) !== '(') {
               calc(); 
            }
            ops.pop();
        } else if (isDigit(s[i])) {
            let num: string = "";
            while (i < s.length && isDigit(s[i])) {
                num += s[i];
                i++;
            }
            i--;
            lst.push(+num);
        } else {
            let cur_op: string = s[i];
            while (ops.length && prec(ops.at(-1)) >= prec(cur_op)) {
                calc();
            }
            if (ops.length && prec(ops.at(-1)) === -1 && s[i] === '-' && s[i - 1] === ops.at(-1)) {
                lst.push(0);
            }
            ops.push(cur_op);
        }

        // console.log(lst, ops);
    }
    while (ops.length) {
        calc();
    }
    return lst[0];
};