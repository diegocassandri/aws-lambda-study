let messages = [
    "Hello!!!",
    "Is grate day!",
    "#RandomMessage"
];

exports.handler = async (event,context) => {
    let messsage = messages[Math.floor(Math.random()*10)];

    return message;
}