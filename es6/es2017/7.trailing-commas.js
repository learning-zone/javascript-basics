// Params include trailing comma
function func(a,b,) { // declaration
    console.log(a, b);
}
func(1,2,); // invocation

// function call only contains a comma
function func1(,) {  // SyntaxError: missing formal parameter
    console.log('no args');
};
func1(,); // SyntaxError: expected expression, got ','