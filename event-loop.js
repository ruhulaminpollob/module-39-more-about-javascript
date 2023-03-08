const a =()=>{
    console.log('a');
    b()
    console.log('aa');

}
const b =()=>{
    console.log('b');
    c()
    console.log('bb');
}
const c =()=>{
    console.log('c');
}
const x =()=>{
    console.log('x');
    y()
    console.log('xx');
}
const y =()=>{
    console.log('y');
    z()
    console.log('yy');
}
const z =()=>{
    console.log('z');
    console.log('zz');
}

a();
x();