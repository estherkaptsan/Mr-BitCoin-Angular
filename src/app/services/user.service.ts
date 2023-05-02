import { storageService } from "./async-storage.service"
import { Observable, BehaviorSubject, of } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'
import { User } from "../models/user"
import { Contact } from "../models/contact.model"

const ENTITY = 'user'
type Entity = User

export class userService {

  private _user$ = new BehaviorSubject<User[]>([])
  public user$ = this._user$.asObservable()

  constructor() { }

  getUser(): User | undefined {
    const user = storageService.load(ENTITY)
    if (user) {
      user.moves = Array.isArray(user.moves) ? user.moves : []
      return user as User
    } else {
      return undefined
    }
  }

  public signup(userName: string) {
    const user: User = {
      name: userName,
      coins: 100,
      moves: []
    }
    localStorage.setItem(ENTITY, JSON.stringify(user))

    return of(user)
  }

  addMove(contact: string, amount: number): Observable<User | boolean> {
    return new Observable(observer => {
      const user = this.getUser()
      if (user && user.coins >= amount) {
        const newMove = { to: contact, amount, at: Date.now() }
        const updatedUser: User = {
          ...user,
          coins: user.coins - amount,
          moves: [...user.moves, newMove]
        }
        storageService.store(ENTITY, updatedUser)
        observer.next(updatedUser)
      } else {
        observer.next(false)
      }
      observer.complete()
    })
  }

  public getLoggedInUser() {
    return this._user$.value
  }

  getUserMoves(contact?: Contact) {
    const user = this.getUser()
    if (user) {
      if (contact) {
        return user.moves.filter(move => move.to.name === contact.name)
      } else {
        return user.moves.slice(-3).reverse()
      }
    } else {
      return []
    }
  }
}