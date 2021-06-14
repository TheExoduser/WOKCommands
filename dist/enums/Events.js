"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Events;
(function (Events) {
    Events["DATABASE_CONNECTED"] = "databaseConnected";
    Events["LANGUAGE_NOT_SUPPORTED"] = "languageNotSupported";
    Events["COMMAND_EXCEPTION"] = "commandException";
    Events["COMMAND_EXECUTED"] = "commandExecuted";
})(Events || (Events = {}));
exports.default = Events;
