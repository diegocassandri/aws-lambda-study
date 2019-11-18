let messages = [
    "Hello!!!",
    "Is grate day!",
    "#RandomMessage"
];

exports.handler = async (event,context) => {
    let message = messages[Math.floor(Math.random()*10)];

    return message;
};