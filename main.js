const originalAlert = window.alert;

window.alert = () => window.confirm();
window.confirm = () => window.prompt();
window.prompt = () => originalAlert();

// The same but with array distructuring
[window.alert, window.confirm, window.prompt] = [() => window.confirm(), () => window.prompt(), () => window.alert()];
