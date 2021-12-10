"use strict";
exports.__esModule = true;
exports.fetchedNameToUppercaseName = exports.fetchData = exports.fetchUser = exports.checkValue = exports.createUser = exports.isNull = exports.add = void 0;
var axios_1 = require("axios");
var add = function (num1, num2) {
    return num1 + num2;
};
exports.add = add;
var isNull = function () {
    return null;
};
exports.isNull = isNull;
var createUser = function () {
    // could be database call or something like that
    var user = { firstName: "Joe", lastName: "Doe", age: 50, isLoggedIn: true };
    return user;
};
exports.createUser = createUser;
var checkValue = function (value) { return value; };
exports.checkValue = checkValue;
var fetchUser = function () {
    return axios_1["default"]
        .get("https://jsonplaceholder.typicode.com/users/1")
        .then(function (res) { return res.data; })["catch"](function (err) { return console.log(err); });
};
exports.fetchUser = fetchUser;
var fetchData = function () {
    return axios_1["default"]
        .get("https://jsonplaceholder.typicode.com/users/1")
        .then(function (res) { return res.data; })["catch"](function (err) { return console.log(err); });
};
exports.fetchData = fetchData;
var fetchedNameToUppercaseName = function () {
    return (0, exports.fetchData)().then(function (data) {
        return data.name.toUpperCase();
    });
};
exports.fetchedNameToUppercaseName = fetchedNameToUppercaseName;
