import { inject } from "@angular/core";
import { userService } from "../../services/user.service";
import { Router } from "@angular/router";

export function authGuard() {
    const user = inject(userService).getUser()
    if (user) return true
    else {
        inject(Router).navigateByUrl('/signup')
        return false
    }
}