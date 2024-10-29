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
import PocketBase from 'pocketbase';
export var PocketBaseProvider = function (apiUrl) {
    var pb = new PocketBase(apiUrl);
    pb.autoCancellation(false);
    return {
        pb: pb,
        dataProvider: {
            // Does not currently apply any filters to data returned.
            getList: function (resource, params) { return __awaiter(void 0, void 0, void 0, function () {
                var _a, page, perPage, _b, field, order, pb_sort, resultList;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = params.pagination, page = _a.page, perPage = _a.perPage;
                            _b = params.sort, field = _b.field, order = _b.order;
                            pb_sort = "".concat(order === 'DESC' ? '-' : '+').concat(field);
                            return [4 /*yield*/, pb.collection(resource).getList(page, perPage, {
                                    sort: pb_sort,
                                })];
                        case 1:
                            resultList = _c.sent();
                            return [2 /*return*/, {
                                    data: resultList.items,
                                    total: resultList.totalItems,
                                }];
                    }
                });
            }); },
            getOne: function (resource, params) { return __awaiter(void 0, void 0, void 0, function () {
                var record;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, pb.collection(resource).getOne(params.id)];
                        case 1:
                            record = _a.sent();
                            return [2 /*return*/, { data: record }];
                    }
                });
            }); },
            getMany: function (resource, params) { return __awaiter(void 0, void 0, void 0, function () {
                var records;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, pb.collection(resource).getFullList({
                                filter: params.ids.map(function (id) { return "id=\"".concat(id, "\""); }).join('||'),
                            })];
                        case 1:
                            records = _a.sent();
                            return [2 /*return*/, { data: records }];
                    }
                });
            }); },
            // Does not currently apply any filters to data returned.
            getManyReference: function (resource, params) { return __awaiter(void 0, void 0, void 0, function () {
                var _a, page, perPage, _b, field, order, pb_sort, resultList;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = params.pagination, page = _a.page, perPage = _a.perPage;
                            _b = params.sort, field = _b.field, order = _b.order;
                            pb_sort = "".concat(order === 'DESC' ? '-' : '+').concat(field);
                            return [4 /*yield*/, pb.collection(resource).getList(page, perPage, {
                                    sort: pb_sort,
                                    filter: "".concat(params.target, " = ").concat(params.id),
                                })];
                        case 1:
                            resultList = _c.sent();
                            return [2 /*return*/, {
                                    data: resultList.items,
                                    total: resultList.totalItems,
                                }];
                    }
                });
            }); },
            create: function (resource, params) { return __awaiter(void 0, void 0, void 0, function () {
                var record;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, pb.collection(resource).create(params.data)];
                        case 1:
                            record = _a.sent();
                            return [2 /*return*/, { data: record }];
                    }
                });
            }); },
            update: function (resource, params) { return __awaiter(void 0, void 0, void 0, function () {
                var record;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, pb.collection(resource).update(params.id, params.data)];
                        case 1:
                            record = _a.sent();
                            return [2 /*return*/, { data: record }];
                    }
                });
            }); },
            updateMany: function (resource, params) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    throw { name: "NotImplementedError", message: "Not implemented in this release." };
                });
            }); },
            delete: function (resource, params) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, pb.collection(resource).delete(params.id)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, { data: params.previousData }];
                    }
                });
            }); },
            deleteMany: function (resource, params) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    throw { name: "NotImplementedError", message: "Not implemented in this release." };
                });
            }); },
        },
        authProvider: {
            login: function (_a) {
                var username = _a.username, password = _a.password;
                return __awaiter(void 0, void 0, void 0, function () {
                    var authData;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, pb.collection('users').authWithPassword(username, password)];
                            case 1:
                                authData = _b.sent();
                                return [2 /*return*/, Promise.resolve()];
                        }
                    });
                });
            },
            checkError: function (error) {
                var status = error.status;
                if (status === 401 || status === 403) {
                    pb.authStore.clear();
                    return Promise.reject();
                }
                // other error code (404, 500, etc): no need to log out
                return Promise.resolve();
            },
            logout: function () {
                pb.authStore.clear();
                return Promise.resolve();
            },
            checkAuth: function () {
                return pb.authStore.isValid ? Promise.resolve() : Promise.reject();
            },
            getIdentity: function () {
                if (pb.authStore.isValid) {
                    return Promise.resolve({
                        id: pb.authStore.model.id,
                        fullName: pb.authStore.model.name,
                        avatar: pb.files.getUrl(pb.authStore.model, pb.authStore.model.avatar, { 'thumb': '100' }),
                    });
                }
                else {
                    return Promise.reject();
                }
            },
            getPermissions: function () { return Promise.resolve(pb.authStore.model); },
        },
    };
};
//# sourceMappingURL=index.js.map