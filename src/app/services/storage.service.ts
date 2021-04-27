import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "src/app/config/storage_keys.config";
import { User } from "../security/authentication/login/user.model";

@Injectable()
export class StorageService {

    getLocalUser(): User {
        let user = sessionStorage.getItem(STORAGE_KEYS.localUser);
        if (user == null) {
            return null;
        }else {
            return JSON.parse(user);
        }
    }

    setLocalUser(obj: User) {
        if (obj == null) {
            sessionStorage.removeItem(STORAGE_KEYS.localUser);
        }else {
            sessionStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    }
}