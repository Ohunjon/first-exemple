export class AuthService {
  private isAutheniticated = false;
  login()
  {
    this.isAutheniticated = true;
  }
  logout(){
    this.isAutheniticated= false;
    window.localStorage.clear();
  }
  isLoggedin(): boolean {
    const token = JSON.parse(window.localStorage.getItem('user'));
      //console.log(token);
      if (token)
        return true;
  }
}
