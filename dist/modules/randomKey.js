"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomKey = void 0;
const randomKey = () => {
    const randomKey = Math.floor(Math.random() * 10000000);
    const timeOfCreation = new Date().getTime();
    return {
        value: randomKey,
        timeOfCreation: timeOfCreation,
    };
};
exports.randomKey = randomKey;
//# sourceMappingURL=randomKey.js.map