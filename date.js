//we can use multiple  functiones to create a instance of this module 
//and after that we can get acces to that by simple put a "." and the function
// this is the same as put module.exports ... is like a shortcut xD
exports.getDate = function () {

    const today = new Date();

    const options = {   //look that we declare as a const this kind of values cause this variable wont change after in the code ...
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("es-AR", options);



};


exports.getDay = function () {

    const today = new Date();

    const options = {
        weekday: "long"
    };

    return today.toLocaleDateString("es-AR", options);



};