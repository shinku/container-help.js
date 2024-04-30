"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.registor = void 0;
var tools_1 = require("../tools");
var registor = /** @class */ (function () {
    function registor() {
    }
    registor.addVm = function (type, targetClass) {
        registor.pool[type] = targetClass;
    };
    registor.getVm = function (type) {
        return new registor.pool[type];
    };
    registor.pool = {};
    return registor;
}());
exports.registor = registor;
function logDec(target, key, desription) {
    var func = desription.value;
    desription.value = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, func.call.apply(func, __spreadArray([this], params, false))];
                    case 1:
                        result = _a.sent();
                        console.info(key + " ===> " + (result || []).join("\n"));
                        return [2 /*return*/, result];
                }
            });
        });
    };
}
var Container = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _runCommand_decorators;
    var _clearUnsedVolumes_decorators;
    return _a = /** @class */ (function () {
            function Container(type) {
                this.vmtype = __runInitializers(this, _instanceExtraInitializers);
                this.vmtype = type;
            }
            Container.prototype.runCommand = function (command) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        return [2 /*return*/, (0, tools_1.runCommand)("".concat(this.vmtype, " ").concat(command))];
                    });
                });
            };
            Container.prototype.version = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        return [2 /*return*/, this.runCommand("-version")];
                    });
                });
            };
            Container.prototype.pullImage = function (imageName) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, this.runCommand("pull " + imageName)];
                            case 1: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            };
            /**
             * 开启新的容器
             */
            Container.prototype.startVm = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        return [2 /*return*/];
                    });
                });
            };
            Container.prototype.showImages = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = tools_1.sliceCommandResult;
                                return [4 /*yield*/, this.runCommand('images')];
                            case 1: return [2 /*return*/, _b.apply(void 0, [_c.sent()])];
                        }
                    });
                });
            };
            Container.prototype.showInstanceLs = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = tools_1.sliceCommandResult;
                                return [4 /*yield*/, this.runCommand('ps -a')];
                            case 1: return [2 /*return*/, _b.apply(void 0, [_c.sent()])];
                        }
                    });
                });
            };
            Container.prototype.clearUnsedVolumes = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, this.runCommand('volume ls')];
                            case 1:
                                _b.sent();
                                return [4 /*yield*/, this.runCommand('volume prune -f')];
                            case 2:
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
            /**
             *
             * @param name
             * @returns
             */
            Container.prototype.findContainer = function (name) {
                return __awaiter(this, void 0, void 0, function () {
                    var ls, instance;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, this.showInstanceLs()];
                            case 1:
                                ls = _b.sent();
                                instance = ls.find(function (item) { return item.NAMES === name; });
                                return [2 /*return*/, instance];
                        }
                    });
                });
            };
            /**
             * remove a container
             * @param name
             */
            Container.prototype.removeContainer = function (name) {
                return __awaiter(this, void 0, void 0, function () {
                    var container;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, this.findContainer(name)];
                            case 1:
                                container = _b.sent();
                                if (!container) return [3 /*break*/, 4];
                                return [4 /*yield*/, this.runCommand("stop " + name)];
                            case 2:
                                _b.sent();
                                return [4 /*yield*/, this.runCommand("rm " + name)];
                            case 3:
                                _b.sent();
                                _b.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            };
            Object.defineProperty(Container.prototype, "image", {
                set: function (option) {
                    this.imageOption = option;
                },
                enumerable: false,
                configurable: true
            });
            /**
             * build a image
             */
            Container.prototype.buildImage = function (option) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                this.imageOption = option;
                                // goto dockerfilepath
                                return [4 /*yield*/, (0, tools_1.runCommand)('cd ' + option.dockerFilePath + " && " + this.vmtype + " build -t ".concat(option.imageName, ":").concat(option.version || "latest", " ."))];
                            case 1:
                                // goto dockerfilepath
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
            /**
             * remove image creared latest
             */
            Container.prototype.removeLatestImage = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, this.runCommand("rmi ".concat(this.imageOption.imageName))];
                            case 1:
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
            Container.prototype.removeImage = function (imageName) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, this.runCommand("rmi ".concat(imageName))];
                            case 1:
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
            /**
             * getImageNameAndVersion
             * @returns
             */
            Container.prototype.getImageNameAndVersion = function () {
                return "".concat(this.imageOption.imageName, ":").concat(this.imageOption.version || "latest");
            };
            /**
             * env option insert into image
             * @param option
             * @returns
             */
            Container.prototype.getImageEnvOption = function (option) {
                var commands = [];
                Object.keys(option.e || {}).forEach(function (key) {
                    commands.push("-e ".concat(key, "=").concat(option.e[key]));
                });
                return commands.join(" ");
            };
            /**
             * get run image
             * @param option
             * @returns
             */
            Container.prototype.getBaseRunCommand = function (option) {
                var otherOption = [];
                if (option.i) {
                    otherOption.push("-i");
                }
                if (option.t) {
                    otherOption.push("-t");
                }
                if (option.v) {
                    option.v.forEach(function (volume) { return otherOption.push(volume); });
                }
                if (option.tmpfs) {
                    otherOption.push("--tmpfs ".concat(option.tmpfs));
                }
                if (option.w) {
                    otherOption.push("-w ".concat(option.w));
                }
                return "run -p ".concat(option.p[0], ":").concat(option.p[1], " --name ").concat(option.name, " ").concat(otherOption.join(" "), " ").concat(this.getImageEnvOption(option), " -d ").concat(this.getImageNameAndVersion(), " ").concat(option.containerRunModel || "");
            };
            /**
             * run a image
             * @param option
             */
            Container.prototype.runImage = function (option) {
                return __awaiter(this, void 0, void 0, function () {
                    var container;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, this.findContainer(option.name)];
                            case 1:
                                container = _b.sent();
                                if (container) {
                                    throw new Error("".concat(option.name, " already existed"));
                                }
                                return [4 /*yield*/, this.runCommand(this.getBaseRunCommand(option))];
                            case 2:
                                _b.sent();
                                return [4 /*yield*/, this.findContainer(option.name)];
                            case 3: return [2 /*return*/, _b.sent()];
                        }
                    });
                });
            };
            return Container;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _runCommand_decorators = [logDec];
            _clearUnsedVolumes_decorators = [logDec];
            __esDecorate(_a, null, _runCommand_decorators, { kind: "method", name: "runCommand", static: false, private: false, access: { has: function (obj) { return "runCommand" in obj; }, get: function (obj) { return obj.runCommand; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _clearUnsedVolumes_decorators, { kind: "method", name: "clearUnsedVolumes", static: false, private: false, access: { has: function (obj) { return "clearUnsedVolumes" in obj; }, get: function (obj) { return obj.clearUnsedVolumes; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.Container = Container;
