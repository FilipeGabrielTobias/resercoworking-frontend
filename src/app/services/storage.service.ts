import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "src/app/config/storage_keys.config";
import { User } from "../security/authentication/login/user.model";

@Injectable()
export class StorageService {

    getLocalUser(): User {
        let user = localStorage.getItem(STORAGE_KEYS.localUser);
        if (user == null) {
            return null;
        }else {
            return JSON.parse(user);
        }
    }

    setLocalUser(obj: User) {
        if (obj == null) {
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }else {
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    }
}